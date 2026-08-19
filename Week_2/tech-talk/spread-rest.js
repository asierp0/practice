
//spread unpacks

const hobbies = ["reading", "camping", "hiking", "fishing"];

const hobbiesCopy = [...hobbies];

console.log("=======SPREAD OPERATIONS=======\n");
console.log(`\nhobbies - ${hobbies}\n`);
console.log(`hobbiesCopy - ${hobbiesCopy}\n`);

const combinedHobbies = [...hobbiesCopy, ...hobbies];

const hobbiesPlusOne = [...hobbies, "gambling"];

console.log(`combinedHobbies - ${combinedHobbies}\n`);
console.log(`hobbiesPlusOne - ${hobbiesPlusOne}\n`);

//rest packs or collects

const [firstHobby, ...remainingHobbies] = hobbies;

console.log("======= REST OPERATIONS =======\n")
console.log(`firstHobby - ${firstHobby}\n`);
console.log(`remainingHobbies - ${remainingHobbies}\n`);

function printNumbers(...numbers){
    console.log(numbers);
}

printNumbers(1, 4, 6, 0, 11);