# Azure Active Directory OIDC Web Sample


| [Library](https://github.com/AzureAD/passport-azure-ad) | [Docs](https://aka.ms/aaddev) | [Support](README.md#community-help-and-support) | [Protocol](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-protocols-openid-connect-code)
| --- | --- | --- | --- |

This sample demonstrates how to set up OpenId Connect authentication in a web application built using Node.js with Express. The sample is designed to run on any platform.

## Prerequisites

To run this sample you will need the following:

* Install Node.js from http://nodejs.org/

* An Azure AD tenant. If you're not sure what a tenant is or how you would get one, read [How to get an Azure AD tenant](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-howto-tenant).

## Register the sample in your Azure AD tenant

1. Sign in to the [Azure portal](https://portal.azure.com).

1. On the top bar, click on your account, and then on **Switch Directory**. Once the *Directory + subscription* pane opens, choose the Active Directory tenant where you wish to register your application.

1. Click on **All services** in the left-hand nav, and choose **Azure Active Directory**.

1. Click on **App registrations** and choose **New application registration**.

1. Enter a friendly name for the application, for example 'Webapp-Openidconnect' and select 'Web app / API' as the *Application Type*.

1. For the *sign-on URL*, enter the base URL for this sample which is `http://localhost:3000/`.

1. Click **Create** to create the application.

1. In the succeeding page, Find the *Application ID* value and record it for later. You'll need it to configure the client ID in the application.

1. Under **Settings**, choose **Properties** and update the App ID URI which is a unique identifier for your app. It is of the format 'https://<your_tenant_name>/<app_name>' replacing `<your_tenant_name>` with the name of your Azure AD tenant. For example: `https://contoso.onmicrosoft.com/Webapp-Openidconnect`

1. Under **Settings**, click on **Reply URLs** and set it to `http://localhost:3000/auth/openid/return` which this sample uses by default.

1. From the **Settings** menu, choose **Keys** and add a new entry in the Password section:
   - Type a key description (for instance 'app secret'),
   - Select a key duration of either **In 1 year**, **In 2 years**, or **Never Expires**.
   - When you save this page, the key value will be displayed. Copy, and save the value in a safe location.
   - You'll need this key later to configure the client secret in the app. This key value will not be displayed again, nor retrievable by any other means, so record it as soon as it is visible from the Azure portal.

## Download the sample application and modules

Next, clone the sample repo and install the NPM modules.

From your shell or command line run:

* `$ git clone git@github.com:AzureADQuickStarts/WebApp-OpenIDConnect-NodeJS.git`

or

* `$ git clone https://github.com/AzureADQuickStarts/WebApp-OpenIDConnect-NodeJS.git`


From the project root directory, run the command:

* `$ npm install`   

## Configure the application

Provide the parameters in `exports.creds` in config.js as instructed.

* Update `<tenant_name>` in `exports.identityMetadata` with the Azure AD tenant name of the format \*.onmicrosoft.com.
* Update `exports.clientID` with the Application Id noted from app registration.
* Update `exports.clientSecret` with the Application key noted from app registration.
* Update `exports.redirectUrl` with the Reply URL noted from app registration.

**Optional configuration for production apps:**

* Update `exports.destroySessionUrl` in config.js, if you want to use a different `post_logout_redirect_uri`.

* Set `exports.useMongoDBSessionStore` in config.js to true, if you want to use use mongoDB or other [compatible session stores](https://github.com/expressjs/session#compatible-session-stores).
The default session store in this sample is `express-session`. Note that the default session store is not suitable for production.

* Update `exports.databaseUri`, if you want to use mongoDB session store and a different database URI.

* Update `exports.mongoDBSessionMaxAge`. Here you can specify how long you want to keep a session in mongoDB. The unit is second(s).

## Build and run the application

* Start mongoDB service. If you are using mongoDB session store in this app, you have to [install mongoDB](http://www.mongodb.org/) and start the service first. If you are using the default session store, you can skip this step.

* Run the app using the following command from your command line.

    ```
    $ node app.js
    ```

**Is the server output hard to understand?:** We use `bunyan` for logging in this sample. The console won't make much sense to you unless you also install bunyan and run the server like above but pipe it through the bunyan binary:

```
$ npm install -g bunyan

$ node app.js | bunyan
```

## You're done!

You will have a server successfully running on `http://localhost:3000`.

## Community Help and Support

We use [Stack Overflow](http://stackoverflow.com/questions/tagged/azure-active-directory) with the community to provide support. We highly recommend you ask your questions on Stack Overflow first and browse existing issues to see if someone has asked your question before. Make sure that your questions or comments are tagged with [azure-active-directory].

If you find a bug or issue with this sample, please raise the issue on [GitHub Issues](../../issues).

For issues with the passport-azure-ad library, please raise the issue on the library GitHub repo.

## Contributing

If you'd like to contribute to this sample, please follow the [GitHub Fork and Pull request model](https://help.github.com/articles/fork-a-repo/).

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.   

## Security Library

This library controls how users sign-in and access services. We recommend you always take the latest version of our library in your app when possible.

## Security Reporting

If you find a security issue with our libraries or services please report it to [secure@microsoft.com](mailto:secure@microsoft.com) with as much detail as possible. Your submission may be eligible for a bounty through the [Microsoft Bounty](http://aka.ms/bugbounty) program. Please do not post security issues to GitHub Issues or any other public site. We will contact you shortly upon receiving the information. We encourage you to get notifications of when security incidents occur by visiting [this page](https://technet.microsoft.com/en-us/security/dd252948) and subscribing to Security Advisory Alerts.

### Acknowledgements

We would like to acknowledge the folks who own/contribute to the following projects for their support of Azure Active Directory and their libraries that were used to build this sample. In places where we forked these libraries to add additional functionality, we ensured that the chain of forking remains intact so you can navigate back to the original package. Working with such great partners in the open source community clearly illustrates what open collaboration can accomplish. Thank you!

### About The Code

Copyright (c) Microsoft Corporation.  All rights reserved. Licensed under the MIT License (the "License");
