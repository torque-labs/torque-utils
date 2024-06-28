export interface SwapAction {
    inToken: string;
    outToken: string;
    inAmount?: number;
    outAmount?: number;
    usdcValue?: number;
}

export interface RealmsVoteAction {
    daoName: string;
    proposalId: string;
    choice: "Yes" | "No" | "Abstain";
}

export interface NftBuyAction {
    collectionAddress: string;
}

export interface SniperRaffleAction {
    raffleKey: string;
}

export interface HedgehogBetAction {
    marketKey: string;
}