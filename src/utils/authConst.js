export const IDENTITY_CONFIG = {
  authority: "https://oauth.vc-19.ai", //(string): The URL of the OIDC provider.
  client_id: "Uinfe43qITbnZkr2ymhYfT3hV6okIYFYauOhIZUA", //(string): Your client application's identifier as registered with the OIDC provider.
  redirect_uri: "http://localhost:8000/", //The URI of your client application to receive a response from the OIDC provider.
  login: "https://oauth.vc-19.ai",
  automaticSilentRenew: false, //(boolean, default: false): Flag to indicate if there should be an automatic attempt to renew the access token prior to its expiration.
  loadUserInfo: false, //(boolean, default: true): Flag to control if additional identity data is loaded from the user info endpoint in order to populate the user's profile.
  //   silent_redirect_uri: process.env.REACT_APP_SILENT_REDIRECT_URL, //(string): The URL for the page containing the code handling the silent renew.
  post_logout_redirect_uri: "http://localhost:8000/", // (string): The OIDC post-logout redirect URI.
  audience: "http://localhost:8000/", //is there a way to specific the audience when making the jwt
  responseType: "id_token token", //(string, default: 'id_token'): The type of response desired from the OIDC provider.
  grantType: "password",
  scope: "openid profile email", //(string, default: 'openid'): The scope being requested from the OIDC provider.
  webAuthResponseType: "id_token token",
};

export const METADATA_OIDC = {
  issuer: "https://oauth.vc-19.ai/application/o/apcer-qa/",
  jwks_uri: "https://oauth.vc-19.ai/application/o/apcer-qa/jwks/",
  authorization_endpoint: "https://oauth.vc-19.ai/application/o/authorize/",
  token_endpoint: "https://oauth.vc-19.ai/application/o/token/",
  userinfo_endpoint: "https://oauth.vc-19.ai/application/o/userinfo/",
  end_session_endpoint:
    "https://oauth.vc-19.ai/application/o/apcer-qa/end-session/",
};
