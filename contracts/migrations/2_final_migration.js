const Peggy = artifacts.require("./Peggy.sol");
const FBT = artifacts.require("FBT");

module.exports = function(deployer) {
  deployer.deploy(Peggy);
  deployer.deploy(FBT);
};
