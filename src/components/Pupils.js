import React from "react";

export default function Pupils(props) {
  return (
    <p>
      <span>{props.completed}</span>
      <span>{props.inprogress}</span>
      <span>{props.notstarted}</span>
    </p>
  );
}
