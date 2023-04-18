pragma solidity ^0.5.3;

contract crud{
    
    struct User {
        uint id;
        string name;
    }
    
    User[] public users;
    uint public nextId;

    function walletAddress(string memory _name) public {
        users.push(User(nextId,_name));
        nextId++;
    }

    function updateWalletAddress(uint _id, string memory _name) public {
        uint i = findWalletAddress(_id);
        users[i].name = _name;
    }

    function readWalletAddress(uint _id) public view returns (uint, string memory){
        uint i = findWalletAddress(_id);
        return (users[i].id, users[i].name);
    }
    
    function deleteWalletAddress(uint _id) public {
        uint i = _id;
        delete users[i];
    }

    function findWalletAddress(uint _id) internal view returns (uint){
        for(uint i = 0; i < users.length; i++) {
            if(users[i].id==_id) {
                return i;
            }
        }
        revert("User does not exist!!!");
    }
}