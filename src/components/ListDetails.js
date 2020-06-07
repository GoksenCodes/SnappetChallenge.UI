import React from "react";
import Pupils from "./Pupils";

export default function ListDetails(props) {
  const pupils = props.pupils;

  return (
    <tr>
      <td className="table__title">
        <p className="table__title__content">
          {props.id}. {props.title}
        </p>
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
