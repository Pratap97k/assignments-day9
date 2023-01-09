var jsonObj = {
    id: 9,
    'fname': 'Pratap',
    lname: 'Kenjale'
};
// 1 dot operator
// 2 Square operator
// 1 dot operator
console.log("\n         ID         :: ".concat(jsonObj.id, "\n         First Name :: ").concat(jsonObj.fname, "\n         Last Name  :: ").concat(jsonObj.lname, "\n    "));
// 2 Square operator
console.log("\n ======= Using Square Operator==========\n ID         :: ".concat(jsonObj["id"], "\n First Name :: ").concat(jsonObj["fname"], "\nLast Name  :: ").concat(jsonObj['lname'], "\n "));
//Array of Object / multidimensional array 
var arrobj = [
    {
        id: 9,
        "fname": "Pratap",
        lname: 'kenjale',
        country: {
            cid: 1,
            cname: "India"
        },
        month: ["Jan", "March", "Dec"],
        result: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 45
            },
            {
                subj: "M3",
                marks: 55
            }
        ]
    },
    {
        id: 3,
        "fname": "Siya",
        lname: 'deshmukh',
        country: {
            cid: 2,
            cname: "US"
        },
        month: ["Feb", "Aprl", "July"],
        result: [
            {
                subj: "M1",
                marks: 50
            },
            {
                subj: "M2",
                marks: 60
            },
            {
                subj: "M3",
                marks: 85
            }
        ]
    },
    {
        id: 6,
        "fname": "Mayur",
        lname: 'dada',
        country: {
            cid: 3,
            cname: "Japan"
        },
        month: ["May", "Aug", "Sept"],
        result: [
            {
                subj: "M1",
                marks: 60
            },
            {
                subj: "M2",
                marks: 65
            },
            {
                subj: "M3",
                marks: 75
            }
        ]
    }
];
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n    ID         :: ".concat(arrobj[i]["id"], "\n    First Name :: ").concat(arrobj[i]["fname"], "\n   Last Name  :: ").concat(arrobj[i]['lname'], "\n        Coutry Name:: ").concat(arrobj[i].country.cname, "\n        Month      :: ").concat(arrobj[i].month.join(" "), "\n        \n        ========Result=================\n    "));
    // for(let j=0;j<arrobj[i].result.length;j++){
    //     console.log(`
    //             Subject ::${arrobj[i].result[j].subj}
    //             Marks   ::${arrobj[i].result[j].marks}
    //     `)
    // }
    arrobj[i].result.forEach(function (myvalue) {
        console.log("\n                    Subject :: ".concat(myvalue.subj, "\n                    Marks   :: ").concat(myvalue.marks, "\n            "));
    });
}
