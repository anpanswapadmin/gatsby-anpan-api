import { NowRequest, NowResponse } from "@vercel/node";
import { getTotalSupply } from "../utils/supply";

export default async (req: NowRequest, res: NowResponse): Promise<void> => {
  let totalSupply = await getTotalSupply();
  totalSupply = totalSupply.div(1e18);

  res.json({
    totalSupply.toNumber(),
});
};
