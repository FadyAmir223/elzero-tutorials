function multiply (...x) {
    let res = 1;
    for (i of x)
        if (typeof i == 'number')
            res *= parseInt(i);
    console.log(res);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000