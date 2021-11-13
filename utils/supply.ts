import BigNumber from "bignumber.js";
import { getContract } from "./web3";
import { ANPAN, DEAD } from "./constants";
import bep20 from "./abis/bep20.json";

const contract = getContract(bep20, ANPAN);

export const getTotalSupply = async (): Promise<BigNumber> => {
  const supply = await contract.methods.totalSupply().call();

  return new BigNumber(supply);
};

export const getBurnedSupply = async (): Promise<BigNumber> => {
  const balance = await contract.methods.balanceOf(DEAD).call();

  return new BigNumber(balance);
};
