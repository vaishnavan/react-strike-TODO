import React, { useState } from "react";

export default function App() {
  const [itemName, setItemName] = useState("");
  const [itemData, setItemData] = useState([]);

  const handleChange = (e) => {
    setItemName(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const myData = {
      id: Math.floor(Math.random() * 1000),
      itemname: itemName,
      isComplete: false
    };
    setItemData([...itemData, myData]);
    setItemName("");
  };

  console.log(itemData);

  const changeState = (id) => {
    const newData = itemData.map((data) => {
      if (data.id === id) {
        return { ...data, isComplete: !data.isComplete };
      }
      return data;
    });

    setItemData(newData);
  };

  return (
    <>
      <h1>TODO</h1>
      <form>
        <input
          type="text"
          value={itemName}
          placeholder="enter item"
          onChange={handleChange}
        />
        <button type="submit" onClick={handleAdd}>
          Add
        </button>
      </form>
      {itemData.map((data) => {
        return (
          <div key={data.id}>
            {data.isComplete ? (
              <>
                <strike>{data.itemname}</strike>
              </>
            ) : (
              <>
                <span>{data.itemname}</span>
              </>
            )}
            <br />
            <button onClick={() => changeState(data.id)}>
              {data.isComplete ? "completed" : "incomplete"}
            </button>
          </div>
        );
      })}
    </>
  );
}
