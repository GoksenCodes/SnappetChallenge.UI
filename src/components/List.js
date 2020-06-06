import React, { useState } from "react";
import ListDetails from "./ListDetails";

export default function List() {
  const allLearningObjs = [
    {
      id: 101,
      grade: 3,
      no: 101,
      title: "Whole Number: Addition & Subtraction",
      pupils: [
        {
          completed: 3,
          inprogress: 34,
          notstarted: 3
        }
      ]
    },
    {
      id: 102,
      grade: 3,
      no: 102,
      title: " Whole Number: Multiplication & Division",
      pupils: [
        {
          completed: 3,
          inprogress: 34,
          notstarted: 3
        }
      ]
    },
    {
      id: 103,
      grade: 3,
      no: 103,
      title: "Number Theory and Systems",
      pupils: [
        {
          completed: 3,
          inprogress: 34,
          notstarted: 3
        }
      ]
    },
    {
      id: 111,
      grade: 4,
      no: 111,
      title: "Number Sentences, Equations & Inequalities",
      pupils: [
        {
          completed: 3,
          inprogress: 34,
          notstarted: 3
        }
      ]
    },
    {
      id: 112,
      grade: 4,
      no: 112,
      title: "Addition and Subtraction",
      pupils: [
        {
          completed: 3,
          inprogress: 34,
          notstarted: 3
        }
      ]
    },
    {
      id: 113,
      grade: 4,
      no: 113,
      title: "Fractions and Decimals",
      pupils: [
        {
          completed: 3,
          inprogress: 34,
          notstarted: 3
        }
      ]
    },
    {
      id: 123,
      grade: 5,
      no: 123,
      title: " Doortelen en terugtelen met spr...",
      pupils: [
        {
          completed: 3,
          inprogress: 34,
          notstarted: 3
        }
      ]
    },
    {
      id: 201,
      grade: 5,
      id: 201,
      title: "Splitsend vermenigvuldigen (6 x 32 =...)",
      pupils: [
        {
          completed: 3,
          inprogress: 34,
          notstarted: 3
        }
      ]
    },
    {
      id: 123,
      grade: 5,
      no: 124,
      title: " Doortelen en terugtelen met spr...",
      pupils: [
        {
          completed: 3,
          inprogress: 34,
          notstarted: 3
        }
      ]
    }
  ];

  const [selectedGrade, setSelectedGrade] = useState("");

  const mathGrades = allLearningObjs.map(mathGrade => mathGrade.grade);
  console.log(mathGrades);

  const uniqueGrades = [...new Set(mathGrades)];
  console.log(uniqueGrades);

  const learningObjs = allLearningObjs.filter(x => x.grade == selectedGrade);

  console.log("LEARNING OBJS", learningObjs);

  return (
    <div className="main">
      <h1>Learning Objectives Table</h1>
      <select
        className="custom-select"
        onChange={e => {
          setSelectedGrade(e.target.value);
          console.log("TARGET at select", e.target.value);
        }}
      >
        {uniqueGrades.map(uniqueGrade => {
          return (
            <option value={uniqueGrade} key={uniqueGrade}>
              Math Grade {uniqueGrade}
            </option>
          );
        })}
      </select>
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Learning Objective</th>
              <th>Pupils</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {learningObjs.map((learningObj, num) => {
              return (
                <ListDetails
                  key={num}
                  id={learningObj.id}
                  title={learningObj.title}
                  pupils={learningObj.pupils}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
