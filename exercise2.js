let myArray = [];

// Adds element to array, prints message, and returns length of array
const addTask = (task)=>{
    myArray.push(task);
    console.log("Element \"" + task + "\" added to array");
    return myArray.length;
}

// Lists all elements in array
const listTask = ()=>{
    
    // Checks if array is empty
    if(myArray.length > 0)
    {
		// Loops theough array and prints each element
        for(let i = 0; i < myArray.length; i++)
        {
            console.log(myArray[i]);
        }
    }
    else // Prints message if the array was empty
    {
        console.log("There are no elements in the array");
    }

}

// Deletes element from array if element is in the array and array size > 0, prints message telling if the deletion was succsessful, and returns length of array
const deleteTask = (task)=>{

    let arrayLength = myArray.length;
    let found = 0; // If the users value is in the array found is 1, otherwise it is false

    // Checks if array is empty
    if(arrayLength > 0)
    {   
        // Searches for users value
        for(i = 0; i < arrayLength; i++)
        {
            // Removes users value if it is in the array
            if(myArray[i] == task)
            {
                console.log("Element \"" + myArray.splice(i, 1) + "\" deleted from array");
                found = 1;
                break;
            }
        }

        // Prints message if the users value was not in the array
        if(found == 0)
        {
            console.log("Element \"" + task + "\" not in array");
        }
        
    }
    else    // Prints message if the array was empty
    {
        console.log("Array is empty");
    }

    return myArray.length;
}

arrayNumberElementsMessage = "Current number of elements in array: ";
arrayElementsMessage = "Current elements in array:"

// List all elements in the array
console.log(arrayElementsMessage);
listTask()
console.log("\n");

// Add three elements to the array
console.log(arrayNumberElementsMessage + addTask("abc"));
console.log("\n");
console.log(arrayNumberElementsMessage + addTask("def"));
console.log("\n");
console.log(arrayNumberElementsMessage + addTask("ghi"));
console.log("\n");

// List all elements in the array
console.log(arrayElementsMessage);
listTask()
console.log("\n");

// Delete element that does not exist from the array
console.log(arrayNumberElementsMessage + deleteTask("123"));
console.log("\n");

// Delete element from the array
console.log(arrayNumberElementsMessage + deleteTask("def"));
console.log("\n");

// List all elements in the array
console.log(arrayElementsMessage);
listTask()
