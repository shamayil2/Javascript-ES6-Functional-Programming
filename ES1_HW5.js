const data = [
    { name: "Rahul", rollNo: 101, hindi: 80, english: 75, maths: 90 },
    { name: "Amit", rollNo: 102, hindi: 85, english: 70, maths: 95 },
    { name: "Priya", rollNo: 103, hindi: 78, english: 92, maths: 87 },
]

const marksForComputer = [88, 92, 95]

for (let i = 0; i < data.length; i++) {

    data[i].marksForComputer = marksForComputer[i]
}

for (let student of data) {
    console.log("Name ", student.name, " roll ", student.rollNo, " Hindi ", student.hindi, " English ", student.english,
        " Maths ", student.maths, " Computer", student.marksForComputer)
}

const marksForScience = [82, 90, 88]

for (let i = 0; i < data.length; i++) {
    data[i].marksForScience = marksForScience[i]
}

for (let student of data) {
    console.log("Name ", student.name, " roll ", student.rollNo, " Hindi ", student.hindi, " English ", student.english,
        " Maths ", student.maths, " Computer", student.marksForComputer, " Science", student.marksForScience)
}

const kaveriObj = { name: "Kaveri", rollNo: 104, hindi: 84, english: 88, maths: 78, marksForComputer: 90, marksForScience: 86 }
console.log(kaveriObj)

data.push(kaveriObj)
for (let student of data) {
    console.log("Name ", student.name, " roll ", student.rollNo, " Hindi ", student.hindi, " English ", student.english,
        " Maths ", student.maths, " Computer", student.marksForComputer, " Science", student.marksForScience)
}

for (let student of data) {
    let totalMarks = student.hindi + student.english + student.maths + student.marksForComputer + student.marksForScience
    student.totalMarks = totalMarks

}

for (let student of data) {
    let avgMarks = student.totalMarks / 5
    student.avgMarks = avgMarks
}

console.log(data)

for (let student of data) {

    if (student.avgMarks >= 90) {
        student.grade = 'A'
    } else if (student.avgMarks >= 80) {
        student.grade = 'B'
    } else if (student.avgMarks >= 70) {
        student.grade = 'C'
    } else if (student.avgMarks >= 60) {
        student.grade = 'D'
    } else if (student.avgMarks >= 50) {
        student.grade = 'E'
    } else {
        student.grade = 'F'
    }

}

console.log(data)