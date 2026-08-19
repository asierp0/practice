let studentName: string = "Aaron";

let student: {
    name: string;
    score: number;
} = {
    name: studentName,
    score: 95,
};

function displayStudent(name: string, score: number): string{
    return `${name} scored ${score}%`;
}

const result = displayStudent(student.name, student.score);

console.log(result);