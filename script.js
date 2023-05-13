/** @format */

let arr = [
  { id: 1, name: 'john', age: '18', marks: 80 },
  { id: 2, name: 'jack', age: '20', marks: 85 },
  { id: 3, name: 'karen', age: '19', marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log

  const passedStudents = arr.map((student) => {
    if (student.marks > 50) {
      return student;
    }
  });

  console.log(passedStudents);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((student) => {
    if (student.marks > 50) {
      console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const val = { id: 4, name: 'Susan', age: '20', marks: 45 };
  arr.push(val);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].marks < 50) {
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log

  let arr2 = [
    { id: 5, name: 'Adil', age: '19', marks: 91 },
    { id: 6, name: 'Shyam', age: '18', marks: 93 },
    { id: 7, name: 'Rahul', age: '20', marks: 95 },
  ];
  const concatenateArray = arr.concat(arr2);
  console.log(concatenateArray);
}
