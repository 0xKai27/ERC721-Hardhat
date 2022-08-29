// scripts/transfer.js
const { ethers } = require("hardhat");

async function main() {
    console.log('Getting the non fun token contract...\n');
    const contractAddress = 'YOUR OWN CONTRACT ADDRESS HERE';
    const nonFunToken = await ethers.getContractAt('NonFunToken', contractAddress);
    const signers = await ethers.getSigners();
    const contractOwner = signers[0].address;

    // Transfer tokenId 1 to another account
    console.log(`Transferring NFT...`)
    const recipient = "YOUR OWN ALTERNATE ACCOUNT HERE";
    const tokenId = "1";
    let tx = await nonFunToken["safeTransferFrom(address,address,uint256)"](contractOwner, recipient, tokenId);
    await tx.wait();
    console.log(`NFT ${tokenId} transferred from ${contractOwner} to ${recipient}`);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });