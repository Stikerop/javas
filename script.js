const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
}

// console.lo g(options.name);
//
// delete options.name;
//
// console.log(options);

for (let key in options) {
    console.log(`свойства ${key}, имеет значение ${options[key]}`);
}