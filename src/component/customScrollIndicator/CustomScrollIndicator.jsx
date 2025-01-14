import React, { useEffect, useState } from "react";

const CustomScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchData = async (getUrl) => {
    setLoading(true);
    try {
      const res = await fetch(getUrl);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const jsonData = await res.json();
      setData(jsonData.products);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);
  const handleScrollPercentage = () => {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((howMuchScrolled / height) * 100);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);
  console.log(scrollPercentage);
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${scrollPercentage}%`,
          height: "4px",
          backgroundColor: "#3B82F6", // Tailwind blue-500
          transition: "width 0.2s ease-in-out",
          zIndex: 50,
        }}
      />
      <h1>Custom Scroll Indicator</h1>
      <div className="flex flex-col text-center mx-5 my-3 text-blue-500">
        {data?.length &&
          data.map((item) => (
            <p className="text-xl" key={item.id}>
              {item.id}-{item.title}
            </p>
          ))}
      </div>
    </div>
  );
};

export default CustomScrollIndicator;
