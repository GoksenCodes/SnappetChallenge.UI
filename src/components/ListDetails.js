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
      <td>
        {pupils.map((pupil, num) => {
          return (
            <Pupils
              key={num}
              completed={pupil.completed}
              inprogress={pupil.inprogress}
              notstarted={pupil.notstarted}
            />
          );
        })}
      </td>
      <td>
        <p></p>
      </td>
    </tr>
  );
}
