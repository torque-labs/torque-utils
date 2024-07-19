import { ActionGetResponse } from "@solana/actions";
import { getTokenDetails } from "../tokens.js";
import {
  SwapAction,
  NftCollectionTradeAction,
  HedgehogPlaceBetAction,
  SignUpAction,
} from "../types.js";
import { getTensorSlugFromCollectionAddress, TORQUE_API_URL } from "./util.js";

export const convertBlinkToTorqueBlink = async (
  blink: ActionGetResponse,
  offerId: string,
  publisherHandle: string,
  remainingConversions?: number,
  userRewardType?: string,
  userRewardToken?: string,
  userRewardAmount?: number
): Promise<ActionGetResponse> => {
  let description = blink.description;
  if (userRewardType === "TOKENS" && userRewardToken && userRewardAmount) {
    const tokenDetails = await getTokenDetails(userRewardToken);
    const amount =
      Number(userRewardAmount) / Math.pow(10, tokenDetails.decimals);
    description = `Earn ${amount} $${tokenDetails.symbol} by Blinking with Torque!`;
  }

  return {
    title: `🔧 ${blink.title} ⚡👀 ${
      remainingConversions
        ? `| ${remainingConversions} conversions remaining`
        : ""
    }`,
    icon: blink.icon
      ? blink.icon
      : "https://torque-assets.s3.us-east-1.amazonaws.com/clicky.png",
    description: description,
    label: blink.label,
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
  userRewardAmount?: number
) => {
  console.log({ swapAction });
  let label: string;
  if (swapAction.inToken && swapAction.inAmount && swapAction.outToken) {
    const inDetails = await getTokenDetails(swapAction.inToken);
    const outDetails = await getTokenDetails(swapAction.outToken);
    label = `Swap ${swapAction.inAmount} $${inDetails.symbol} for $${outDetails.symbol}`;
  } else if (
    swapAction.inToken &&
    swapAction.outAmount &&
    swapAction.outToken
  ) {
    const inDetails = await getTokenDetails(swapAction.inToken);
    const outDetails = await getTokenDetails(swapAction.outToken);
    label = `Swap $${inDetails.symbol} for ${swapAction.outAmount} $${outDetails.symbol}`;
  } else if (swapAction.inToken && swapAction.inAmount) {
    const inDetails = await getTokenDetails(swapAction.inToken);
    label = `Sell ${swapAction.inAmount} $${inDetails.symbol}`;
  } else if (swapAction.outToken && swapAction.outAmount) {
    const outDetails = await getTokenDetails(swapAction.outToken);
    label = `Buy ${swapAction.outAmount} $${outDetails.symbol}`;
  } else {
    throw new Error("Invalid swap action schema");
  }
  let description: string =
    "Swap your tokens through Torque for extra rewards!";
  if (userRewardType === "TOKENS" && userRewardToken && userRewardAmount) {
    const tokenDetails = await getTokenDetails(userRewardToken);
    const amount =
      Number(userRewardAmount) / Math.pow(10, tokenDetails.decimals);
    description = `Earn ${amount} $${tokenDetails.symbol} by swapping through Torque!`;
  }
  return {
    title: `🔧 ${offerTitle} ⚡👀 ... ${
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
};

export const nftCollectionTradeGet = async (
  tensorFloorBuyAction: NftCollectionTradeAction,
  offerId: string,
  publisherHandle: string,
  remainingConversions?: number,
  userRewardType?: string,
  userRewardToken?: string,
  userRewardAmount?: number
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
    offerId,
    publisherHandle,
    remainingConversions,
    userRewardType,
    userRewardToken,
    userRewardAmount
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
  description?: string
) => {
  return {
    title: `🔧 ${title} ⚡👀 ... ${
      remainingConversions ? `\n${remainingConversions} offers remaining` : ""
    }`,
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
};
