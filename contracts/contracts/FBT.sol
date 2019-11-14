pragma solidity >=0.5.1 <0.7.0;
import "contracts/IERC20.sol";

/*
   *  @title: FBT
   *  @dev: Firstblood Test Token to provide an environment 
   *        for testing the fund transfers 
   */

contract FBT is IERC20 {
    string  public name = "FBT";
    string  public symbol = "FBT";
    string  public standard = "FBT_test";
    uint256 public totalSupply;

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _value
    );

    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _value
    );

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    /*
    * @dev: Constructor which initializes the balance and total supply of token.
    *
    */

    constructor () public {
        balanceOf[msg.sender] = 10000000000;
        totalSupply = 1000000000;
    }

    /* 
     * @dev: Transfer token from owner's address to other.
     *
     * @param _to: bytes representation of destination address.
     * @param _value: amount of tokens to transfer
     * @return: Boolean indicating the transfer status.
     */

    function transfer(address _to, uint256 _value) public returns (bool success) {
        require(balanceOf[msg.sender] >= _value, "Error in transfer");

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;

        emit Transfer(msg.sender, _to, _value);

        return true;
    }

    /* 
     * @dev: Approve address before trasnferring tokens from third party.
     *
     * @param _spender: bytes representation of spender/approver address who has the tokens in his account.
     * @param _value: amount of tokens to transfer
     * @return: Boolean indicating the approval status.
     */

    function approve(address _spender, uint256 _value) public returns (bool success) {
        allowance[msg.sender][_spender] = _value;

        emit Approval(msg.sender, _spender, _value);

        return true;
    }

    /* 
     * @dev: Transfer token from third party address to destination address.
     *
     * @param _from: bytes representation of source address.
     * @param _to: bytes representation of destination address.
     * @param _value: amount of tokens to transfer
     * @return: Boolean indicating the transfer  status.
     */

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success) {
        require(_value <= balanceOf[_from], "Error in transferFrom");
        require(_value <= allowance[_from][msg.sender], "Error in transferFrom");

        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;

        allowance[_from][msg.sender] -= _value;

        emit Transfer(_from, _to, _value);

        return true;
    }
}