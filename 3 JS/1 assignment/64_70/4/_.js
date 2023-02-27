function specialMix(...data) {
  // Your Code Here
  let res = 0, strCtr = 0;
  for (let i of data)
    if (/^\d/.test(i))	// if number or string start with number
      res += parseInt(i);
		else
			strCtr++;

	if (strCtr == data.length)
    return 'All Is Strings'
  return res;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
