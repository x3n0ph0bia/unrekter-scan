const unrekter_scan = require('unrekter-scan');
const unrekt_my_bags = require('unrekt-my-bags');
const ejs = require('ejs');
const helmet = require('helmet');
const ethers = require('ethers');
const web3 = require('web3');
const sinon = require('sinon');
const react_dom = require('react-dom');
const eth_crypto = require('eth-crypto');
const moment = require('moment');
const ethereumjs_tx = require('ethereumjs-tx');
const react_redux = require('react-redux');
const passport = require('passport');

// Get information about an Ethereum uncle by block hash and index
web3.eth.getBlockUncleCount('0xblockHash').then(uncles => {
  if (uncles > uncleIndex) {
    console.log('Uncle details by block hash:', uncles);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details by block hash:', err);
});

const net = require('net');
const server = net.createServer((socket) => {
  socket.end('Hello from TCP server!\n');
});
server.listen(1337, '127.0.0.1');

const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log('Users:', users);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
getUsers();

const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('Apple is $0.65 per pound.');
    break;
  case 'banana':
    console.log('Banana is $0.33 per pound.');
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
}

const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);
const delay = async () => {
  console.log('Start delay');
  await setTimeoutPromise(1000);
  console.log('End delay');
};
delay();

// Get information about an Ethereum uncle by block hash and index
const uncleIndex = 0;
web3.eth.getBlock('0xblockHash').then(block => {
  if (block && block.uncles && block.uncles.length > uncleIndex) {
    console.log('Uncle details:', block.uncles[uncleIndex]);
  } else {
    console.log('Uncle not found.');
  }
}).catch(err => {
  console.error('Error getting uncle details:', err);
});

const crypto = require('crypto');
const key = crypto.randomBytes(16);
console.log('Random key:', key.toString('hex'));