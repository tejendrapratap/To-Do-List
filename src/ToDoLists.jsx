import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Olist from "./Olist";

const ToDoLists = () => {
  const [item, setItem] = useState("");
  const [NewList, setNewList] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const ListOfItems = () => {
    setNewList((oldList) => {
      return [...oldList, item];
    });
    setItem("");
  };

  const deleteItems = (id) => {
    setNewList((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To-Do-List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an item"
            className="input_div"
            value={item}
            onChange={itemEvent}
          />
          <Button className="btn" onClick={ListOfItems}>
            <AddIcon />
          </Button>
          <ol className="ordered_list">
            {NewList.map((itemval, index) => {
              return (
                <Olist
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default ToDoLists;
