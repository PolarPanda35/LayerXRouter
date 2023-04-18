// C R U D - Create Read Update Delete

// Global
var row = null;
var msg = document.getElementById("msg");

// CREATE
// Submit function
function Submit() {
  var dataEntered = retrieveData();
  var readData = readingDataFromLocalStorage(dataEntered);
  if (dataEntered == false) {
    msg.innerHTML = `<h3 style = "color: red;">Please enter data !</h3>`;
  } else {
    if (row == null) {
      insert(readData);
      msg.innerHTML = `<h3 style = "color: yellow;">Data Inserted !</h3>`;
    } else {
      update();
      msg.innerHTML = `<h3 style = "color: orange;">Data Updated !</h3>`;
    }
  }

  document.getElementById("form").reset();
}

// READ
// Retrieve data
function retrieveData() {
  var name1 = document.getElementById("wallet-address").value;
  var job = document.getElementById("task-link").value;
  var exp = document.getElementById("date").value;

  var arr = [name1, job, exp];
  if (arr.includes("")) {
    return false;
  } else {
    return arr;
  }
}

//Data in Local Storage
function readingDataFromLocalStorage(dataEntered) {
  // Storing data in local storage
  var n = localStorage.setItem("Wallet Address", dataEntered[0]);
  var j = localStorage.setItem("Task Link", dataEntered[1]);
  var e = localStorage.setItem("Date", dataEntered[2]);

  // Show data in table (Getting item from localStorage)
  var n1 = localStorage.getItem("Wallet Address", n);
  var j1 = localStorage.getItem("Task Link", j);
  var e1 = localStorage.getItem("Date", e);

  var arr = [n1, j1, e1];
  return arr;
}

// INSERT
function insert(readData) {
  var table = document.getElementById("table");
  var i = table.rows.length;
  var row = table.insertRow(i);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  // row.insertCell(4).innerHTML = "JJJ"
  cell1.innerHTML = readData[0];
  cell2.innerHTML = readData[1];
  cell3.innerHTML = readData[2];
  }
