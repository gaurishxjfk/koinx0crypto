This is a crypto dashboard web application that allows users to track the price of Bitcoin in USD and INR, view a chart of BTCUSD from TradingView, and see the top trending coins in the crypto market. The application is built using NextJS, TypeScript, and integrates with Coingecko and TradingView APIs.

Features
- Fetches the current price of Bitcoin in USD and INR from Coingecko API.
- Displays a TradingView chart of BTCUSD.
- Fetches the top 3 trending coins from Coingecko's /search/trending API.
- Additional section for trending coins.
- Responsive UI design .

API Integration
Coingecko API: Used to fetch the price of Bitcoin and trending coins.
TradingView API: Embedded TradingView's chart of BTCUSD.

Optional Dynamic Token
To view data for a specific token, you can append the Coingecko ID of the coin to the URL. For example:
/bitcoin will show Bitcoin's data and chart.
/ethereum will show Ethereum's data and chart.
