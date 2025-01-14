import React, { useEffect, useState } from "react";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await res.json();
      if (data && data.products && data.products.length) {
        setProducts((prev) => [...prev, ...data.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [count]);
  useEffect(() => {
    if (products && products.length === 100) {
      setDisable(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex flex-wrap mx-2 my-4 bg-indigo-50">
        {products && products.length
          ? products.map((item) => (
              <div
                key={item.id}
                className="border py-4 px-2 mx-2 my-2 bg-pink-200 rounded-xl"
              >
                <img
                  src={item.thumbnail}
                  alt={item.thumbnail}
                  height="200px"
                  width="200px"
                />
                <p>{item.title}</p>
                <p>{item.id}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        <button
          className="text-gray-50 mx-6 my-8 px-8 py-2 bg-pink-500"
          disabled={disable}
          onClick={() => setCount(count + 1)}
        >
          LoadMore
        </button>
        {disable && (
          <p className="mx-10 my-3 px-2 py-2 text-xl text-emerald-500 uppercase">
            YouReached to 100 products
          </p>
        )}
      </div>
    </>
  );
};

export default LoadMore;
