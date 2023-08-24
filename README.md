

Weld Finance Contract Interface
This module provides a Web3.js interface to interact with the Weld Finance Contract on Ethereum. Here's how to use it.

Prerequisites
Ensure you have the web3 library installed:


npm install web3
You should also have an Ethereum node endpoint (e.g., via Infura or any other service).

Setup
Import and configure the module:

javascript

const Web3 = require('web3');
const web3 = new Web3('your-ethereum-node-url');

const contractAddress = '0xContractAddress';
const contractABI = [ /* Contract ABI here */ ];

const weldFinanceContract = new web3.eth.Contract(contractABI, contractAddress);
Replace 'your-ethereum-node-url' with your Ethereum node's endpoint and '0xContractAddress' with the contract's address.

Functions
Deposit
Deposits a specified amount of an asset into the money market pool.

javascript

async function deposit(asset, amount, account);
asset: The asset type (e.g., 'BTC', 'USDT').
amount: The amount to deposit.
account: The Ethereum address from which the deposit will be made.
Borrow
Borrows a specified amount of an asset from the money market pool.

javascript

async function borrow(asset, amount, account);
asset: The asset type ( 'BTC', 'USDT').
amount: The amount to borrow.
account: The Ethereum address from which the borrow will be initiated.
Get Historical Interest Rates
Fetches the historical interest rates for a given asset.

javascript

async function getHistoricalInterestRates(asset);
asset: The asset type for which you want to fetch historical rates.
Get Current Interest Rate
Fetches the current interest rate for a given asset.

javascript


async function getCurrentInterestRate(asset);
asset: The asset type for which you want to fetch the current rate.
Sample Usage
javascript

const account = '0xYourAccountAddress';
deposit('BTC', '1', account);
borrow('USDT', '100', account);
getHistoricalInterestRates('BTC');
getCurrentInterestRate('USDT');
