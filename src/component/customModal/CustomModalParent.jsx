import React, { useState } from "react";
import CustomModalChild from "./CustomModalChild";

const CustomModalParent = () => {
  const [showModal, setShowModal] = useState(false);
  const handleToggleModalPopUp = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      <button onClick={handleToggleModalPopUp}>Open ModalPopUp</button>
      {showModal && <CustomModalChild onClose={handleToggleModalPopUp} />}
    </div>
  );
};

export default CustomModalParent;
