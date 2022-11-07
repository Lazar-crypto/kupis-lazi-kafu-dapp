// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./interface/IBuyMeACoffee.sol";

contract BuyMeACoffee is IBuyMeACoffe {
    address payable owner;

    Memo[] memos;

    constructor() {
        owner = payable(msg.sender);
    }

    function buyMeACoffe(string memory _name, string memory _message)
        external
        payable
    {
        require(msg.value > 0, "Can't buy coffee with 0 eth");

        Memo memory memo = Memo(block.timestamp, _name, _message);
        memos.push(memo);

        emit NewMemo(msg.sender, memo);
    }

    function withdrawTips() external {
        require(owner.send(address(this).balance));
    }

    function getMemos() external view returns (Memo[] memory) {
        return memos;
    }
}
