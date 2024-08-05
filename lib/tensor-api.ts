export const TENSOR_API = "https://api.mainnet.tensordev.io/api/v1";
export const fetchUserBids = async (userPubKey: string) => {
  const response = await fetch(
    `${TENSOR_API}/user/coll_bids?owner=${userPubKey}&limit=100`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-tensor-api-key": process.env.TENSOR_API_KEY as string,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return response;
};

export const fetchUserBidActions = async (userPubKey: string) => {
  const response = await fetch(
    `${TENSOR_API}/user/transactions?wallets=${userPubKey}&limit=100&txTypes=SWAP_INIT_POOL&txTypes=SWAP_CLOSE_POOL&txTypes=SWAP_BUY_NFT&txTypes=CANCEL_BID&txTypes=PLACE_BID`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-tensor-api-key": process.env.TENSOR_API_KEY as string,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return response;
};

export const fetchNftDetails = async (mint: string) => {
  return await fetch(`${TENSOR_API}/mint?mint=${mint}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-tensor-api-key": process.env.TENSOR_API_KEY as string,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

function uint8ArrayToUuidString(uint8Array: Uint8Array): string {
  // Convert the Uint8Array to a string of hex characters
  let hexString = "";
  for (let i = 0; i < uint8Array.length; i++) {
    // Convert each byte to a hex string and pad with leading zero if necessary
    hexString += String.fromCharCode(uint8Array[i]);
  }

  // Format the string according to UUID conventions: 8-4-4-4-12
  return `${hexString.substring(0, 8)}-${hexString.substring(
    8,
    12
  )}-${hexString.substring(12, 16)}-${hexString.substring(
    16,
    20
  )}-${hexString.substring(20, 32)}`;
}
export const getCollectionByUUID = async (uuid: string) => {
  const response = await fetch(
    `${TENSOR_API}/collections?sortBy=statsV2.volume1h%3Adesc&limit=1&collIds=${uuid}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-tensor-api-key": process.env.TENSOR_API_KEY as string,
      },
    }
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
export const fetchCollections = async () => {
  const { collections } = await fetch(
    `${TENSOR_API}/collections?sortBy=statsV2.volume7d%3Adesc&limit=100`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-tensor-api-key": process.env.TENSOR_API_KEY as string,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return collections.map(mapCollection);
};
export const fetchSingleCollectionDetails = async (collectionId: string) => {
  const response = await fetch(
    `${TENSOR_API}/collections?sortBy=statsV2.volume7d%3Adesc&collIds=${collectionId}&limit=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-tensor-api-key": process.env.TENSOR_API_KEY as string,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  console.log(response);
  return mapCollection(response.collections[0]);
};
