// Part a
// Function that prints "Data Representation & Querying"
const fuction1 = (myValue)=>{
    console.log("Data Representation & Querying");
}

fuction1();

// Part b
// Function that prints value from user
const function2 = (myValue)=>{
    console.log(myValue);
}

function2("Data Representation & Querying 2");

// Part c
// Function that adds to numbers from user
const function3 = (num1, num2)=>{
    return num1 + num2;
}

console.log(function3(5, 7));

// Part d
const ages = [25, 31, 42, 77];

// Function which returns the number from the map function * 2 if the number was lees than 70
const function4 = (num)=>{

    // Checks if num greater than 70
    if(num < 70)
    {
        return num * 2;
    }
    else
    {
        return num;
    }
}

// Uses map function and calls function 4
console.log(ages.map(function4));