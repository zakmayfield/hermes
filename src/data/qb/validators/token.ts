import { z } from "zod";

const accessToken = z.object({
  expires_in: z.number(),
  token_type: z.string(),
  access_token: z.string(),
  refresh_token: z.string(),
  x_refresh_token_expires_in: z.number()
});

export const tokenValidators = { accessToken };
