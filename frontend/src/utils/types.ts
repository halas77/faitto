export interface ProductFormData {
  id: string;
  batchName: string;
  batchDesc: string;
  batchId?: number;
  expirationDate: string;
  manufacturer: string;
  currentOwner: string;
  imageUrl: string;
  category: string;
  status: number;
}

export interface ProductData {
  id: string;
  productId: string;
  productName: string;
  productDesc: string;
  batchId: string | number;
  price: number;
  image: string
}

export interface ProductHistoryType {
  owner?: string;
  formatttedDate?: string;
  expireDate?: string
  batchName?: string
}
