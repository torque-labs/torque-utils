import { ActionGetResponse } from "@solana/actions";
import { getTokenDetails } from "../tokens.js";
import {
  SwapAction,
  NftCollectionTradeAction,
  ClickAction,
  EventType,
  NftBidBuy,
  RealmsVoteAction,
  MemoAction,
} from "../types/index.js";
import { getTensorSlugFromCollectionAddress, TORQUE_API_URL } from "./util.js";

const buildTitle = async (
  eventType: EventType,
  eventConfig: any,
  incomingBlink?: ActionGetResponse
) => {
  let words: string;
  if (eventType === EventType.NFT_COLLECTION_TRADE) {
    const collection = incomingBlink?.title.split("Buy Floor ")[1];
    if (eventConfig.tradeType === "BUY") {
      words = `Buy ${collection}`;
    } else if (eventConfig.tradeType === "SELL") {
      words = `Sell ${collection}`;
    } else {
      words = `Trade ${collection}`;
    }
  } else if (eventType === EventType.SWAP) {
    if (
      eventConfig.inToken &&
      eventConfig.inAmount > 0 &&
      eventConfig.outToken
    ) {
      const inDetails = await getTokenDetails(eventConfig.inToken);
      const outDetails = await getTokenDetails(eventConfig.outToken);
      words = `Swap ${eventConfig.inAmount} $${inDetails.symbol} for $${outDetails.symbol}`;
    } else if (
      eventConfig.inToken &&
      eventConfig.outAmount > 0 &&
      eventConfig.outToken
    ) {
      const inDetails = await getTokenDetails(eventConfig.inToken);
      const outDetails = await getTokenDetails(eventConfig.outToken);
      words = `Swap $${inDetails.symbol} for ${eventConfig.outAmount} $${outDetails.symbol}`;
    } else if (
      eventConfig.inToken &&
      eventConfig.inAmount > 0 &&
      !eventConfig.outToken
    ) {
      const inDetails = await getTokenDetails(eventConfig.inToken);
      words = `Sell ${eventConfig.inAmount} $${inDetails.symbol}`;
    } else if (
      eventConfig.outToken &&
      eventConfig.outAmount > 0 &&
      !eventConfig.inToken
    ) {
      const outDetails = await getTokenDetails(eventConfig.outToken);
      words = `Buy ${eventConfig.outAmount} $${outDetails.symbol}`;
    } else {
      throw new Error("Invalid swap action schema");
    }
  } else {
    throw new Error("Invalid event type");
  }
  return words;
};

export const convertBlinkToTorqueBlink = async (
  blink: ActionGetResponse,
  eventType: EventType,
  eventConfig: any,
  offerId: string,
  publisherHandle: string,
  remainingConversions?: number,
  userRewardType?: string,
  userRewardToken?: string,
  userRewardAmount?: number,
  raffleRewardType?: string,
  raffleRewardToken?: string,
  raffleRewardAmount?: number,
  holdForSeconds?: number,
  currentConversions?: number,
  index?: number
): Promise<ActionGetResponse> => {
  let title =
    eventType === EventType.SWAP || eventType === EventType.NFT_COLLECTION_TRADE
      ? await buildTitle(eventType, eventConfig, blink)
      : eventType === EventType.MEMO
      ? "Complete the Form"
      : blink.title;

  let description = "";
  if (holdForSeconds) {
    const dayDuration = holdForSeconds / 60 / 60 / 24;
    const days = dayDuration > 1 ? "days" : "day";
    description = `⏰ Hold for ${dayDuration} ${days} `;
  }
  if (
    raffleRewardType === "TOKENS" &&
    raffleRewardToken &&
    raffleRewardAmount
  ) {
    const rewardDetails = await getTokenDetails(raffleRewardToken);
    console.log(rewardDetails);
    const tokenDesc =
      rewardDetails.tokenStandard === "ProgrammableNonFungible"
        ? rewardDetails.name
        : `$${rewardDetails.symbol}`;
    if (eventType === EventType.REALMS_VOTE) {
      title += ` 🎟️ Raffle Prize: ${
        raffleRewardAmount / 10 ** rewardDetails.decimals
      } ${tokenDesc}`;
      description = blink.description;
    } else {
      description += `🎟️ Raffle Prize: ${
        raffleRewardAmount / 10 ** rewardDetails.decimals
      } ${tokenDesc}`;
    }
  } else if (
    userRewardType === "TOKENS" &&
    userRewardToken &&
    userRewardAmount
  ) {
    const rewardDetails = await getTokenDetails(userRewardToken);
    description = `🤑 Reward: ${
      userRewardAmount / 10 ** rewardDetails.decimals
    } $${rewardDetails.symbol}`;
  } else {
    description = blink.description;
  }

  const label =
    EventType.SWAP === eventType
      ? "SWAP TOKENS"
      : EventType.NFT_COLLECTION_TRADE === eventType
      ? "TRADE NFT"
      : EventType.CLICK === eventType
      ? "CLICK"
      : EventType.MEMO === eventType
      ? "SUBMIT"
      : blink.label;

  if (EventType.NFT_BUY_BID === eventType && blink.links?.actions.length) {
    blink.links.actions = [blink.links.actions[0]];
  }

  return {
    title: `${title} 🔧 ${
      eventType !== EventType.REALMS_VOTE
        ? currentConversions
          ? `\n${currentConversions} offers accepted`
          : remainingConversions
          ? `\n${remainingConversions} offers remaining`
          : ""
        : ""
    }`,
    icon: blink.icon
      ? blink.icon
      : "https://torque-assets.s3.amazonaws.com/logo.png",
    description: description,
    label: label,
    links: blink.links?.actions?.length
      ? {
          ...blink.links,
          actions: blink.links?.actions.length
            ? blink.links?.actions.map((action) => {
                const [route, params] = action.href.split("?");
                return {
                  type: eventType === EventType.CLICK && eventConfig.enableBlink ? "external-link" : "transaction",
                  label: action.label,
                  href: `${TORQUE_API_URL}/actions/${publisherHandle}/${offerId}?${params ? params : ''}${index ? `&index=${index}` : ''}`,
                  parameters: action.parameters,
                };
              })
            : [],
        }
      : undefined,
  };
};

