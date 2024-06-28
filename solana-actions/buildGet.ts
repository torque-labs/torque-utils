import { ActionGetResponse } from "@solana/actions";
import { getSplDetails } from "../tokens";
import { SwapAction } from "./types";

export const swapGet = async (
    swapAction: SwapAction,
    offerId: string,
    offerTitle: string,
    publisherHandle: string,
    offerImageUrl?: string,
) => {
    const { outToken, outAmount } = swapAction;
    const tokenDetails = await getSplDetails(outToken);
    return {
        "title": offerTitle,
        "icon": offerImageUrl
            ? offerImageUrl
            : "https://torque-assets.s3.us-east-1.amazonaws.com/clicky.png",
        "description": "Swap your tokens through Torque for extra rewards!",
        "label": "Swap",
        "links": {
            "actions": [
                {
                    "label": `Swap for ${outAmount} ${tokenDetails.symbol}`, // button text
                    "href": `https://api.torque.so/actions/${publisherHandle}/${offerId}`,
                }
            ]
        }
    } as ActionGetResponse;
}