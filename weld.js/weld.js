// Assuming you have Web3.js library installed
const Web3 = require('web3');

// Connect to an Ethereum node (Replace 'your-ethereum-node-url' with the actual node URL)
const web3 = new Web3('your-ethereum-node-url');

// Deployed contract address and ABI
const contractAddress = '0xContractAddress';
const contractABI = [ /* Contract ABI here */ ];

// Create an instance of the contract
const weldFinanceContract = new web3.eth.Contract(contractABI, contractAddress);

// Example function for suppliers to deposit assets to the money market pool
async function deposit(asset, amount, account) {
  try {
    // Check if the asset is supported (BTC, USDT, etc.)
    // Implement your logic to verify asset support
    if (isAssetSupported(asset)) {
      // Send a transaction to the contract to deposit the asset
      await weldFinanceContract.methods.deposit(asset, amount).send({ from: account });
      console.log('Deposit successful');
    } else {
      console.error('Unsupported asset');
    }
  } catch (err) {
    console.error('Error depositing:', err.message);
  }
}

// Example function for borrowers to borrow assets from the money market pool
async function borrow(asset, amount, account) {
  try {
    // Check if the asset is supported (BTC, USDT, etc.)
    // Implement your logic to verify asset support
    if (isAssetSupported(asset)) {
      // Send a transaction to the contract to borrow the asset
      await weldFinanceContract.methods.borrow(asset, amount).send({ from: account });
      console.log('Borrow successful');
    } else {
      console.error('Unsupported asset');
    }
  } catch (err) {
    console.error('Error borrowing:', err.message);
  }
}

// Example function to get historical interest rates for an asset
async function getHistoricalInterestRates(asset) {
  try {
    // Call the contract's function to get historical interest rates
    const rates = await weldFinanceContract.methods.getHistoricalInterestRates(asset).call();
    console.log('Historical interest rates:', rates);
  } catch (err) {
    console.error('Error getting historical interest rates:', err.message);
  }
}

// Example function to get the current interest rate for an asset
async function getCurrentInterestRate(asset) {
  try {
    // Call the contract's function to get the current interest rate
    const rate = await weldFinanceContract.methods.getCurrentInterestRate(asset).call();
    console.log('Current interest rate:', rate);
  } catch (err) {
    console.error('Error getting current interest rate:', err.message);
  }
}

// Sample usage
const account = '0xYourAccountAddress';
deposit('BTC', '1', account);
borrow('USDT', '100', account);
getHistoricalInterestRates('BTC');
getCurrentInterestRate('USDT');
