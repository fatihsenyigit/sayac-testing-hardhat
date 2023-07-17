
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect } = require("chai");

  describe ("Sayac", function () {
    let add1; let add2; let add3; let sayac;
    beforeEach (async()=> {
        [add1, add2, add3] = await ethers.getSigners();
        const Sayac = await ethers.getContractFactory("Sayac");
        sayac = await Sayac.deploy();
    })

    it("should return the deployer as owner", async () => {
        const owner = await sayac.owner()
        expect(owner).to.be.equal(add1.address)
    })

    it("should return the right initial number", async () => {
        const initialNumber = await sayac.number();
        expect (initialNumber).to.be.equal(8)
    })

    it("should the return the right number after incerement", async ()=> {
        await sayac.increment();
        expect(await sayac.number()).to.be.equal(9)
    })
    
    it("should return the right number after decrement", async()=>{
        await sayac.decrement();
        expect (await sayac.number()).to.be.equal(7)
    })

    it("should revert it if different address", async()=>{
        expect(sayac.connect(add2).decrement()).to.revertedWith("your are not the owner")
    })

  })