const hre = require("hardhat");

async function main () {
    const sayac = await hre.ethers.deployContract("Sayac");
      await sayac.waitForDeployment();
    console.log(sayac.target);
    console.log(sayac.runner.address);
}

main();