import React from "react";
import { useLocation } from "react-router-dom";

function Item(props) {
  const { state } = useLocation();
  const { name, desc } = state;

  return (
    <>
      <div>{name}</div>
      <div>{desc}</div>
    </>
  );
}

export default Item;
