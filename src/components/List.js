import React, { useState } from "react";
import ListDetails from "./ListDetails";
import balls from "../assets/icons/balls.svg";
import person from "../assets/icons/person.svg";

export default function List() {
  const allLearningObjs = [
    {
      id: 101,
      grade: 3,
      no: 101,
      title: "Whole Number: Addition & Subtraction",
      pupils: [
        {
          completed: 16,
          inprogress: 20,
          notstarted: 4
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
          completed: 6,
          inprogress: 31,
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
          completed: 5,
          inprogress: 34,
          notstarted: 1
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
      no: 201,
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
          completed: 10,
          inprogress: 25,
          notstarted: 5
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
      <div className="controls">
        <ul class="controls__pills">
          <li class="controls__pills__item active">
            <img
              className="controls__pills__item__icon"
              src={balls}
              alt="connected-balls-icon"
            />
          </li>
          <li class="controls__pills__item">
            <img
              className="controls__pills__item__icon"
              src={person}
              alt="person-icon"
            />
          </li>
        </ul>
        <div className="dropdown">
          <select
            className="dropdown__custom-select"
            onChange={e => {
              setSelectedGrade(e.target.value);
              console.log("TARGET at select", e.target.value);
            }}
          >
            {uniqueGrades.map(uniqueGrade => {
              return (
                <option value={uniqueGrade} key={uniqueGrade} selected>
                  Math Grade {uniqueGrade}
                </option>
              );
            })}
          </select>
        </div>
        <button className="btn__primary">Add learning objective</button>
        <button className="btn__warning">Automatic update</button>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th className="table__title">Learning Objective</th>
              <th className="table__pupil">Pupils</th>
              <th className="table__button"></th>
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
