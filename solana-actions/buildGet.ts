import { ActionGetResponse } from "@solana/actions";
import { getTokenDetails } from "../tokens.js";
import {
  SwapAction,
  NftCollectionTradeAction,
  HedgehogPlaceBetAction,
} from "../types.js";
import { getTensorSlugFromCollectionAddress, TORQUE_API_URL } from "./util.js";

const convertBlinkToTorqueBlink = (
  blink: ActionGetResponse,
  offerId: string,
  publisherHandle: string
): ActionGetResponse => {
  return {
    title: blink.title,
    icon: blink.icon
      ? blink.icon
      : "https://torque-assets.s3.us-east-1.amazonaws.com/clicky.png",
    description:
      blink.description + "\n" + "Blink with Torque for extra rewards!",
    label: blink.label,
    links: {
      ...blink.links,
      actions: blink.links?.actions.length
        ? blink.links?.actions.map((action: any) => {
            const [route, params] = action.href.split("?");
            return {
              label: action.label,
              href: `${TORQUE_API_URL}/share/${publisherHandle}/${offerId}?${params}`,
            };
          })
        : [],
    },
  };
};

export const swapGet = async (
  swapAction: SwapAction,
  offerId: string,
  offerTitle: string,
  publisherHandle: string,
  offerImageUrl?: string
) => {
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
  return {
    title: offerTitle,
    icon: offerImageUrl
      ? offerImageUrl
      : "https://torque-assets.s3.us-east-1.amazonaws.com/clicky.png",
    description: "Swap your tokens through Torque for extra rewards!",
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
  publisherHandle: string
) => {
  const { collectionAddress } = tensorFloorBuyAction;
  const collectionSlug = await getTensorSlugFromCollectionAddress(
    collectionAddress
  );
  const response = await fetch(
    `https://www.tensor.trade/trade/${collectionSlug}`
  );
  const details = await response.json();
  return convertBlinkToTorqueBlink(details, offerId, publisherHandle);
};

export const hedgehogBetGet = async (
  betAction: HedgehogPlaceBetAction,
  offerId: string,
  publisherHandle: string
) => {
  const { market, usdcAmount } = betAction;
  const response = await fetch(`https://hedgehog.markets/markets/${market}`);
  const betData = await response.json();
  const hrefPath = "/api/v1/classic/buy/?";
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
  return convertBlinkToTorqueBlink(betData, offerId, publisherHandle);
};
