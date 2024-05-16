for (let count = 0; count < 101; count++) {

    if (count % 5 == 0 && count % 3 != 0) {
        console.log("BUZZ");
    }
    else if (count % 5 == 0 && count % 3 == 0) {
        console.log("FIZZBUZZ");
    }
    else if (count % 3 == 0) {
        console.log("FIZZ");
    }
    else {
        console.log(count);
    }
}