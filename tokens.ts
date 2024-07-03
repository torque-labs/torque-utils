export async function getSplDetails(tokenAddress: string) {
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
    const { result } = await response.json();
    if (result) {
        return {
            name: result.content.metadata.name,
            symbol: result.content.metadata.symbol,
            logo: result.content.links.image,
            decimals: result.token_info.decimals,
            usdcValuePerToken: result.token_info.price_info.currency === 'USDC'
                ? result.token_info.price_info.price_per_token
                : 1,

        };
    } else {
        throw new Error("Token not found");
    }
}