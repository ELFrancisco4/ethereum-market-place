const hre = require("hardhat");

const main = async () => {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

  const lockedAmount = hre.ethers.utils.parseEther("1");

  const MarketPlace = await hre.ethers.getContractFactory("MarketPlace");
  const marketplace = await MarketPlace.deploy(unlockTime, {
    value: lockedAmount,
  });

  await marketplace.deployed();

  console.log("MarketPlace with 1 ETH deployed to:", lock.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
};

runMain()
