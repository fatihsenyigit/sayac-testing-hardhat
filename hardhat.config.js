require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    networks: {
      sepolia: {
        url: "https://sepolia.infura.io/v3/d6845db50eac48f4a2a6f0441fce74fc",
        accounts: ["4a4cd5ad47cead8813d2442aad9e839edfa77606bfc44b4a5a474ed3440648cc"],
      },
    },
  
  solidity: "0.8.18",
};
