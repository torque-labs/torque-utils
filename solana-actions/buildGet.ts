import { ActionGetResponse } from "@solana/actions";
import { getSplDetails } from "../tokens";
import { SwapAction, NftCollectionTradeAction } from "./types";
import { getTensorSlugFromCollectionAddress } from "./util";

const torqueActionUrl = "http://localhost:3001/actions";
const convertBlinkToTorqueBlink = (
    blink: ActionGetResponse,
    offerId: string,
    publisherHandle: string,
): ActionGetResponse => {
    return {
        "title": blink.title,
        "icon": blink.icon
            ? blink.icon
            : "https://torque-assets.s3.us-east-1.amazonaws.com/clicky.png",
        "description": blink.description + '\n' + "Blink with Torque for extra rewards!",
        "label": blink.label,
        "links": {
            ...blink.links,
            "actions": blink.links?.actions.length
                ? blink.links?.actions.map((action: any) => {
                    const [route, params] = action.href.split("?");
                    return {
                        "label": action.label,
                        "href": `${torqueActionUrl}/${publisherHandle}/${offerId}?${params}`,
                    }
                })
                : []
        }
    }
}

export const swapGet = async (
    swapAction: SwapAction,
    offerId: string,
    offerTitle: string,
    publisherHandle: string,
    offerImageUrl?: string,
) => {
    let inDetails: any, outDetails: any, swapAmount: number, urlInToken: string, urlOutToken: string, tokenDetails: any;
    let label: string;
    switch (true) {
        case 'inToken' in swapAction && 'inAmount' in swapAction && 'outToken' in swapAction:
            inDetails = await getSplDetails(swapAction.inToken);
            outDetails = await getSplDetails(swapAction.outToken);
            label = `Swap ${swapAction.inAmount} ${inDetails.symbol} for ${outDetails.symbol}`;
            break;
        case 'inToken' in swapAction && 'outAmount' in swapAction && 'outToken' in swapAction:
            inDetails = await getSplDetails(swapAction.inToken);
            outDetails = await getSplDetails(swapAction.outToken);
            label = `Swap ${inDetails.symbol} for ${swapAction.outAmount} ${outDetails.symbol}`;
            break;
        case 'inToken' in swapAction && 'inAmount' in swapAction:
            inDetails = await getSplDetails(swapAction.inToken);
            label = `Swap for ${inDetails.inAmount} ${outDetails.symbol}`;
            break;
        case 'outToken' in swapAction && 'outAmount' in swapAction:
            inDetails = await getSplDetails(swapAction.outToken);
            label = `Swap for ${inDetails.outAmount} ${outDetails.symbol}`;
            break;
        default:
            throw new Error("Invalid swap action schema");
    }
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
                    "label": label, // button text
                    "href": `http://localhost:3001/actions/${publisherHandle}/${offerId}`,
                }
            ]
        }
    } as ActionGetResponse;
}

export const tensorFloorBuyGet = async (
    tensorFloorBuyAction: NftCollectionTradeAction,
    offerId: string,
    publisherHandle: string,
) => {
    const { collectionAddress } = tensorFloorBuyAction;
    const collectionSlug = await getTensorSlugFromCollectionAddress(collectionAddress);
    const response = await fetch(`https://www.tensor.trade/trade/${collectionSlug}`);
    const details = await response.json();
    return convertBlinkToTorqueBlink(
        details,
        offerId,
        publisherHandle
    );
}

// export const realmsVoteGet = async (
//     realmsVoteAction: RealmsVoteAction,
//     offerId: string,
//     publisherHandle: string,
// ) => {
//     const { proposalId, choice, daoName } = realmsVoteAction;
//     const response = await fetch(`https://actions.dialect.to/api/realms/vote/dao/${daoName}/proposal/${proposalId}/`);
//     const voteDetails = await response.json();
//     return convertBlinkToTorqueBlink(
//         voteDetails,
//         offerId,
//         publisherHandle
//     );
// }

// export const sniperRaffleGet = async (
//     sniperRaffleAction: SniperRaffleAction,
//     offerId: string,
//     publisherHandle: string,
// ) => {
//     const { raffleKey } = sniperRaffleAction;
//     const response = await fetch(`https://www.sniper.xyz/api/actions/${raffleKey}`);
//     const raffleData = await response.json();
//     return convertBlinkToTorqueBlink(
//         raffleData,
//         offerId,
//         publisherHandle
//     );
// }

// export const hedgehogBetGet = async (
//     sniperRaffleAction: HedgehogBetAction,
//     offerId: string,
//     publisherHandle: string,
// ) => {
//     const { marketKey } = sniperRaffleAction;
//     const response = await fetch(`https://hedgehog.markets/api/v1/classic/buy/??market=${marketKey}`);
//     const betData = await response.json();
//     return convertBlinkToTorqueBlink(
//         betData,
//         offerId,
//         publisherHandle
//     );
// }