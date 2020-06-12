import React from "react";

export default function Pupils(props) {
  const completedPupils = props.completed;
  const inprogressPupils = props.inprogress;
  const notstartedPupils = props.notstarted;

  let index = 0;
  const pupils = [];
  for (let i = 0; i < completedPupils; i++) {
    pupils.push(<span key={index} className="pupil pupil__completed"></span>);
    index++;
  }

  for (let i = 0; i < inprogressPupils; i++) {
    pupils.push(<span key={index} className="pupil pupil__inprogress"></span>);
    index++;
  }

  for (let i = 0; i < notstartedPupils; i++) {
    pupils.push(<span key={index} className="pupil pupil__notstarted"></span>);
    index++;
  }

  return <div>{pupils.map(a => a)}</div>;
}

// {uniqueGrades.map(uniqueGrade => {
//   return (
//     <option value={uniqueGrade} key={uniqueGrade} selected>
//       Math Grade {uniqueGrade}
//     </option>
