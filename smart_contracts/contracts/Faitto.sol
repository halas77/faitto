// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Faitto is ERC721, Ownable {
    struct Product {
        uint256 id;
        string name;
        string origin;
        uint256 price;
        address currentOwner;
        bool available;
    }

    mapping(uint256 => Product) public products;
    uint256 public productCounter;

    event ProductCreated(uint256 indexed productId, string name, uint256 price);
    event ProductPurchased(
        uint256 indexed productId,
        address buyer,
        uint256 price
    );

    event ProductStatusUpdated(uint256 indexed productId, bool available);

    constructor() Ownable(msg.sender) ERC721("BioMedTool", "BMT") {}

    modifier onlyProductOwner(uint256 _productId) {
        require(
            products[_productId].currentOwner == msg.sender,
            "Not the product owner"
        );
        _;
    }

    function createProduct(
        string memory _name,
        string memory _origin,
        uint256 _price
    ) external onlyOwner {
        productCounter++;
        uint256 newProductId = productCounter;

        _mint(msg.sender, newProductId);

        products[newProductId] = Product({
            id: newProductId,
            name: _name,
            origin: _origin,
            price: _price,
            currentOwner: msg.sender,
            available: true
        });

        emit ProductCreated(newProductId, _name, _price);
    }

    function purchaseProduct(uint256 _productId) external payable {
        Product memory product = products[_productId];

        require(product.available, "Product not available");
        require(msg.value >= product.price, "Insufficient funds");

        _transfer(product.currentOwner, msg.sender, _productId);

        product.currentOwner = msg.sender;
        product.available = false;
        products[_productId] = product;

        payable(product.currentOwner).transfer(msg.value);

        emit ProductPurchased(_productId, msg.sender, msg.value);
    }

    function updateProductStatus(
        uint256 _productId,
        bool _available
    ) external onlyProductOwner(_productId) {
        products[_productId].available = _available;
        emit ProductStatusUpdated(_productId, _available);
    }

    function getProduct(
        uint256 _productId
    ) external view returns (Product memory) {
        return products[_productId];
    }
}
