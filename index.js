var UJHubStudents =[

    {
        name: "Bok Victoria",
        age: 24,
        tribe: "Berom",
        sex: "female",
        address: "back of forestry bauchi road",
        department: "computer science",
        height: 1.65,
        grade: [63,49,51,55,71]
    },
    {
        name: "Josephine",
        age: 21,
        tribe: "Egon",
        sex: "female",
        address: "ringroad",
        department: "computer science",
        height: 1.65,
        grade: [73,74,89,88,70]
    },
    {
        name: "Maryam Mabas",
        age: 24,
        tribe: "Challa",
        sex: "female",
        address: "PTS Jos",
        department: "computer science",
        height: 1.65,
        grade: [33,74,78,98,71]
    },
    {
        name: "joy ohue",
        age: 22,
        tribe: "Esan",
        sex: "female",
        address: "ringroad",
        department: "computer science",
        height: 1.68,
        grade: [64,71,55,88,59]
    },
    {
        name: "gift",
        age: 22,
        tribe: "Igala",
        sex: "female",
        address: "three container",
        department: "computer science",
        height: 1.68,
        grade: [673,74,79,82,71]
    },
    {
        name: "Stephen Nanret",
        age: 22,
        tribe: "Mwagavul",
        sex: "female",
        address: "ringroad",
        department: "computer science",
        height: 1.50,
        grade: [69,74,58,82,70]
    },
    {
        name: "Oyikali Oluwatosi Alice",
        age: 24,
        tribe: "Yoruba",
        sex: "female",
        address: "Faringada",
        department: "computer science",
        height: 1.65,
        grade: [63,74,54,83,71]
    },
    {
        name: "Bamigboye Christiana Temitope",
        age: 25,
        tribe: "Yoruba",
        sex: "female",
        address: "Nasarawa Gwom",
        department: "computer science",
        height: 1.7,
        grade: [43,94,100,87,31]
    },
    {
        name: "Susan Owoicho",
        age: 30,
        tribe: "Idoma",
        sex: "female",
        address: "Faringada",
        department: "computer science",
        height: 1.67,
        grade: [69,79,49,85,77]
    },
    {
        name: "Ibedu Ifeoma",
        age: 25,
        tribe: "Igbo",
        sex: "female",
        address: "Dogon Dutse",
        department: "computer science",
        height: 1.67,
        grade: [60,70,89,80,61]
    },
    {
        name: "Elizabeth Emmanuel",
        age: 25,
        tribe: "Ibibio",
        sex: "female",
        address: "Faringada",
        department: "computer science",
        height: 1.50,
        grade: [63,79,55,88,74]
    },
    {
        name: "Yohanna yness",
        age: 26,
        tribe: "jarawa",
        sex: "male",
        address: "Angwa Rukuba",
        department: "computer science",
        height: 1.69,
        grade: [63,74,59,88,71]
    },
    {
        name: "Kaslong Kevin S",
        age: 13,
        tribe: "Goemai",
        sex: "male",
        address: "tudun wada",
        department: "computer science",
        height: 1.7,
        grade: [69,22,96,84,100]
    },
    {
        name: "Yada Martins.T",
        age: 24,
        tribe: "Kagoro",
        sex: "male",
        address: "Bauchi",
        department: "computer science",
        height: 1.7,
        grade: [69,43,98,84,68]
    },
    {
        name: "Adams Mark Oche",
        age: 16,
        tribe: "Idoma",
        sex: "male",
        address: "Jos Nigeria",
        department: "computer science",
        height: 1.7,
        grade: [67,44,91,66,90]
    },
    {
        name: "Nanbal Kundam Moses",
        age: 25,
        tribe: "mupul",
        sex: "male",
        address: "Ringroad",
        department: "computer science",
        height: 1.65,
        grade: [63,45,99,88,70]
    },
    {
        name: "Uzaifa Ibrahim",
        age: 23,
        tribe: "Mwaguvul",
        sex: "male",
        address: "jos nigeria",
        department: "computer science",
        height: 1.65,
        grade: [43,67,88,99,100],
    },
    ]
    //get maximun height of the person
    var b =0;
    var Class = UJHubStudents.filter(function(values) {
        if (b < values.height){
            b = values.height;
        }
    });
    
    var result = UJHubStudents.filter(function(data) {
        if (data.height ==c) {
            
            return data;
        }
    });
    
    console.log(result)
    function avg(arr){
        var number =0;
    for (var index =0; index < arr.length; index++) {
        num = num + arr[index]
        }
    return number/arr.length;
    }
    
    var b = 0;
    var f;
    UJHubStudents.forEach(function(item, index, date) {
        
        if (n < avg(item.grade)){
            n = avg(item.grade);
            v = index;
            //console.log(data[index]);
        }
           });
           console.log(UJHubStudnts[v]);
    
    
    
    
    