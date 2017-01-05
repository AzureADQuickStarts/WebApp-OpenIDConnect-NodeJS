
exports.creds = {
  // Required
  identityMetadata: 'https://login.microsoftonline.com/d34a1bb7-3481-4d5f-8b94-f3cc27bf8eac/.well-known/openid-configuration', 
  // or equivalently: 'https://login.microsoftonline.com/<tenant_guid>/.well-known/openid-configuration'
  //
  // or you can use the common endpoint
  // 'https://login.microsoftonline.com/common/.well-known/openid-configuration'
  // To use the common endpoint, you have to either set `validateIssuer` to false, or provide the `issuer` value.

  // Required, the client ID of your app in AAD  
  clientID: '53d378fd-9c04-4e99-bb8e-6c9f144fe440',

  // Required, must be 'code', 'code id_token', 'id_token code' or 'id_token' 
  responseType: 'code', 

  // Required
  responseMode: 'query', 

  // Required, the reply URL registered in AAD for your app
  redirectUrl: 'http://localhost:3000/auth/openid/return', 

  // Required if we use http for redirectUrl
  allowHttpForRedirectUrl: true,
  
  // Required if `responseType` is 'code', 'id_token code' or 'code id_token'. 
  // If app key contains '\', replace it with '\\'.
  //clientSecret: '668WJN5qvJ1KVVY+An/Ll1Z5sEOeECRTmgMR/x4YVa4=', 

  thumbprint: 'Z2mGlF+IHL49Q9a66mDQLWG/lfs=',
  privatePEMKey: '-----BEGIN RSA PRIVATE KEY-----\n\
MIIEowIBAAKCAQEAx2XTFadvEAPGZWL/nH/WdFPH+q3SdKr0IYuIcbMm1f0hoJij\n\
oCgFiOEM8m5v0kV4qVhkofa/Dd8/eIdJQSRZxXnnkU7+VVol06I4liFVHBNR8Lpv\n\
nR+6vD3rTIHdKQe1JLFnKUjDrlOjF3UF+i/IYV2qOm8KyXzDlddWn3JY1LCpyYbU\n\
GgMVlcY+RlO9SdKFLocs6SqbHHVYCE9MJhrwim0mboKmBOkc99Ox0W1hpINBtbyx\n\
D0jf69avpSPLW1ugTJ6LVjtGhmzwqM1VooMA69TN/RSeXjATijglHo1L/DNoMWx3\n\
NdSLr0lCewDbILak3pi/uMmhJPnFJ3CWsjm4yQIDAQABAoIBADBNZI+xjmgy/ee4\n\
DmMXHbhyxjYdzuZHtll871nZs+3xAqkgaLzGjSauG8CLi6eEgDkHqmMIvpnp63pz\n\
TUXMPDnn8LZkzBwZeSHWAX6uxusE7BvUUe7eTZJFrp8LM2u5zAH+PpcD4zEy3gZz\n\
6PWFBzW85px+oz6RbGC7OCbqYIXu8v8aHaZUltXPRVuBSfI+fOX1GswXOtLU3x5m\n\
AEb8OzVeUoSgzQ/vF0nL6jrfb9YvEk6Te6cPAcl8xwEdSt+SleYx0NDaaNlMaE8o\n\
aJJzNrZqLde8UrOGXrwMtXNFrmpzNtu8UAinPzF5qQg9FT6FKM1WnUg5fvN0z4yr\n\
n576Vc0CgYEA88QkHC5wO1zc/Ynog3Wnee3AtIrMCR4rk0p5j3CsQD1oPJ6jsmJG\n\
/emN6/NLYBDNo1KGdOUr9iEci5S9FhdEW+MwWYdkgkonFYzeFwoaAep00WNWsiNY\n\
Q4IhyuarlwbgFiq5JRrIssf0nbuHZjnm/yyWyTjdeyEaICItniqrAiUCgYEA0Wel\n\
mg+qhYa1qFP7Qt3O3KC5bciGfVofR4RLTaV/GdzuqY/VHsx4w7yEt6DnFdMEv9U5\n\
fybr7myI3MGMUPoynbZ8QnZsu1z7l+4uBCwDBICDEShVpWDJ3kFdccolvHRUZE0H\n\
IqIv7xivKpjUF7+h5hl5/CmI/+6h6cM/BgRCMNUCgYA79l6PlBjFcXVm5JqOY82b\n\
n5FMl+vSvlontCUs1KF6d+CBMODBi408/kuL4+ABtIBxEWbDsG/c7o4wA5lzqquF\n\
EuCc1UIzDnyIv4sODc0R9ZNgwlfcH/ehO4yGdbF1yBotObsrVmhSGf+hITUQP2QE\n\
FvrMarGIjT748o9YHdTNBQKBgQCfSOLr1HzWQsjNeMxIaaZfppZGDuFWWoYuhVAu\n\
iPOsfaTBMBph6hD2euDNOURuEmyrawroUHfojYBxw3vzYM29r8DHYYOF5c2vHMq9\n\
+6hz9Tk9hNvZB02mlTv6QVUBC8/h18HUs2AY1ELx+Pxj8C27dKeYixOd8iwRP6Yh\n\
8n1S3QKBgH8rBTakW3gOLuE2OzO1LDiuMXdPqBHueOqAvGrhhRqnWrq83iO18j1z\n\
CQaXVqHISnRgsdESnO8iMzeS7Jw+8vIhuwsNwHqUBfwxizl1hZ33NUw0dVXt5jjh\n\
0pratEXZwiwT5pYTWVbORmxSNUe+tWxELsAoagexKFzUj9I+04u0\n\
-----END RSA PRIVATE KEY-----',

  // Required to set to false if you don't want to validate issuer
  validateIssuer: true,

  // Required if you want to provide the issuer(s) you want to validate instead of using the issuer from metadata
  issuer: ['https://sts.windows.net/3bc5b5fb-d689-4886-8f9b-a477b719f741/'],

  // Required to set to true if the `verify` function has 'req' as the first parameter
  passReqToCallback: false,

  // Optional. The additional scope you want besides 'openid', for example: ['email', 'profile'].
  //scope: ['email', 'profile'],
  scope: null,

  // Optional, 'error', 'warn' or 'info'
  loggingLevel: 'info',

  // Optional. The lifetime of nonce in session, the default value is 3600 (seconds).
  nonceLifetime: null,
};

// Optional.
// If we want to get access_token for a particular resource, you can specify the resource here.
// Note that 'responseType' should be 'code', 'code id_token' or 'id_token code'.
exports.resourceURL = 'https://graph.windows.net';

// The url you need to go to destroy the session with AAD
exports.destroySessionUrl = 'https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=http://localhost:3000';

// If you want to use the mongoDB session store for session middleware; otherwise we will use the default
// session store provided by express-session.
// Note that the default session store is designed for development purpose only.
exports.useMongoDBSessionStore = true;

// If you want to use mongoDB, provide the uri here for the database.
exports.databaseUri = 'mongodb://localhost/OIDCStrategy';

// How long you want to keep session in mongoDB.
exports.mongoDBSessionMaxAge = 24 * 60 * 60;  // 1 day (unit is second)
