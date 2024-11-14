export const client_id = process.env.QB_CLIENT_ID!;
export const client_secret = process.env.QB_CLIENT_SECRET!;

export const auth_code_base_url = process.env.QB_AUTH_CODE_BASE_URL!;
export const access_token_base_url = process.env.QB_ACCESS_TOKEN_URL!;

export const redirect_uri = process.env.QB_REDIRECT_URI!;
export const state = process.env.QB_STATE!;
export const scope = process.env.QB_SCOPE!;

export const accessTokenRequest = {
  baseUrl: access_token_base_url,
  payload: {
    redirect_uri,
    client_id,
    client_secret
  }
};
