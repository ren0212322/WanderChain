// tokenTransfer.js

import hre from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

export async function transfer(donerAddress, recipientAddress, amount) {
  const contractAddress = process.env.CONTRACT_ADDRESS || ""; // Replace with your contract's address
  const WanderToken = await hre.ethers.getContractFactory("WanderToken");
  const wanderToken = WanderToken.attach(contractAddress);

  //   const tranc = await wanderToken.transfer(recipientAddress, amount);
  const donateP = await wanderToken.donate(
    donerAddress,
    recipientAddress,
    amount
  );
  await donateP.wait();
  console.log(`Transacted ${amount} tokens to ${recipientAddress}`);
}
