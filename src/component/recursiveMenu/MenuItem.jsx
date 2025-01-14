import { useState } from "react";
import MenuList from "./menuList";

const MenuItem = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleToggleChildren = (currentId) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentId]: !displayCurrentChildren[currentId],
    });
  };

  return (
    <li className="border-b border-gray-200">
      <div className="flex items-center justify-between p-3 hover:bg-gray-100 transition duration-200">
        <p className="text-lg font-medium text-gray-800">{item.title}</p>
        {item?.children?.length > 0 && (
          <span
            onClick={() => handleToggleChildren(item.id)}
            className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-200 text-3xl"
          >
            {displayCurrentChildren[item.id] ? "-" : "+"}
          </span>
        )}
      </div>
      {item?.children?.length > 0 && displayCurrentChildren[item.id] && (
        <MenuList list={item.children} />
      )}
    </li>
  );
};

export default MenuItem;
