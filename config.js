  // Don't commit this file to your public repos. This config is for first-run
  //
  exports.creds = {
	redirectUrl: 'http://localhost:3000/auth/openid/return',
	identityMetadata: 'https://login.microsoftonline.com/higashihidekazu.onmicrosoft.com/.well-known/openid-configuration', // For using Microsoft you should never need to change this.
	clientID: '<your app id>',
	clientSecret: '<your secret>', // if you are doing code or id_token code
	skipUserProfile: true, // for AzureAD should be set to true.
	responseType: 'id_token code', // for login only flows use id_token. For accessing resources use `id_token code`
	responseMode: 'form_post', // For login only flows we should have token passed back to us in a POST
	passReqToCallback: false,
	allowHttpForRedirectUrl: true, // HTTPで実行する場合はtrue必須。
	loggingLevel: 'info'
	//scope: ['email', 'profile'] // additional scopes you may wish to pass
};
