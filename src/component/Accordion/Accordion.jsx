import { useState } from "react";
import { data } from "./data";
import "./style.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [storeMultiple, setStoreMultiple] = useState([]);

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultipleSelection = (currentId) => {
    const cpyStoreMultiple = [...storeMultiple];
    const findTheIndex = cpyStoreMultiple.indexOf(currentId);

    if (findTheIndex === -1) {
      cpyStoreMultiple.push(currentId);
    } else {
      cpyStoreMultiple.splice(findTheIndex, 1);
    }
    setStoreMultiple(cpyStoreMultiple);
  };

  return (
    <div>
      <button
        className="mx-4 my-4 bg-indigo-600 text-white text-xl px-5 py-1 text-center rounded-md hover:bg-indigo-700"
        onClick={() => {
          setEnableMultiSelection(!enableMultiSelection);
          // Reset selections when toggling mode
          setSelected(null);
          setStoreMultiple([]);
        }}
      >
        {enableMultiSelection
          ? "Disable Multiple Selection"
          : "Enable Multiple Selection"}
      </button>

      <div className="accordion">
        {data?.map((item) => (
          <div key={item.id} className="accordion-item">
            <div className="title">
              <h2
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="flex justify-between items-center cursor-pointer p-3 hover:bg-gray-50"
              >
                {item.title}
                <span>
                  {enableMultiSelection
                    ? storeMultiple.includes(item.id)
                      ? "▼"
                      : "▶"
                    : selected === item.id
                    ? "▼"
                    : "▶"}
                </span>
              </h2>
            </div>
            <div
              className={`content ${
                enableMultiSelection
                  ? storeMultiple.includes(item.id)
                    ? "active"
                    : ""
                  : selected === item.id
                  ? "active"
                  : ""
              }`}
            >
              {enableMultiSelection
                ? storeMultiple.includes(item.id) && <p>{item.content}</p>
                : selected === item.id && <p>{item.content}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
