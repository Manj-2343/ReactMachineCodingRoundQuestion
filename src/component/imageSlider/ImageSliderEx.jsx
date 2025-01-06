import React, { useEffect, useState } from "react";

const ImageSliderEx = ({ url, limit }) => {
  const [images, setImages] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchUrl = async (getUrl) => {
    try {
      setLoading(true);
      setErrMsg(null);
      const res = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await res.json(); // Await the JSON response
      if (data) {
        setImages(data);
      }
    } catch (e) {
      console.log(e.message); // Corrected error logging
      setErrMsg("Something went wrong"); // Set error message
    } finally {
      setLoading(false); // Ensure loading is set to false in both success and error cases
    }
  };

  useEffect(() => {
    fetchUrl(url);
  }, [url, limit]);

  if (loading) {
    return <div className="text-red-600">Loading...</div>;
  }
  if (errMsg) {
    return <div className="text-red-500">{errMsg}</div>;
  }

  const handlePrevButton = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextButton = () => {
    // setCurrentSlide((next) => (next === images.length - 1 ? 0 : next + 1));
    setCurrentSlide((next) => (next === images.length - 1 ? 0 : next + 1));
  };
  return (
    <div>
      <div className="flex justify-center mt-5">
        <button
          className="bg-red-600 text-black px-4 py-4 max-h-10 rounded-full mt-16"
          onClick={handlePrevButton}
        >
          L
        </button>
        {images.length > 0 && (
          <img
            src={images[currentSlide].download_url} // Display the current slide
            alt={images[currentSlide].download_url}
            key={images[currentSlide].id} // Add a key prop
            width="250px"
            height="250px"
          />
        )}
        <button
          className="bg-red-600 text-black px-4 py-4 max-h-10 rounded-full mt-16"
          onClick={handleNextButton}
        >
          R
        </button>
      </div>
    </div>
  );
};

export default ImageSliderEx;
