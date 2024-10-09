const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const FaittoModule = buildModule("Faitto", (m: any) => {
  const Faitto = m.contract("Faitto");

  return { Faitto };
});

module.exports = FaittoModule;

// 0x6d69D935e5416289da544Fc1E9d0a41266ef1133
