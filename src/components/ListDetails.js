import React from "react";
import Pupils from "./Pupils";

export default function ListDetails(props) {
  console.log("PROPS in listdetails", props);
  const pupils = props.pupils;
  console.log("PUPILS in list detail", pupils);

  return (
    <tr>
      <td className="table__id">
        <p className="table__id__content">{props.id}. </p>
      </td>
      <td className="table__title">
        <p className="table__title__content">{props.title}</p>
      </td>
      <td className="table__pupil">
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
      <td className="table__button">
        <button className="btn">Show Details</button>
      </td>
    </tr>
  );
}