export const swapGet = async (
  swapAction: SwapAction,
  offerId: string,
  offerTitle: string,
  publisherHandle: string,
  offerImageUrl?: string,
  remainingConversions?: number,
  userRewardType?: string,
  userRewardToken?: string,
  userRewardAmount?: number,
  raffleRewardType?: string,
  raffleRewardToken?: string,
  raffleRewardAmount?: number,
  holdForSeconds?: number,
  currentConversions?: number
) => {
  console.log({ swapAction });
  let label = `Swap`;
  let description: string =
    "Swap your tokens through Torque for extra rewards!";
  const blink = {
    title: `🔧 ${offerTitle} ... ${
      currentConversions
        ? `\n${currentConversions} offers accepted`
        : remainingConversions
        ? `\n${remainingConversions} offers remaining`
        : ""
    }`,
    icon: offerImageUrl
      ? offerImageUrl
      : "https://torque-assets.s3.us-east-1.amazonaws.com/clicky.png",
    description: description,
    label: "Swap",
    links: {
      actions: [
        {
          label: label, // button text
          href: `${TORQUE_API_URL}/actions/${publisherHandle}/${offerId}`,
        },
      ],
    },
  } as ActionGetResponse;

  return convertBlinkToTorqueBlink(
    blink,
    EventType.SWAP,
    swapAction,
    offerId,
    publisherHandle,
    remainingConversions,
    userRewardType,
    userRewardToken,
    userRewardAmount,
    raffleRewardType,
    raffleRewardToken,
    raffleRewardAmount,
    holdForSeconds,
    currentConversions
  );
};

export const nftCollectionTradeGet = async (
  tensorFloorBuyAction: NftCollectionTradeAction,
  offerId: string,
  publisherHandle: string,
  remainingConversions?: number,
  userRewardType?: string,
  userRewardToken?: string,
  userRewardAmount?: number,
  raffleRewardType?: string,
  raffleRewardToken?: string,
  raffleRewardAmount?: number
): Promise<ActionGetResponse> => {
  const { collectionAddress } = tensorFloorBuyAction;
  console.log(collectionAddress);
  const collectionSlug = await getTensorSlugFromCollectionAddress(
    collectionAddress
  );
  console.log(collectionSlug);
  const response = await fetch(
    `https://tensor.dial.to/buy-floor/${collectionSlug}`
  );
  let details: ActionGetResponse = await response.json();
  if (!details.links?.actions?.length) {
    details.links = {
      actions: [
        {
          type: 'transaction',
          label: details.label,
          href: `${TORQUE_API_URL}/actions/${publisherHandle}/${offerId}`,
        },
      ],
    };
  }
  return convertBlinkToTorqueBlink(
    details,
    EventType.NFT_COLLECTION_TRADE,
    tensorFloorBuyAction,
    offerId,
    publisherHandle,
    remainingConversions,
    userRewardType,
    userRewardToken,
    userRewardAmount,
    raffleRewardType,
    raffleRewardToken,
    raffleRewardAmount
  );
};

