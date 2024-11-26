export type QBTokenRequest = {
  grant_type: "authorization_code";
  code: string;
  redirect_uri: string;
  client_id: string;
  client_secret: string;
};

export type QBTokenResponse = {
  expires_in: number;
  token_type: string;
  access_token: string;
  refresh_token: string;
  x_refresh_token_expires_in: number;
};

export type CreateOrUpdateQBToken = {
  user_id: string;
  realm_id: string;
  encrypted_access_token: string;
  encrypted_refresh_token: string;
  access_token_expiration_time: Date;
  refresh_token_expiration_time: Date;
  access_token_iv: string;
  refresh_token_iv: string;
};
