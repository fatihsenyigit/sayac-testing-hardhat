// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Sayac {
    int public number = 8;
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(owner == msg.sender, "your are not the owner");
        _;
    }

    event trackDecrement (uint indexed creatingTime);

   function increment () public {
       number +=  1;
   }

   function decrement () public onlyOwner {
       number -= 1;
       emit trackDecrement(block.timestamp);
   }
}