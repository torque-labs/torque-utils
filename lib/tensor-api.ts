import { fetchWhitelist, Whitelist } from "@tensor-foundation/whitelist";
import { address, createSolanaRpc } from "solana2.0";

export const TENSOR_API = "https://api.mainnet.tensordev.io/api/v1";
const tensorGetOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    "x-tensor-api-key": process.env.TENSOR_API_KEY as string,
  },
};

/**
 * Fetches user's active bids
 */
export const fetchUserBids = async (userPubKey: string) => {
  const response = await fetch(
    `${TENSOR_API}/user/coll_bids?owner=${userPubKey}&limit=100`,
    tensorGetOptions
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return response;
};

/**
 * Fetches user's tensor actions
 */
export const fetchUserBidActions = async (userPubKey: string) => {
  const response = await fetch(
    `${TENSOR_API}/user/transactions?wallets=${userPubKey}&limit=100&txTypes=SWAP_INIT_POOL&txTypes=SWAP_CLOSE_POOL&txTypes=SWAP_BUY_NFT&txTypes=CANCEL_BID&txTypes=PLACE_BID`,
    tensorGetOptions
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return response;
};

/**
 * Fetches a single NFT's details
 */
export const fetchNftDetails = async (mint: string) => {
  const mints = await fetch(
    `${TENSOR_API}/mint?mints=${mint}`,
    tensorGetOptions
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return mints[0];
};

/**
 * Fetches collection details using tensor's UUID
 */
export const getCollectionByUUID = async (uuid: string) => {
  const response = await fetch(
    `${TENSOR_API}/collections?sortBy=statsV2.volume1h%3Adesc&limit=1&collIds=${uuid}`,
    tensorGetOptions
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return response;
};
export const mapCollection = (collection: any) => {
  return {
    name: collection.name,
    collId: collection.collId,
    symbol: collection.symbol,
    slugdisplay: collection.slugDisplay,
    imageUri: collection.imageUri,
    whitelistPda: collection.whitelistPda,
    stats: collection.stats,
    tokenStandard: collection.tokenStandard,
    compressed: collection.compressed,
  };
};

/**
 * Fetches top 100 collection by 7d volume
 */
export const fetchCollections = async (collectionIds?: string[]) => {
  const collectionQuery = collectionIds
    ? `&collIds=${collectionIds.join(",")}`
    : "";

  const { collections } = await fetch(
    `${TENSOR_API}/collections?sortBy=statsV2.volume7d%3Adesc&limit=100${collectionQuery}`,
    tensorGetOptions
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return collections.map(mapCollection);
};

/**
 * Fetches single collection details
 */
export const fetchSingleCollectionDetails = async (collectionId: string) => {
  const [{ collections }, { mints }] = await Promise.all([
    fetch(
      `${TENSOR_API}/collections?sortBy=statsV2.volume7d%3Adesc&collIds=${collectionId}&limit=1`,
      tensorGetOptions
    )
      .then((response) => response.json())
      .catch((err) => console.error(err)),
    fetch(
      "https://api.mainnet.tensordev.io/api/v1/mint/collection?collId=136f3198-c4c1-4ccf-966f-a5431a091581&sortBy=ListingPriceAsc&limit=1",
      tensorGetOptions
    )
      .then((response) => response.json())
      .catch((err) => console.error(err)),
  ]);
  return {
    ...mapCollection(collections[0]),
    metadataProgram: mints[0].metadataProgram,
  };
};

/**
 * Converts whitelist PDA to Tesnor collection UUID
 */
const uuidBytesToUuidString = (uuidBytes: Uint8Array): string => {
  let hexString = "";
  for (let i = 0; i < uuidBytes.length; i++) {
    hexString += String.fromCharCode(uuidBytes[i]);
  }

  return `${hexString.substring(0, 8)}-${hexString.substring(
    8,
    12
  )}-${hexString.substring(12, 16)}-${hexString.substring(
    16,
    20
  )}-${hexString.substring(20, 32)}`;
};
export const whiteListToCollectionId = async (whitelist: string) => {
  const rpc = createSolanaRpc(process.env.RPC as string);
  const whitelistData: Whitelist = await fetchWhitelist(
    rpc,
    address(whitelist)
  ).then((whitelistResponse) => whitelistResponse.data);
  return uuidBytesToUuidString(whitelistData.uuid as Uint8Array);
};
