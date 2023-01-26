fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
    .then((response) => response.json())
    .then((data) => {

        let gradeHigherThanThree = data.filter(x => x.averageGrade > 3);  //All students with an average grade higher than 3
        console.log(gradeHigherThanThree);

        let femaleGradeHigherThanThree = data.filter
            (x => x.averageGrade > 3 && x.gender === "Female")  // All female student names with an average grade of 5
        console.log(femaleGradeHigherThanThree);

        let maleStudentSkopje = data.filter
            (x => x.age > 18 && x.city === "Skopje" && x.gender === "Male")  // All male student full names who live in Skopje and are over 18 years old
        console.log(maleStudentSkopje);

        let gradesOfFemaleStudents = data.filter(x => x.age > 24 && x.gender === "Female")
            .map(x => x.averageGrade)

        let averageGradesOfFemaleStudents = gradesOfFemaleStudents.reduce // The average grades of all female students over the age of 24
            ((a, b) => a + b, 0 / gradesOfFemaleStudents.length)

        console.log("Average Grades of Females Over 24 is : " + averageGradesOfFemaleStudents);

        let maleStudentLetterB = data.filter(x => x.firstName[0] === "B" && x.averageGrade > 2) // All male students with a name starting with B and average grade over 2
        console.log(maleStudentLetterB);
    })



