// scripts/mint.js
const { ethers } = require("hardhat");

async function main() {
    console.log('Getting the non fun token contract...\n');
    const contractAddress = 'YOUR OWN CONTRACT ADDRESS HERE';
    const nonFunToken = await ethers.getContractAt('NonFunToken', contractAddress);
    const signers = await ethers.getSigners();
    const contractOwner = signers[0].address;

    // Mint new NFTs from the collection using custom function mintCollectionNFT()
    console.log(`Minting initial NFT collection to ${contractOwner}...`)
    const initialMintCount = 10;
    for (let i = 1; i <= initialMintCount; i++) {
        let tx = await nonFunToken.mintCollectionNFT(signers[0].address, i.toString());
        await tx.wait(); // wait for this tx to finish to avoid nonce issues
        console.log(`NFT ${i} minted to ${contractOwner}`);
    }

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    });