export const nftBidBuyGet = async (
  nftBidBuy: NftBidBuy,
  offerId: string,
  publisherHandle: string,
  remainingConversions?: number,
  userRewardType?: string,
  userRewardToken?: string,
  userRewardAmount?: number,
  raffleRewardType?: string,
  raffleRewardToken?: string,
  raffleRewardAmount?: number
): Promise<ActionGetResponse> => {
  const { mint } = nftBidBuy;
  const response = await fetch(`https://tensor.dial.to/bid/${mint}`);
  const details: ActionGetResponse = await response.json();
  return convertBlinkToTorqueBlink(
    details,
    EventType.NFT_BUY_BID,
    nftBidBuy,
    offerId,
    publisherHandle,
    remainingConversions,
    userRewardType,
    userRewardToken,
    userRewardAmount,
    raffleRewardType,
    raffleRewardToken,
    raffleRewardAmount
  );
};

export const memoGet = async (
  memoData: MemoAction,
  offerId: string,
  title: string,
  publisherHandle: string,
  remainingConversions?: number,
  imageUrl?: string,
  description?: string,
  userRewardType?: string,
  userRewardToken?: string,
  userRewardAmount?: number,
  raffleRewardType?: string,
  raffleRewardToken?: string,
  raffleRewardAmount?: number
) => {
  const hrefParams = memoData.fields
    .map((field) => {
      return `${field.name}={${field.name}}`;
    })
    .join("&");

  const blink = {
    title,
    icon: imageUrl
      ? imageUrl
      : "https://torque-assets.s3.us-east-1.amazonaws.com/clicky.png",
    description: description,
    label: "Complete the Form",
    links: {
      actions: [
        {
          label: "Complete the Form",
          href: `${TORQUE_API_URL}/actions/${publisherHandle}/${offerId}?campaignId=${offerId}&${hrefParams}`,
          parameters: memoData.fields.map((field) => {
            const type =
              field.type === "boolean"
                ? "checkbox"
                : field.type === "number"
                ? "number"
                : "text";

            const min =
              field.type === "number" ? field.validation?.min : undefined;

            const max =
              field.type === "number" ? field.validation?.max : undefined;

            return {
              type,
              name: field.name,
              label: field.label ?? field.name,
              required: false, // Will be validated on the server
              ...(min ? { min } : {}), // only add if min is defined
              ...(max ? { max } : {}), // only add if max is defined
            };
          }),
        },
      ],
    },
  } as ActionGetResponse;

  return convertBlinkToTorqueBlink(
    blink,
    EventType.MEMO,
    memoData,
    offerId,
    publisherHandle,
    remainingConversions,
    userRewardType,
    userRewardToken,
    userRewardAmount,
    raffleRewardType,
    raffleRewardToken,
    raffleRewardAmount
  );
};

export const clickGet = async (
  clickData: ClickAction,
  offerId: string,
  title: string,
  publisherHandle: string,
  remainingConversions?: number,
  imageUrl?: string,
  description?: string,
  userRewardType?: string,
  userRewardToken?: string,
  userRewardAmount?: number,
  raffleRewardType?: string,
  raffleRewardToken?: string,
  raffleRewardAmount?: number
) => {
  const blink = {
    title,
    icon: imageUrl
      ? imageUrl
      : "https://torque-assets.s3.us-east-1.amazonaws.com/clicky.png",
    description: description,
    label: "Sign Up",
    links: {
      actions: [
        {
          type: clickData.enableBlink ? 'transaction' : 'external-link',
          label: "CLICK HERE", // button text
          href: `${TORQUE_API_URL}/actions/${publisherHandle}/${offerId}?campaignId=${offerId}`,
        },
      ],
    },
  } as ActionGetResponse;

  return convertBlinkToTorqueBlink(
    blink,
    EventType.CLICK,
    clickData,
    offerId,
    publisherHandle,
    remainingConversions,
    userRewardType,
    userRewardToken,
    userRewardAmount,
    raffleRewardType,
    raffleRewardToken,
    raffleRewardAmount
  );
};

export const realmsVoteGet = async (
  realmsVoteAction: RealmsVoteAction,
  offerId: string,
  publisherHandle: string,
  remainingConversions?: number,
  userRewardType?: string,
  userRewardToken?: string,
  userRewardAmount?: number,
  raffleRewardType?: string,
  raffleRewardToken?: string,
  raffleRewardAmount?: number
) => {
  const { daoPubKey, proposalPubKey } = realmsVoteAction;
  const response = await fetch(
    `https://realms.dial.to/vote/dao/${daoPubKey}/proposal/${proposalPubKey}`
  );
  const details: ActionGetResponse = await response.json();
  return convertBlinkToTorqueBlink(
    details,
    EventType.REALMS_VOTE,
    realmsVoteAction,
    offerId,
    publisherHandle,
    remainingConversions,
    userRewardType,
    userRewardToken,
    userRewardAmount,
    raffleRewardType,
    raffleRewardToken,
    raffleRewardAmount
  );
};
