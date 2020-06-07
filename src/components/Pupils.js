import React from "react";

export default function Pupils(props) {
  const completedPupils = props.completed;
  const inprogressPupils = props.inprogress;
  const notstartedPupils = props.notstarted;

  const pupils = [];
  for (let i = 0; i < completedPupils; i++) {
    pupils.push(<span className="pupil__completed">X</span>);
  }

  for (let i = 0; i < inprogressPupils; i++) {
    pupils.push(<span className="pupil__inrpogress">Y</span>);
  }

  for (let i = 0; i < notstartedPupils; i++) {
    pupils.push(<span className="pupil__notstarted">Z</span>);
  }

  return <p className="table__pupil__content">{pupils.map(a => a)}</p>;
}
