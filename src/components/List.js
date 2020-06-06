import React, { useState } from "react";

export default function List() {
  const [learningObjs, setLearningObjs] = useState([
    {
      grade: 3,

      id: 101,
      no: 101,
      title: "Whole Number: Addition & Subtraction"
    },
    {
      grade: 3,
      id: 102,
      no: 102,
      title: " Whole Number: Multiplication & Division"
    },
    {
      grade: 3,
      id: 103,
      no: 103,
      title: "Number Theory and Systems"
    },
    {
      grade: 4,
      id: 111,
      no: 111,
      title: "Number Sentences, Equations & Inequalities"
    },
    {
      grade: 4,
      id: 112,
      no: 112,
      title: "Addition and Subtraction"
    },
    {
      grade: 4,
      id: 113,
      no: 113,
      title: "Fractions and Decimals"
    },
    {
      grade: 5,
      id: 123,
      no: 123,
      title: " Doortelen en terugtelen met spr..."
    },
    {
      grade: 5,
      id: 201,
      id: 201,
      title: "Splitsend vermenigvuldigen (6 x 32 =...)"
    },
    {
      grade: 5,
      id: 123,
      no: 124,
      title: " Doortelen en terugtelen met spr..."
    }
  ]);

  const mathGrades = learningObjs.map(mathGrade => mathGrade.grade);
  console.log(mathGrades);

  const uniqueGrades = [...new Set(mathGrades)];
  console.log(uniqueGrades);

  return (
    <div className="main">
      <h1>Learning Objectives Table</h1>
      <select>
        {uniqueGrades.map(uniqueGrade => {
          return (
            <option value={uniqueGrade} key={uniqueGrade}>
              Math Grade {uniqueGrade}
            </option>
          );
        })}
      </select>
    </div>
  );
}
