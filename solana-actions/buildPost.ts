import {
  SwapAction,
  NftCollectionTradeAction,
  HedgehogPlaceBetAction,
} from "../types.js";
import { getTokenDetails } from "../tokens.js";
import { getTensorSlugFromCollectionAddress } from "./util.js";

export const swapPost = async (swapAction: SwapAction): Promise<string> => {
  let swapAmount: number,
    urlInToken: string,
    urlOutToken: string,
    tokenDetails: any;
  if (swapAction.inToken && swapAction.inAmount && swapAction.outToken) {
    tokenDetails = await getTokenDetails(swapAction.inToken);
    swapAmount = tokenDetails.usdcValuePerToken * swapAction.inAmount;
    urlInToken = swapAction.inToken;
    urlOutToken = swapAction.outToken;
  } else if (
    swapAction.inToken &&
    swapAction.outAmount &&
    swapAction.outToken
  ) {
    tokenDetails = await getTokenDetails(swapAction.outToken);
    swapAmount = tokenDetails.usdcValuePerToken * swapAction.outAmount;
    urlInToken = swapAction.inToken;
    urlOutToken = swapAction.outToken;
  } else if (swapAction.inToken && swapAction.inAmount) {
    tokenDetails = await getTokenDetails(swapAction.inToken);
    swapAmount = tokenDetails.usdcValuePerToken * swapAction.inAmount;
    urlInToken = swapAction.inToken;
    urlOutToken = "SOL";
  } else if (swapAction.outToken && swapAction.outAmount) {
    tokenDetails = await getTokenDetails(swapAction.outToken);
    swapAmount = tokenDetails.usdcValuePerToken * swapAction.outAmount;
    urlInToken = "SOL";
    urlOutToken = swapAction.outToken;
  } else {
    throw new Error("Invalid swap action schema");
  }
  return `https://actions.dialect.to/api/jupiter/swap/${urlInToken}-${urlOutToken}/${
    swapAmount * 1.05
  }`; // add 5% buffer to ensure conversion
};

export const nftCollectionBuyPost = async (
  tensorFloorBuyAction: NftCollectionTradeAction
): Promise<string> => {
  const { collectionAddress } = tensorFloorBuyAction;
  const collectionSlug = await getTensorSlugFromCollectionAddress(
    collectionAddress
  );
  return `https://tensor.dial.to/buy-floor/${collectionSlug}`;
};

export const hedgehogBetPost = async (
  hedgehogBetAction: HedgehogPlaceBetAction,
  amount: number = 0,
  bet: "yes" | "no" = "yes"
): Promise<string> => {
  const { market, usdcAmount } = hedgehogBetAction;
  if (amount < usdcAmount) {
    throw new Error("Amount is less than the minimum amount");
  }
  return `https://hedgehog.markets/api/v1/classic/buy/?market=${market}&${bet}Amount=${amount}`;
};

// export const realmsVotePost = async (realmsVoteAction: RealmsVoteAction): Promise<string> => {
//     const { proposalId, choice, daoName } = realmsVoteAction;
//     return `https://actions.dialect.to/api/realms/vote/dao/${daoName}/proposal/${proposalId}/vote?choice=${choice}`;
// }

// export const sniperRafflePost = async (
//     sniperRaffleAction: SniperRaffleAction,
//     amount: number,
// ): Promise<string> => {
//     const { raffleKey } = sniperRaffleAction;
//     return `https://www.sniper.xyz/api/raffle?collection=${raffleKey}&amount=${amount}`;
// }
