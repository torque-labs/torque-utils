export const TORQUE_API_URL: string =
  process.env.TORQUE_API_URL ?? "https://api.torque.so";

const tensorGraphqlCollectionQuery = `query CollectionStats($slug: String!) {
  instrumentTV2(slug: $slug) {
    id # Used to find corresponding whitelist PDA (\`uuid\`) if using SDK
    slug # internal ID for collection (UUID or human-readable)
    slugMe # MagicEden's symbol
    slugDisplay # What's displayed in the URL on tensor.trade
    firstListDate
    name
  }
}`;

export const getTensorSlugFromCollectionAddress = async (
  collectionAddress: string,
  tensorApiKey?: string
): Promise<string> => {
  const response = await fetch("https://api.tensor.so/graphql", {
    method: "POST",
    headers: {
      "X-TENSOR-API-KEY":
        tensorApiKey ?? (process.env.TENSOR_API_KEY as string),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: tensorGraphqlCollectionQuery,
      variables: {
        slug: collectionAddress,
      },
    }),
    redirect: "follow",
  });
  const { data } = await response.json();
  return data.instrumentTV2.slugDisplay;
};

export const getTensorNameFromCollectionAddress = async (
  collectionAddress: string,
  tensorApiKey?: string
): Promise<string> => {
  const response = await fetch("https://api.tensor.so/graphql", {
    method: "POST",
    headers: {
      "X-TENSOR-API-KEY":
        tensorApiKey ?? (process.env.TENSOR_API_KEY as string),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: tensorGraphqlCollectionQuery,
      variables: {
        slug: collectionAddress,
      },
    }),
    redirect: "follow",
  });
  const { data } = await response.json();
  return data.instrumentTV2.name;
};
