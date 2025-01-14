import React from "react";
import MenuList from "./menuList";

const RecursiveMenu = ({ menus = [] }) => {
  return (
    <div className="container w-1/5 mx-2 my-2 bg-gray-400 h-screen">
      <MenuList list={menus} />
    </div>
  );
};

export default RecursiveMenu;
