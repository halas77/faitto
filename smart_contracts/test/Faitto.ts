const { expect } = require("chai");
const { ethers } = require("hardhat");
const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("Faitto contract", async () => {
  const deployContractFixture = async () => {
    const [owner, producer] = await ethers.getSigners();
    const fissetContract = await ethers.deployContract("Faitto");

    return { fissetContract, owner, producer };
  };

  it("should create an item", async () => {
    const { fissetContract, owner } = await loadFixture(deployContractFixture);
    await fissetContract.createProduct("Beans", "Ethiopia", 1000);
    const item = await fissetContract.connect(owner).products(1);
    expect(item.name).to.equal("Beans");
  });
});
