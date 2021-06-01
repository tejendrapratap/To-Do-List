import React, { useState } from "react";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";

const Olist = (props) => {
  const [line, setLine] = useState(false);
  const textCut = () => {
    setLine(true);
  };
  return (
    <div className="todo_style">
      <span onClick={textCut}>
        <DoneIcon className="doneIcon" />
      </span>
      <span
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        <DeleteIcon className="deleteIcon" />
      </span>
      <li
        className="list_items"
        style={{ textDecoration: line ? "line-through" : "none" }}
      >
        {props.text}
      </li>
    </div>
  );
};

export default Olist;
