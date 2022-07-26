const grid = document.getElementById("grid");
const choose = document.getElementById("choose");
const choosed = document.getElementById("choosed");
const elems = document.getElementById("elems");
const cells = document.getElementsByClassName("section");
const main = document.getElementById("main");
const valElem = document.getElementById("value");
const winner = document.getElementById("winner");
const winElem = document.getElementById("win-elem");
const X = '<p id="value">X</p>';
const O = '<p id="value">O</p>';
let arr = ["", "", "", "", "", "", "", "", ""];

const chooseSide = (elem) => {
  main.style.display = "block";
  choosed.style.display = "block";
  choose.style.display = "none";
  elem ? (elems.innerHTML = "X") : (elems.innerHTML = "O");

  for (let i = 0; i < 9; i++) {
    grid.innerHTML += `<div id='${i}' class='section'></div>`;
    Array.from(cells).forEach((cell) => {
      cell.addEventListener(
        "click",
        () => {
          if (elem === true) {
            cell.innerHTML = X;
            elem = false;
            arr[cell.id] = cell.id;
          } else {
            cell.innerHTML = O;
            elem = true;
            arr[cell.id] = cell.id + "-";
          }

          console.log(arr);
          let arr1 = arr.slice(0, 3);
          let arr2 = arr.slice(3, 6);
          let arr3 = arr.slice(6, 9);

          let js = JSON.stringify;
          if (
            js(arr1) === '["0","1","2"]' ||
            js(arr2) === '["3","4","5"]' ||
            js(arr3) === '["6","7","8"]' ||
            js(arr1[0] + arr2[0] + arr3[0]) === '"036"' ||
            js(arr1[1] + arr2[1] + arr3[1]) === '"147"' ||
            js(arr1[2] + arr2[2] + arr3[2]) === '"258"' ||
            js(arr1[0] + arr2[1] + arr3[2]) === '"048"' ||
            js(arr1[2] + arr2[1] + arr3[0]) === '"246"'
          ) {
            grid.style.pointerEvents = "none";
            winElem.innerHTML = "X";
            choosed.style.display = "";
            winner.style.display = "block";
            console.log("WIN!!!");
          }
          if (
            js(arr1) === '["0-","1-","2-"]' ||
            js(arr2) === '["3-","4-","5-"]' ||
            js(arr3) === '["6-","7-","8-"]' ||
            js(arr1[0] + arr2[0] + arr3[0]) === '"0-3-6-"' ||
            js(arr1[1] + arr2[1] + arr3[1]) === '"1-4-7-"' ||
            js(arr1[2] + arr2[2] + arr3[2]) === '"2-5-8-"' ||
            js(arr1[0] + arr2[1] + arr3[2]) === '"0-4-8-"' ||
            js(arr1[2] + arr2[1] + arr3[0]) === '"2-4-6-"'
          ) {
            grid.style.pointerEvents = "none";
            winElem.innerHTML = "O";
            choosed.style.display = "";
            winner.style.display = "block";
            console.log("WIN!!!");
          }
        },
        { once: true }
      );
    });
  }
};

const Restart = () => {
  location.reload();
  winner.style.display = ""; //change faster 
  choosed.style.display = ""; //change faster 
  main.style.display = ""; //change faster 
};
