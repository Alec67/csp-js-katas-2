/* RANDOM STUDENTS KATA:  */

// Who will be gatekeeper and keymaster today?

/* Function Main()
 * Display random gatekeeper name and keymaster name for this kata
 * @param = none
 * @return = none
 */
function main(){
 // Initialize count as prompt asking how many students there are.
 let count = prompt("How many students are there?");
 // Initialize array students equal to addStudents with argument count
 let students = addStudents(count);
 // Initialize gateKeeper = randStudent(students), the name of a random student in the list
 let gateKeeper = randStudent(students);
 // Initialize keyMaster = randNewStudent(students, gateKeeper), name of a different random student
 let keyMaster = randNewStudent(students, gateKeeper);
 // Display gatekeeper name and keymaster name for this kata
 alert(gateKeeper + " is the gate keeper and " + keyMaster + " is the key master.");
}
/* Function addStudents(count) 
 * Enters a set number of students to an array.
 * @param = count {integer}
 * @return = students {array}
 */
function addStudents(count){
 // Initialize an empty array called students. 
 let students = [];
 // Define for loop to run count times starting at 1
 for(var i = 0; i < count; i++){
    students.push(prompt("Student " + i + ":"))
 }
 return students;
}
 // Push each student name into the array via user input ("student 1:")
 // End the loop
 // Return the students array

/* Function randStudent(students)
 * This picks a random student from an array. 
 * @param = students {array}
 * @return = gateKeeper {string}
 */
function randStudent(students){
 // Initialize student as a random number, 0 to < length of students array.
 let student = Math.random(0, students.length - 1);
 // Initialize gateKeeper as the element in students array at that random index.
 // Return gateKeeper
}
/* Function randNewStudent(students, gateKeeper) 
 * This picks a student who was not already picked. 
 * @param = students {array}, gateKeeper {string}
 * @return = keyMaster {string}
 */
 // Define keyMaster;
 // Define student
 // Initialize picked as false
 // Define loop, run while picked equals false
 // Set student as random index number, 0 to < length of students array.
 // Set keyMaster as element in students array at random index student
 // If keyMaster is not equal to gateKeeper, set picked equal to true
 // End the while loop.
 // Return keyMaster


