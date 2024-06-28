import { SwapAction } from "./types";
import { getSplDetails } from "../tokens";

export const swap = async (swapAction: SwapAction): Promise<string> => {
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