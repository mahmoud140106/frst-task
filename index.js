import express from "express";

const app = express();

const students = [
    {
        id: 1,
        name: "student one"
    },
    {
        id: 2,
        name: "student two"
    },
    {
        id: 3,
        name: "student three"
    },
    {
        id: 4,
        name: "student four"
    },
    {
        id: 5,
        name: "student five"
    },
    {
        id: 6,
        name: "student six"
    }
]

const studentsFunction = (req, res) => {
    const title = "<h1>Students Names</h1>";
    let names = "<ol>";
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        names += "<li><a href='/students/" + student.id + "' style='color:#547672;text-decoration:none;'>" + student.name + "</a></li>"
    }
    names += "</ol>";
    res.send(title + names)
};

app.get('/students', studentsFunction)
app.listen(5000);