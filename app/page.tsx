'use client';

import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import ProductTable from './components/ProductTable';
import ProductDetails from './components/ProductDetails';
import ScoreCharts from './components/ScoreCharts';
import ProductForm from './components/ProductForm';
import { fetchProducts } from '../utils/fetchProducts';

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [aiFeedback, setAiFeedback] = useState<any | null>(null);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      {loading && <div className="text-center py-4">Loading...</div>}
      {!loading && products.length > 0 && (
        <>
          <ScoreCharts products={products} />
          <ProductTable products={products} onView={setSelectedProduct} />
        </>
      )}

      {selectedProduct && (
        <div>
          <div className="text-right mb-2">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="text-sm px-2 py-1 bg-gray-200 rounded"
            >
              Close
            </button>
          </div>
          <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        </div>
      )}

      <ProductForm onFeedback={setAiFeedback} />

      {aiFeedback && (
        <div className="p-4 mt-4 bg-blue-50 border border-blue-200 rounded">
          <strong>AI Feedback:</strong> {aiFeedback.explanation}
        </div>
      )}
    </Layout>
  );
}
