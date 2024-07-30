export type Token = {
  name: string;
  logo: string;
  decimals: number;
  symbol: string;
  usdcValuePerToken: number;
  tokenStandard?: string;
  isCompressed?: boolean;
};
