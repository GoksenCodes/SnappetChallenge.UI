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
      title: " Doortelen en terugtelen met spr...",
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
      no: 123,
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

  const [selectedGrade, setSelectedGrade] = useState(5);

  const mathGrades = allLearningObjs.map(mathGrade => mathGrade.grade);
  console.log(mathGrades);

  const uniqueGrades = [...new Set(mathGrades)];
  console.log(uniqueGrades);

  const learningObjs = allLearningObjs.filter(x => x.grade == selectedGrade);

  console.log("LEARNING OBJS", learningObjs);

  return (
    <div className="main">
      <div className="controls">
        <div className="controls__group">
          <ul class="controls__pills">
            <li class="controls__pills__item active">
              <IconBalls />
            </li>
            <li class="controls__pills__item">
              <IconPerson />
            </li>
          </ul>
          <div className="dropdown spacer">
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
