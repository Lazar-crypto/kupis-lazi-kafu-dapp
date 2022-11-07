// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

interface IBuyMeACoffe {
    event NewMemo(address indexed from, Memo memo);

    struct Memo {
        uint256 timestamp;
        string name;
        string message;
    }

    function buyMeACoffe(string memory _name, string memory _message)
        external
        payable;

    function withdrawTips() external;

    function getMemos() external view returns (Memo[] memory);
}
