import { fetchSingleCollectionDetails } from "../lib/tensor-api.js";
import {
  SwapAction,
  NftCollectionTradeAction,
  HedgehogPlaceBetAction,
  SignUpAction,
  SolanaActionParam,
  ClickAction,
  RealmsVoteAction,
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

const validateMemoInputs = (query: { [key: string]: string }) => {
  const keys = Object.keys(query).map((x) => x.toLowerCase());
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === "email") {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(query[keys[i]]);
      if (!isValidEmail) {
        throw new Error("Invalid email address.");
      }
    }
  }
};
export const memoPost = async (
  signUpAction: SignUpAction,
  query: { [key: string]: string }
): Promise<string> => {
  validateMemoInputs(query);
  const { inputFields } = signUpAction;
  let url = `${TORQUE_API_URL}/actions/memo?campaignId=${query.campaignId}&`;
  inputFields.forEach((field: SolanaActionParam) => {
    if (query[field.paramName]) {
      url += `${field.paramName}=${query[field.paramName]}&`;
    }
  });
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

export const realmsVotePost = (realmsVoteAction: RealmsVoteAction): string => {
  const { daoPubKey, proposalPubKey } = realmsVoteAction;
  return `https://realms.dial.to/vote/dao/${daoPubKey}/proposal/${proposalPubKey}`;
};
