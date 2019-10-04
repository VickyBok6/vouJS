 

var students = [
    {
        name: "dauda",
        level: 300,
        age: 18,
        gender:"male",
    },
    {
        name: "mark",
        level: 300,
        age: 18,
        gender:"male",
    },
    {
        name: "martins",
        level: 300,
        age: 18,
        gender:"male",
    },
];

var table = document.getElementById("table");
var thead = document.createElement("thead");
var trh = document.createElement("tr");
var th1 = document.createElement("th");
var th2 = document.createElement("th");
var th3 = document.createElement("th");
var th4 = document.createElement("th");

function tableHead(){
    th1.innerHTML = "Name";
    th2.innerHTML = "Level";
    th3.innerHTML = "Age";
    th4.innerHTML = "Gender";
    trh.append(th1, th2, th3, th4);
    thead.append(trh);
    table.appendChild(thead);
}


function mainTable(){
    tableHead();
    students.forEach((student)=>{
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        td1.innerHTML = student.name;
        td1.style.textAlign = "center";
        var td2 = document.createElement('td');
        td2.innerHTML = student.level;
        td2.style.textAlign = "center";
        var td3 = document.createElement('td');
        td3.innerHTML = student.age;
        td3.style.textAlign = "center";
        var td4 = document.createElement('td');
        td4.innerHTML = student.gender;
        td4.style.textAlign = "center";
        tr.append(td1, td2, td3, td4);
        table.appendChild(tr);        
    });
}
mainTable();

var n = document.getElementById("name");
var l = document.getElementById("level");
var a = document.getElementById("age");
var g = document.getElementById("gender");

document.getElementById("btn").addEventListener("click", () => {
    // console.log(name.value, level.value, age.value, gender.vale);
    table.innerHTML = ""; 
    var stud = {
            name: n.value,
            level: l.value,
            age: a.value,
            gender: g.value
    };
    

    students.push(stud);
    console.log(students);
    mainTable();
});