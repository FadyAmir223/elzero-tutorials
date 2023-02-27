function getPreviousNumbers(a) {
  if (a <= 0) console.log('Negative Numbers & Zero Not Allowed');
  else {
    let s = '', d = a <= 10 ? 1 : 2;
    for (let i = a; i > 0; i-=d) s += i;
    console.log(+s);
  }
}

getPreviousNumbers(0); // "Negative Numbers & Zero Not Allowed"
getPreviousNumbers(-20); // "Negative Numbers & Zero Not Allowed"
getPreviousNumbers(10); // 10987654321
getPreviousNumbers(17); // 17161412108642
