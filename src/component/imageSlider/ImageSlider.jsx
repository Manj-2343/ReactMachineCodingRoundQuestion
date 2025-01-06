import { useState } from "react";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const fetchImage = async (getUrl) => {
    try {
      setLoading(true);
      setErrorMessage(null);
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (data) {
        setImages(data);
      }
    } catch (e) {
      console.error(e.message);
      setErrorMessage("Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImage(url);
  }, [url, limit]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide, images.length]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl">Loading.....</div>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl text-red-500">{errorMessage}</div>
      </div>
    );
  }

  return (
    <div className="relative max-w-2xl mx-auto my-10">
      {/* Main slider container */}
      <div className="relative h-[400px] overflow-hidden rounded-lg">
        {images.length > 0 && (
          <div
            className="absolute w-full h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((imageItem, index) => (
              <div
                key={imageItem.id}
                className="absolute w-full h-full"
                style={{ left: `${index * 100}%` }}
              >
                <img
                  src={imageItem.download_url}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Navigation buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
          aria-label="Previous slide"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
          aria-label="Next slide"
        >
          →
        </button>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
