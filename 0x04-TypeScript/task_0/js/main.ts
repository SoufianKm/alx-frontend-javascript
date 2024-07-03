interface Student {
  firstname: string;
  lastname: string;
  age: number;
  location: string;
  }

const student1: Student = {
  firstname: "Henry",
  lastname: "Kaji",
  age: 23,
  location: "Berlin",
}

const student2: Student = {
  firstname: "Mina",
  lastname: "Ouashki",
  age: 20,
  location: "Tokyo",
  }

const studentsList = [student1, student2];

const table = document.createElement("table");

const headerRow = document.createElement("tr");
const headers = ['Firstname', 'Location'];

headers.forEach((key) => {
  const headerCol = document.createElement("th");
  headerCol.textContent = `${key}`;
  headerRow.appendChild(headerCol);
  //console.log(`${key}`);
});

// Append header to table
table.appendChild(headerRow);

// Table body
studentsList.forEach((student) => {
  const {firstname, location } = student;
  const obj = [firstname, location];
  const bodyRow = document.createElement("tr");

  obj.forEach((row) => {
    const bodyCol = document.createElement("td");
    bodyCol.textContent = `${row}`;
    //console.log(`${row}`);
  });

  table.appendChild(bodyRow);
});
