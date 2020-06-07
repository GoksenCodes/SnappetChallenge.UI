import React from "react";

export default function Pupils(props) {
  const completedPupils = props.completed;
  const inprogressPupils = props.inprogress;
  const notstartedPupils = props.notstarted;

  const pupils = [];
  for (let i = 0; i < completedPupils; i++) {
    pupils.push(<span className="pupil pupil__completed"></span>);
  }

  for (let i = 0; i < inprogressPupils; i++) {
    pupils.push(<span className="pupil pupil__inprogress"></span>);
  }

  for (let i = 0; i < notstartedPupils; i++) {
    pupils.push(<span className="pupil pupil__notstarted"></span>);
  }

  return <div>{pupils.map(a => a)}</div>;
}
