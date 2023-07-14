let json = {
    "name": "John",
    "age": 22,
    "city": "Chennai",
    "mobileNumber": "2312354679"
  };

  let jsonNumbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//For Loop
for(let i=0;i<jsonNumbers.length;i++){
    console.log(jsonNumbers[i]);
}

//For...in.. Loop
for(let i in jsonNumbers){
    console.log(i," : ",jsonNumbers[i]);
}

for(let i in json){
    console.log(i," : ",json[i]);
}

//For...of.. Loop
for(let i of jsonNumbers){
    console.log(i);
}

// for(let i of json){
//     console.log(i);
// }

//forEach Loop
jsonNumbers.forEach((value)=>{
    console.log("jsonNumbers :",value);
})

// json.forEach((value)=>{
//     console.log("json :",value);
// })