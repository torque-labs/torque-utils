import { SwapAction, NftCollectionTradeAction } from "./types";
import { getSplDetails } from "../tokens";
import { getTensorSlugFromCollectionAddress } from "./util";

export const swapPost = async (swapAction: SwapAction): Promise<string> => {
    let swapAmount: number, urlInToken: string, urlOutToken: string, tokenDetails: any;
    switch (true) {
        case 'inToken' in swapAction && 'inAmount' in swapAction && 'outToken' in swapAction:
            tokenDetails = await getSplDetails(swapAction.inToken);
            swapAmount = tokenDetails.usdcValuePerToken * swapAction.inAmount;
            urlInToken = swapAction.inToken;
            urlOutToken = swapAction.outToken;
            break;
        case 'inToken' in swapAction && 'outAmount' in swapAction && 'outToken' in swapAction:
            tokenDetails = await getSplDetails(swapAction.outToken);
            swapAmount = tokenDetails.usdcValuePerToken * swapAction.outAmount;
            urlInToken = swapAction.inToken;
            urlOutToken = swapAction.outToken;
            break;
        case 'inToken' in swapAction && 'inAmount' in swapAction:
            tokenDetails = await getSplDetails(swapAction.inToken);
            swapAmount = tokenDetails.usdcValuePerToken * swapAction.inAmount;
            urlInToken = swapAction.inToken;
            urlOutToken = "SOL";
            break;
        case 'outToken' in swapAction && 'outAmount' in swapAction:
            tokenDetails = await getSplDetails(swapAction.outToken);
            swapAmount = tokenDetails.usdcValuePerToken * swapAction.outAmount;
            urlInToken = "SOL";
            urlOutToken = swapAction.outToken;
            break;
        default:
            throw new Error("Invalid swap action schema");
    }
    return `https://actions.dialect.to/api/jupiter/swap/${urlInToken}-${urlOutToken}/${swapAmount * 1.05}`; // add 5% buffer to ensure conversion
}

export const nftCollectionBuyPost = async (
    tensorFloorBuyAction: NftCollectionTradeAction,
): Promise<string> => {
    const { collectionAddress } = tensorFloorBuyAction;
    const collectionSlug = await getTensorSlugFromCollectionAddress(collectionAddress);
    return `https://www.tensor.trade/trade/${collectionSlug}`;
}

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

// export const hedgehogBetPost = async (
//     hedgehogBetAction: HedgehogBetAction,
//     amount: number,
//     bet: 'yes' | 'no',
// ): Promise<string> => {
//     const { marketKey } = hedgehogBetAction;
//     return `https://hedgehog.markets/api/v1/classic/buy/?market=${marketKey}&${bet}Amount=${amount}`;
// }