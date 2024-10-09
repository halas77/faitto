import { getContract } from ".";

interface CreateProductProps {
  name: string;
  origin: string;
  price: number;
}

// Create item
export const createProduct = async ({
  name,
  origin,
  price,
}: CreateProductProps) => {
  const contract = await getContract();

  try {
    const item = await contract.createProduct(name, origin, price);
    await item.wait();
  } catch (error) {
    console.log("error", error);
  }
};


// getItems
export const getProducts = async () => {
    const contract = await getContract();
    const productCounter = await contract.productCounter();
  
    const products = [];
  
    for (let i = 1; i <= productCounter; i++) {
      const product = await contract.products(i);
  
      const formattedProduct = {
        id: product.id.toString(),
        name: product.name,
        owner: product.currentOwner,
        origin: product.origin,
        price: product.price.toString(),
        available: product.available,
      };
      products.push(formattedProduct);
    }  
    return products;
  };
