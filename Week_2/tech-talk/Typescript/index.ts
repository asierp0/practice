
// any vs unknown

let value: unknown = 2;

// value++;
// value.toUpperCase();

if(typeof value === 'number'){
    value++
    console.log(value);
}

if(typeof value === 'string'){
    value.toUpperCase();
    console.log(value);
}