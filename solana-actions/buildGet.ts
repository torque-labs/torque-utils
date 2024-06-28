import { ActionGetResponse } from "@solana/actions";
import { getSplDetails } from "../tokens";
import { HedgehogBetAction, RealmsVoteAction, SniperRaffleAction, SwapAction } from "./types";


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
                    "href": `http://localhost:3001/actions/${publisherHandle}/${offerId}`,
                }
            ]
        }
    } as ActionGetResponse;
}

export const realmsVoteGet = async (
    realmsVoteAction: RealmsVoteAction,
    offerId: string,
    publisherHandle: string,
) => {
    const { proposalId, choice, daoName } = realmsVoteAction;
    const response = await fetch(`https://actions.dialect.to/api/realms/vote/dao/${daoName}/proposal/${proposalId}/`);
    const voteDetails = await response.json();
    return convertBlinkToTorqueBlink(
        voteDetails,
        offerId,
        publisherHandle
    );
}

export const sniperRaffleGet = async (
    sniperRaffleAction: SniperRaffleAction,
    offerId: string,
    publisherHandle: string,
) => {
    const { raffleKey } = sniperRaffleAction;
    const response = await fetch(`https://www.sniper.xyz/api/actions/${raffleKey}`);
    const raffleData = await response.json();
    return convertBlinkToTorqueBlink(
        raffleData,
        offerId,
        publisherHandle
    );
}

export const hedgehogBetGet = async (
    sniperRaffleAction: HedgehogBetAction,
    offerId: string,
    publisherHandle: string,
) => {
    const { marketKey } = sniperRaffleAction;
    const response = await fetch(`https://hedgehog.markets/api/v1/classic/buy/??market=${marketKey}`);
    const betData = await response.json();
    return convertBlinkToTorqueBlink(
        betData,
        offerId,
        publisherHandle
    );
}