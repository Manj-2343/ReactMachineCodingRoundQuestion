import React from "react";
import Accordion from "./component/Accordion/Accordion";
import RandomColorGenerator from "./component/Color/RandomColorGenerator";
import StarRating from "./component/starRatinng/StarRating";
import Star from "./component/starRatinng/star";
import ImageSlider from "./component/imageSlider/ImageSlider";
import ImageSliderEx from "./component/imageSlider/ImageSliderEx";
import LoadMore from "./component/LoadMore/LoadMore";

const App = () => {
  return (
    <div>
      {/* <Accordion /> */}
      {/* <RandomColorGenerator /> */}
      {/* <StarRating /> */}
      {/* //// https://picsum.photos/v2/list?page=1&limit=5 */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} /> */}
      {/* <ImageSliderEx url={"https://picsum.photos/v2/list"} limit={10} /> */}
      <LoadMore />
    </div>
  );
};

export default App;
