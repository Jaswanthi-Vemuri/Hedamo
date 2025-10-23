// utils/fetchProducts.js
export async function fetchProducts() {
  const res = await fetch('/api/products');
  return res.json();
}
