import { CLICKY_ADDRESS } from "../consants.js";
import { Token } from "../types/index.js";

export async function getTokenDetails(tokenAddress: string): Promise<Token> {
  if (tokenAddress === CLICKY_ADDRESS) {
    return {
      name: "Clicky",
      logo: "https://torque-assets.s3.us-east-1.amazonaws.com/clicky.png",
      decimals: 0,
      symbol: "CLICKY",
      usdcValuePerToken: 0,
    };
  }

  const response = await fetch(process.env.HELIUS_RPC as string, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: "string",
      method: "getAsset",
      params: {
        id: tokenAddress,
      },
    }),
  });

  const { result } = (await response.json()) as unknown as {
    result: {
      content: {
        metadata: {
          name: string;
          symbol: string;
          token_standard?: string;
        };
        links: {
          image: string;
        };
      };
      token_info: {
        decimals: number;
        price_info: {
          currency?: string;
          price_per_token: number;
        };
      };
      compression: {
        compressed: boolean;
      };
    };
  };

  if (result) {
    return {
      name: result.content.metadata.name,
      symbol: result.content.metadata.symbol,
      logo: result.content.links.image,
      decimals: result.token_info?.decimals ?? 0,
      usdcValuePerToken:
        result.token_info?.price_info?.currency === "USDC"
          ? result.token_info.price_info.price_per_token
          : 1,
      tokenStandard: result.content?.metadata?.token_standard,
      isCompressed: result.compression.compressed,
    };
  } else {
    throw new Error("Token not found");
  }
}
