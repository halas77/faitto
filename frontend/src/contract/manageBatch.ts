import { getContract } from ".";
import { ProductFormData } from "../utils/types";

export const getBatchCounter = async () => {
  const contract = await getContract();

  try {
    const batchIdCounter = await contract.batchIdCounter();
    const batchId = batchIdCounter.toNumber();
    return batchId;
  } catch (error) {
    console.log("error", error);
  }
};

export const createBatch = async (productData: ProductFormData) => {
  console.log("productData", productData);

  const contract = await getContract();

  const batchName = productData.batchName;
  const createtionDate = Math.floor(Date.now() / 1000);
  const expirationDate = Math.floor(
    new Date(productData.expirationDate).getTime() / 1000
  );
  const status = 0;

  try {
    const item = await contract.createBatch(
      batchName,
      createtionDate,
      expirationDate,
      status
    );
    const res = await item.wait();

    return res;
  } catch (error) {
    console.log("error", error);
  }
};

export const getBatch = async (batchId: number | string) => {
  const contract = await getContract();
  console.log("contract", contract);
  try {
    const res = await contract.batches(batchId);
    const owner = res.currentOwner;
    const batchName = res.batchName;
    const expireDate = res.expirationDate;
    const timestampInSeconds = res.creationDate.toNumber();
    const date = new Date(timestampInSeconds * 1000);
    const formatttedDate = date.toLocaleString();

    const data = { owner, formatttedDate, batchName, expireDate };
    return data;
  } catch (error) {
    console.log("error", error);
  }
};