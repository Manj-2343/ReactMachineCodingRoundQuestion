import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ list = [] }) => {
  return (
    <ul>
      {list?.length ? (
        list.map((listItem) => <MenuItem item={listItem} key={listItem.id} />)
      ) : (
        <h2>No menu is present</h2>
      )}
    </ul>
  );
};

export default MenuList;
