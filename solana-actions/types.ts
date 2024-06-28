export interface SwapAction {
    inToken: string;
    outToken: string;
    inAmount?: number;
    outAmount?: number;
    usdcValue?: number;
}

export interface NftBuyAction {
    collectionAddress: string;
}