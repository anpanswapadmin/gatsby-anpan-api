import { ChainId, Token } from "@anpanswap-libs/sdk";

// BEP-20 addresses.
export const ANPAN = "0x10B0a78520fBDDa95aDc331445d9319B164F85D5";
export const WBNB = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
export const DEAD = "0x000000000000000000000000000000000000dEaD";

// Contract addresses.
export const ANPAN_BNB_FARM = "0x7DEa1496F163f5ab7272ED2Ba67C0AD104462165";
export const MASTERCHEF_CONTRACT = "0xba20f49A294a110A959C931A8aE4e6fD3Cb7014B";
export const LOTTERY_CONTRACT = "0x3C3f2049cc17C136a604bE23cF7E42745edf3b91";
export const MULTICALL_CONTRACT = "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb";

// AnpanSwap SDK Token.
export const ANPAN_TOKEN = new Token(ChainId.MAINNET, ANPAN, 18);
export const WBNB_TOKEN = new Token(ChainId.MAINNET, WBNB, 18);
export const ANPAN_BNB_TOKEN = new Token(ChainId.MAINNET, ANPAN_BNB_FARM, 18);
