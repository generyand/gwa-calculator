"use strict";

const tbody = document.querySelector("tbody");
const addRowBtn = document.querySelector("#add-row-btn");
const calcBtn = document.querySelector("#calculate-gwa-btn");

addRowBtn.addEventListener("click", () => {
  const tableRows = document.querySelectorAll("tbody > *");
  const table = document.getElementById("table");
  const row = table.insertRow();
  row.setAttribute("id", `subject-${tableRows.length + 1}`);
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();
  cell1.innerHTML = `<input placeholder="Subject ${
    tableRows.length + 1
  }" type="text">`;
  cell2.innerHTML = '<input type="number" required>';
  cell3.innerHTML = '<input type="number" required>';
});

calcBtn.addEventListener("click", () => {
  let subjects = [];
  let totalUnits = 0;
  let overAllTotalGrade = 0;
  const tableRows = document.querySelectorAll("tbody > *");

  for (let i = 1; i <= tableRows.length; i++) {
    const subName = document.querySelector(
      `#subject-${i} > td:nth-child(1) > input`
    ).value;
    const subUnits = Number(
      document.querySelector(`#subject-${i} > td:nth-child(2) > input`).value
    );
    const subGrade = Number(
      document.querySelector(`#subject-${i} > td:nth-child(3) > input`).value
    );

    const subject = {
      name: subName,
      units: subUnits,
      grade: subGrade,
      gradeTotal: subUnits * subGrade,
    };
    subjects.push(subject);
  }

  overAllTotalGrade = subjects.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.gradeTotal;
  }, 0);

  totalUnits = subjects.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.units;
  }, 0);

  const gwa = (overAllTotalGrade / totalUnits).toFixed(2);
  console.log(overAllTotalGrade);
  console.log(totalUnits);

  document.querySelector(".gwa").innerText = `GWA: ${gwa}`;

  console.table(subjects);
});

/* Himo og object na naay subject.name, subject.units, subject.grade. Every tr should be looped. */
/* Then i push sya sa subjects na array */

/* Your way of adding a subject should be through appendchild */
