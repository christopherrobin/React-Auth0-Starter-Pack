<img width="698" alt="Screen Shot 2021-07-02 at 11 00 53 PM" src="https://user-images.githubusercontent.com/464211/124341318-797a6900-db89-11eb-91d5-ea0552f6dc22.png">

# React and Auth0 Starter Pack

This sample demonstrates how to renew `access_token`s in a React application with Auth0 using `checkSession`. For more information, read [our reference documentation](https://auth0.com/docs/libraries/auth0js#using-checksession-to-acquire-new-tokens).

## Getting Started

If you haven't already done so, [sign up](https://auth0.com) for your free Auth0 account and create a new client in the [dashboard](https://manage.auth0.com). Find the **domain** and **client ID** from the settings area and add the URL for your application to the **Allowed Callback URLs** box. The default URL is `http://localhost:3000/callback`. Also configure **Allowed Web Origins** to the default application URL `http://localhost:3000`.

Clone the repo or download it from the React quickstart page in Auth0's documentation.

Open the demo.

```bash
cd React-Auth0-Starter-Pack
```

Install the dependencies for the app.

```
npm install
```

## Set the Client ID and Domain

If you download the sample from the quickstart page, it will come pre-populated with the **client ID** and **domain** for your application. If you clone the repo directly from Github, rename the `auth0-variables.js.example` file to `auth0-variables.js` and provide the **client ID** and **domain** there. This file is located in `src/Auth/`.

## Run the Application

The demo comes ready to serve locally using react-scripts.

```bash
npm start
```

The application will be served at `http://localhost:3000`.

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com/signup) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](https://auth0.com)

Customized by [Space Age Brains](http://www.SpaceAgeBrains.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE.txt) file for more info.
