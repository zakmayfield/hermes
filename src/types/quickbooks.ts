export type AccessTokenResponse = {
  token_type: string;
  expires_in: number;
  access_token: string;
  x_refresh_token_expires_in: number;
  refresh_token: string;
};
