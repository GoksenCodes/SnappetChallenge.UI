import React from "react";
import Pupils from "./Pupils";

export default function ListDetails(props) {
  console.log("PROPS in listdetails", props);
  const pupils = props.pupils;
  console.log("PUPILS in list detail", pupils);

  return (
    <tr>
      <td>
        <p>{props.id}</p>
      </td>
      <td>
        <p>{props.title}</p>
      </td>
      <p>
        <Pupils />
      </p>
      <td>
        <p></p>
      </td>
    </tr>
  );
}
