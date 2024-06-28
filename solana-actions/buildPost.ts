import { HedgehogBetAction, RealmsVoteAction, SniperRaffleAction, SwapAction } from "./types";
import { getSplDetails } from "../tokens";

export const swapPost = async (swapAction: SwapAction): Promise<string> => {
    const { inToken, outToken, inAmount, outAmount, usdcValue } = swapAction;
    if (inToken === "SOL" && outToken === "SOL") {
        throw new Error("Cannot swap SOL to SOL");
    }
    if (!outAmount && !usdcValue) {
        throw new Error("Must provide either outAmount or usdcValue");
    }
    const tokenDetails = await getSplDetails(outToken);
    const swapAmount = usdcValue
        ? usdcValue
        : tokenDetails.usdcValuePerToken * Number(outAmount) * 1.01; // * 1.01 for amount buffer 
    return `https://actions.dialect.to/api/jupiter/swap/${inToken}-${outToken}/${swapAmount}`;
}

export const realmsVotePost = async (realmsVoteAction: RealmsVoteAction): Promise<string> => {
    const { proposalId, choice, daoName } = realmsVoteAction;
    return `https://actions.dialect.to/api/realms/vote/dao/${daoName}/proposal/${proposalId}/vote?choice=${choice}`;
}

export const sniperRafflePost = async (
    sniperRaffleAction: SniperRaffleAction,
    amount: number,
): Promise<string> => {
    const { raffleKey } = sniperRaffleAction;
    return `https://www.sniper.xyz/api/raffle?collection=${raffleKey}&amount=${amount}`;
}

export const hedgehogBetPost = async (
    hedgehogBetAction: HedgehogBetAction,
    amount: number,
    bet: 'yes' | 'no',
): Promise<string> => {
    const { marketKey } = hedgehogBetAction;
    return `https://hedgehog.markets/api/v1/classic/buy/?market=${marketKey}&${bet}Amount=${amount}`;
}