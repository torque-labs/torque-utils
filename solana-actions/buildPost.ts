import {
  SwapAction,
  NftCollectionTradeAction,
  HedgehogPlaceBetAction,
} from "../types.js";
<<<<<<< HEAD
import { getTokenDetails } from "../tokens.js";
=======
import { getSplDetails } from "../tokens.js";
>>>>>>> baa8e80 (Update tensor endpoint for post)
import { getTensorSlugFromCollectionAddress } from "./util.js";

export const swapPost = async (swapAction: SwapAction): Promise<string> => {
  let swapAmount: number,
    urlInToken: string,
    urlOutToken: string,
    tokenDetails: any;
  if (swapAction.inToken && swapAction.inAmount && swapAction.outToken) {
<<<<<<< HEAD
    tokenDetails = await getTokenDetails(swapAction.inToken);
=======
    tokenDetails = await getSplDetails(swapAction.inToken);
>>>>>>> baa8e80 (Update tensor endpoint for post)
    swapAmount = tokenDetails.usdcValuePerToken * swapAction.inAmount;
    urlInToken = swapAction.inToken;
    urlOutToken = swapAction.outToken;
  } else if (
    swapAction.inToken &&
    swapAction.outAmount &&
    swapAction.outToken
  ) {
<<<<<<< HEAD
    tokenDetails = await getTokenDetails(swapAction.outToken);
=======
    tokenDetails = await getSplDetails(swapAction.outToken);
>>>>>>> baa8e80 (Update tensor endpoint for post)
    swapAmount = tokenDetails.usdcValuePerToken * swapAction.outAmount;
    urlInToken = swapAction.inToken;
    urlOutToken = swapAction.outToken;
  } else if (swapAction.inToken && swapAction.inAmount) {
<<<<<<< HEAD
    tokenDetails = await getTokenDetails(swapAction.inToken);
=======
    tokenDetails = await getSplDetails(swapAction.inToken);
>>>>>>> baa8e80 (Update tensor endpoint for post)
    swapAmount = tokenDetails.usdcValuePerToken * swapAction.inAmount;
    urlInToken = swapAction.inToken;
    urlOutToken = "SOL";
  } else if (swapAction.outToken && swapAction.outAmount) {
<<<<<<< HEAD
    tokenDetails = await getTokenDetails(swapAction.outToken);
=======
    tokenDetails = await getSplDetails(swapAction.outToken);
>>>>>>> baa8e80 (Update tensor endpoint for post)
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
<<<<<<< HEAD
  return `https://actions.dialect.to/api/tensor/buy-floor/${collectionSlug}`;
=======
  return `https://tensor.dial.to/buy-floor/${collectionSlug}`;
>>>>>>> baa8e80 (Update tensor endpoint for post)
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
