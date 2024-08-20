import { ActionGetResponse } from "@solana/actions";
import { getTokenDetails } from "../tokens.js";
import {
  SwapAction,
  NftCollectionTradeAction,
  HedgehogPlaceBetAction,
  SignUpAction,
  ClickAction,
  EventType,
  NftBidBuy,
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
  raffleRewardAmount?: number
): Promise<ActionGetResponse> => {
  const title =
    eventType === EventType.SWAP || eventType === EventType.NFT_COLLECTION_TRADE
      ? await buildTitle(eventType, eventConfig, blink)
      : eventType === EventType.SIGN_UP
      ? "Sign Up"
      : blink.title;

  let description;
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
    description = `🎟️ Raffle Prize: ${
      raffleRewardAmount / 10 ** rewardDetails.decimals
    } ${tokenDesc}`;
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
      : EventType.SIGN_UP === eventType
      ? "SIGN UP"
      : blink.label;

  if (EventType.NFT_BUY_BID === eventType && blink.links?.actions.length) {
    blink.links.actions = [blink.links.actions[0]];
  }
  return {
    title: `${title} 🔧 ${
      remainingConversions
        ? `${remainingConversions} remaining`
        : "Boosted Blink!"
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
            ? blink.links?.actions.map((action: any) => {
                const [route, params] = action.href.split("?");
                return {
                  label: action.label,
                  href: `${TORQUE_API_URL}/actions/${publisherHandle}/${offerId}?${params}`,
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
  raffleRewardAmount?: number
) => {
  console.log({ swapAction });
  let label = `Swap`;
  let description: string =
    "Swap your tokens through Torque for extra rewards!";
  const blink = {
    title: `🔧 ${offerTitle} ... ${
      remainingConversions ? `\n${remainingConversions} offers remaining` : ""
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
    raffleRewardAmount
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
  const details: ActionGetResponse = await response.json();
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

export const hedgehogBetGet = async (
  hedgehogBetAction: HedgehogPlaceBetAction,
  offerId: string,
  publisherHandle: string,
  remainingConversions?: number,
  userRewardType?: string,
  userRewardToken?: string,
  userRewardAmount?: number
): Promise<ActionGetResponse> => {
  const { market, usdcAmount } = hedgehogBetAction;
  const response = await fetch(
    `https://hedgehog.markets/api/v1/classic/buy/?market=${market}`
  );
  const betData = await response.json();
  const hrefPath = "/api/v1/classic/buy/?";
  betData.links.actions = betData.links.actions.filter(
    (x: any) => !x.parameters
  );
  for (let i = 0; i < betData.links.actions.length; i++) {
    if (!betData.links.actions[i].parameters) {
      if (betData.links.actions[i].label.includes("Yes")) {
        betData.links.actions[i].label = `$${usdcAmount} on Yes`;
        betData.links.actions[
          i
        ].href = `${hrefPath}market=${market}&yesAmount=${usdcAmount}`;
      } else if (betData.links.actions[i].label.includes("No")) {
        betData.links.actions[i].label = `$${usdcAmount} on No`;
        betData.links.actions[
          i
        ].href = `${hrefPath}market=${market}&noAmount=${usdcAmount}`;
      }
    }
  }
  return convertBlinkToTorqueBlink(
    betData,
    EventType.HEDGEHOG_PLACE_BET,
    hedgehogBetAction,
    offerId,
    publisherHandle,
    remainingConversions,
    userRewardType,
    userRewardToken,
    userRewardAmount
  );
};

export const memoGet = async (
  signUpData: SignUpAction,
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
      actions: signUpData.inputFields.map((field: any) => {
        return {
          label: field.label,
          href: `${TORQUE_API_URL}/actions/${publisherHandle}/${offerId}?campaignId=${offerId}&${field.paramName}={${field.paramName}}`,
          parameters: [
            {
              name: field.paramName,
              label: field.label,
              required: field.required,
            },
          ],
        };
      }),
    },
  } as ActionGetResponse;
  return convertBlinkToTorqueBlink(
    blink,
    EventType.SIGN_UP,
    signUpData,
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
  if (!clickData.enableBlink) {
    throw new Error("Click action must have enableBlink set to true.");
  }
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
          label: "CLICK", // button text
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
