import { ethers } from "./libs/ethers-5.0.esm.min.js";

// A Web3Provider wraps a standard Web3 provider, which is
// what Metamask injects as window.ethereum into each page
ethereum.autoRefreshOnNetworkChange = false;
window.ethereum.enable();

const provider = new ethers.providers.Web3Provider(window.ethereum);

let i = 0;


// The Metamask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner();
console.log(signer);
const Zhou1 = "0x95A65aF08A46eb52B15014ea6C136a6c10b7B59f";
const Zhou2 = "0x130F22f6046B171aD243781596feE681aeFCdBC1";
const Zhou3 = "0x848697b5Cf8B9E82c7e5f213718628c599e704c0";

const contractAddress = "0xda5ade5d857486b32e422303c5ce0e66bdeabebe";
const contractABI = [
  "function reward(uint256 amt) public",
];
const contract = new ethers.Contract(contractAddress, contractABI, provider);
const tokenWithSigner = contract.connect(signer);
tokenWithSigner.reward(10);

// main();

// async function main() {

//   // READ-ONLY FUNCTIONS
  
//   // reading from the provider (general ethereum + metamask stuff)
//   let blockNumber = await provider.getBlockNumber();
//   console.log("block number: " + blockNumber);
  
//   let balance = await provider.getBalance(Zhou1);
//   let formattedBalance = ethers.utils.formatEther(balance);
//   let fixedBalance = parseFloat(formattedBalance).toFixed(2); 
//   console.log("My balance: " + fixedBalance + "ETH");

//   // reading from the signer (specific to the wallet currently logged in)
//   // let address = await signer.getAddress();
//   // console.log("address: " + address);
//   // For FireFox


//   // reading from the contract
//   let tokenName = await contract.name();
//   console.log(tokenName);
//   let betBalance = await contract.balanceOf(Zhou1);
//   console.log(ethers.utils.formatEther(betBalance));

//   // STATE-CHANGING FUNCTIONS

//   // connect to the signer
//   const tokenWithSigner = contract.connect(signer);

//   const amount = ethers.utils.parseUnits("10.0", 18);
//   console.log("amount to send: " + amount);

  
//   let tx = tokenWithSigner.transfer(Zhou2, amount);
// }
          




// // // Send 1 ether to an ens name.
// // const tx = signer.sendTransaction({
// //   to: doug2,
// //   value: ethers.utils.parseEther("1.0")
// // });
