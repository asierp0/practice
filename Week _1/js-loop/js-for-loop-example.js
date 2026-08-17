
const arr = [3, 5, 7 ,11 , 10, 13, 32, 17, 19, 202];

function findLargestEven(arr){

    let largestEven = -Number.MAX_VALUE;

    for(let i = 0; i < arr.length; i++){

        if(arr[i] % 2 == 0 && arr[i] > largestEven){
            largestEven = arr[i];
        }
    }
    return largestEven;
}

let largestEvenNum = findLargestEven(arr);

if(largestEvenNum == -Number.MAX_VALUE){
    console.log("There are not even numbers in the array.")
}
else{
    console.log(`${largestEvenNum}`);
}

