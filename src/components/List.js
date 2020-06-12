import React, { useState } from "react";
import ListDetails from "./ListDetails";
import { ReactComponent as IconBalls } from "../assets/icons/balls.svg";
import { ReactComponent as IconPerson } from "../assets/icons/person.svg";
import { ReactComponent as IconPlus } from "../assets/icons/plus.svg";
import { ReactComponent as IconRefresh } from "../assets/icons/refresh.svg";
import { ReactComponent as IconDown } from "../assets/icons/down.svg";

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
      title: " Doortelen en terugtelen met sprongen van 3 of meer dan",
      pupils: [
        {
          completed: 16,
          inprogress: 24,
          notstarted: 0
        }
      ]
    },
    {
      id: 201,
      grade: 5,
      no: 201,
      title: "Splitsend vermenigvuldigen (6 x 32 = 6837) En nog meer rek",
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
      title: " Doortelen en terugtelen met sprongen meer dan 1,2,4 en 6",
      pupils: [
        {
          completed: 3,
          inprogress: 34,
          notstarted: 3
        }
      ]
    }
  ];

  const [selectedGrade, setSelectedGrade] = useState(5);

  const mathGrades = allLearningObjs.map(mathGrade => mathGrade.grade);

  const uniqueGrades = [...new Set(mathGrades)];

  const sortedUniqueGrades = uniqueGrades.sort();

  const numberSelectedGrade = parseInt(selectedGrade);

  const learningObjs = allLearningObjs.filter(
    x => x.grade === numberSelectedGrade
  );
  // console.log(
  //   "SELECTED GRADE",
  //   typeof selectedGrade,
  //   typeof numberSelectedGrade
  // );

  return (
    <div className="main">
      <div className="controls">
        <div className="controls__group">
          <ul className="controls__pills">
            <li className="controls__pills__item active">
              <IconBalls />
            </li>
            <li className="controls__pills__item">
              <IconPerson />
            </li>
          </ul>
          <div className="dropdown spacer">
            <select
              defaultValue={5}
              className="dropdown__custom-select"
              onChange={e => {
                setSelectedGrade(e.target.value);
              }}
            >
              {sortedUniqueGrades.map(uniqueGrade => {
                return (
                  <option value={uniqueGrade} key={uniqueGrade}>
                    Math Grade {uniqueGrade}
                  </option>
                );
              })}
            </select>
            <IconDown />
          </div>
        </div>
        <div className="controls__group">
          <button className="btn btn__primary">
            Add learning objective
            <IconPlus />
          </button>
          <button className="btn btn__warning spacer">
            Automatic update
            <IconRefresh />
          </button>
        </div>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th className="table__title">
                Learning Objective
                <IconDown />
              </th>
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
