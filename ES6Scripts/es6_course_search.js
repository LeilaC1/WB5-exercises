"use strict";

let courses = [
 {
 CourseId: "PROG100",
 Title: "Introduction to HTML/CSS/Git",
 Location: "Classroom 7",
 StartDate: "09/08/22",
 Fee: "100.00",
 },
 {
 CourseId: "PROG200",
 Title: "Introduction to JavaScript",
 Location: "Classroom 9",
 StartDate: "11/22/22",
 Fee: "350.00",
 },
 {
 CourseId: "PROG300",
 Title: "Introduction to Java",
 Location: "Classroom 1",
 StartDate: "01/09/23",
 Fee: "50.00",
 },
 {
 CourseId: "PROG400",
 Title: "Introduction to SQL and Databases",
 Location: "Classroom 7",
 StartDate: "03/16/23",
 Fee: "50.00",
 },
 {
 CourseId: "PROJ500",
 Title: "Introduction to Angular",
 Location: "Classroom 1",
 StartDate: "04/25/23",
 Fee: "50.00",
 }
];

// When does the PROG200 course start?
function progStart(course){
    if (course.CourseId == "PROG200") {
        return true;
    }
}

let start = courses.find(progStart);
console.log(start.StartDate);

// What is the title of the PROJ500 course?
function projTitle(course){
    if (course.CourseId == "PROJ500") {
        return true;
    }
}
let courseTitle = courses.find(projTitle);
console.log(courseTitle.Title);

// What are the titles of the courses that cost $50 or less?
function inexpensiveCourses(course){
    if (course.Fee <= 50) {
        return true;
    }
}

let inexpensive = courses.filter(inexpensiveCourses);
//if (inexpensive.length > 0){
   // for (let i = 0; i < inexpensive.length; i++)
   // console.log(inexpensive[i].Title)
//}
if (inexpensive.length > 0){
    inexpensive.forEach(course =>{
        console.log(course.Title);
    });
}
// What classes meet in "Classroom 1"?
function classLocation(course){
    if (course.Location == "Classroom 1") {
        return true;
    }
}

let location = courses.filter(classLocation);
if (location.length > 0){
    for (let i = 0; i < location.length; i++)
    console.log(location[i].Title)
 }

