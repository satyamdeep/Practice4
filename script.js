//Objective

//For a given array with marks of students -> [85,97,44,37,76,60]. Find the average marks of the entire class

const marks = [85,97,44,37,76,60];
sum =0
for (let mark of marks){
    sum= sum + mark
}
console.log(`Total number of student is ${marks.length}`);
let avg= sum/marks.length
console.log(`The sum of total marks is:${sum} and average score of the class is: ${avg}.`);