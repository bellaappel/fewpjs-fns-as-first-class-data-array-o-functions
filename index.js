const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function wakeDog(dog, breed){
    let string = `Wake ${dog} the ${breed}`
    console.log(string);
    return string;
}

function leashDog(dog, breed){
    let string = `Leash ${dog} the ${breed}`
    console.log(string);
    return string;
}

function walkToPark(dog, breed){
    let string = `Walk to the park with ${dog} the ${breed}`
    console.log(string);
    return string;
}

function throwFrisbee(dog, breed){
    let string = `Throw the frisbee for ${dog} the ${breed}`
    console.log(string);
    return string;
}

function walkHome(dog, breed){
    let string = `Walk home with ${dog} the ${breed}`
    console.log(string);
    return string;
}

function unleashDog(dog, breed){
    let string = `Unleash ${dog} the ${breed}`
    console.log(string);
    return string;
}

function exerciseDog(dogName, dogBreed) {
    let returnArray = []
    for (let i = 0; i < routine.length; i++){
        returnArray.push(routine[i](dogName, dogBreed));
    }
 return returnArray
}
