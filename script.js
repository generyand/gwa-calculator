"use strict";

const tbody = document.querySelector("tbody");
const addRowBtn = document.querySelector("#add-row-btn");
const removeRowBtn = document.querySelector("#remove-row-btn");
const clearBtn = document.querySelector("#clear-btn");
const calcBtn = document.querySelector("#calculate-gwa-btn");

/* Add Row */
addRowBtn.addEventListener("click", () => {
  const tableRows = document.querySelectorAll("tbody > tr");
  const table = document.getElementById("table");
  const row = table.insertRow();
  row.setAttribute("id", `subject-${tableRows.length + 1}`);
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();
  cell1.innerHTML = `<input placeholder="Subject ${
    tableRows.length + 1
  }" type="text">`;
  cell2.innerHTML = '<input type="number">';
  cell3.innerHTML = '<input type="number">';
});

/* Remove Row */
removeRowBtn.addEventListener("click", () => {
  const tableRows = document.querySelectorAll("tbody > tr");
  const lastChild = tableRows[tableRows.length - 1];

  if (tableRows.length != 1) tbody.removeChild(lastChild);
});

/* Clear Button */ /* THIS IS NOT WORKING! */
clearBtn.addEventListener("click", () => {
  const tableRows = document.querySelectorAll("tbody > *");
  for (let i = 1; i <= tableRows.length; i++) {
    document.querySelector(`#subject-${i} > td:nth-child(1) > input`).value =
      "";
    document.querySelector(`#subject-${i} > td:nth-child(2) > input`).value =
      "";
    document.querySelector(`#subject-${i} > td:nth-child(3) > input`).value =
      "";
  }
});

/* Calculate GWA */
calcBtn.addEventListener("click", () => {
  let subjects = [];
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

  const overAllTotalGrade = subjects.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.gradeTotal;
  }, 0);

  const totalUnits = subjects.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.units;
  }, 0);

  const gwa = (overAllTotalGrade / totalUnits).toFixed(2);

  if (gwa === "NaN") {
    alert("Please input No. of Units and Grade.");
  } else {
    document.querySelector(".gwa").innerText = `GWA: ${gwa}`;
  }
});

/* Himo og object na naay subject.name, subject.units, subject.grade. Every tr should be looped. */
/* Then i push sya sa subjects na array */

/* Your way of adding a subject should be through appendchild */

/* Add a remove and clear button */
/* When the user clicks the remove button, it removes the last row */
/* When the user clicks the clear button, it clears all the inputs */
