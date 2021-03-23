import Twitter from 'twitter-lite';

const key = {
  APIKey : "oPRCaB4fqe3NQyH0IokxAn7AQ",
  ConsumerKey : "9n2uc8PvsNjt3PBm0Kye6qqs6ttPYEfeFlVHD6ApyluguVM4ek",
  AccessToken : "1255167361117634560-n7RMYnSyzfvCQW1QOxRhXqPL2iriBe",
  AccessTokenSecret : "zberfuHhxumJsj4DGzTjLU2Cn5fAiarM6GKlXLcuQRTaM"
}

const client = new Twitter({
  subdomain: "api", // "api" is the default (change for other subdomains)
  version: "1.1", // version "1.1" is the default (change for other subdomains)
  consumer_key: key.APIKey, // from Twitter.
  consumer_secret: key.ConsumerKey, // from Twitter.
  access_token_key: key.AccessToken, // from your User (oauth_token)
  access_token_secret: key.AccessTokenSecret // from your User (oauth_token_secret)
});
 
client
  .getAccessToken({
    oauth_verifier: oauthVerifier,
    oauth_token: oauthToken
  })
  .then(res =>
    console.log({
      accTkn: res.oauth_token,
      accTknSecret: res.oauth_token_secret,
      userId: res.user_id,
      screenName: res.screen_name
    })
  )
  .catch(console.error);