import { eventConfigToValidationSchema } from "../lib/events.js";
import { fetchSingleCollectionDetails } from "../lib/tensor-api.js";
import {
  SwapAction,
  NftCollectionTradeAction,
  ClickAction,
  RealmsVoteAction,
  MemoAction,
} from "../types/index.js";
import { getTensorSlugFromCollectionAddress, TORQUE_API_URL } from "./util.js";

export const swapPost = async (campaignId: string): Promise<string> => {
  return `${TORQUE_API_URL}/actions/swap/${campaignId}`;
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

export const tensorCollectionBuyFloorPost = async (
  tensorCollectoinId: string
): Promise<string> => {
  const { slugdisplay } = await fetchSingleCollectionDetails(
    tensorCollectoinId
  );
  return `https://tensor.dial.to/buy-floor/${slugdisplay}`;
};

export const tensorCollectionBidPost = (tensorCollectoinId: string): string => {
  return `${TORQUE_API_URL}/actions/tensor/collection-bid?collectionId=${tensorCollectoinId}`;
};

export const nftBidBuyPost = (mint: string): string => {
  return `https://tensor.dial.to/bid/${mint}`;
};

export const memoPost = async (
  memoAction: MemoAction,
  query: { [key: string]: string }
): Promise<string> => {
  console.log("memoAction", memoAction);
  console.log("query", query);

  const validationSchema = eventConfigToValidationSchema(memoAction);

  const result = validationSchema.safeParse(query);

  if (!result.success) {
    console.error(result.error);

    throw new Error("Some fields were not valid.");
  }

  const { fields } = memoAction;

  const params = fields
    .filter((field) => !!query[field.name])
    .map((field) => `${field.name}=${query[field.name]}`)
    .join("&");

  const url = `${TORQUE_API_URL}/actions/memo?campaignId=${query.campaignId}&${params}`;

  return url;
};

export const clickPost = async (
  clickData: ClickAction,
  query: { [key: string]: string }
): Promise<string> => {
  if (!clickData.enableBlink) {
    throw new Error("Click action must have enableBlink set to true.");
  }
  return `${TORQUE_API_URL}/actions/memo?campaignId=${query.campaignId}&`;
};

export const realmsVotePost = (
  realmsVoteAction: RealmsVoteAction,
  voteIndex: number
): string => {
  if (voteIndex < 0) {
    throw new Error("Vote index out of bounds.");
  }
  const { daoPubKey, proposalPubKey } = realmsVoteAction;
  return `https://realms.dial.to/vote/dao/${daoPubKey}/proposal/${proposalPubKey}/${voteIndex}`;
};
