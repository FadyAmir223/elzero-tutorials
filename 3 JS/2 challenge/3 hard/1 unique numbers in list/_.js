function fn(a) {
  a = a.filter(i => { return typeof i !== 'string' })
       .map(i => { return Math.floor((+i)) })
       .sort((x, y) => { return y - x })
       .filter((i, idx, arr) => { return i !== arr[idx + 1] })

  if (a.length % 2 == 1)
    a.forEach(i => console.log(i));
  else
    for (let i = 0; i < a.length / 2; i++)
      i == (a.length / 2) - 1 
      ? console.log(a[i] * a[i + 1]) 
      : console.log(a[i] + a[a.length - 1 - i]);
}

let numbers1 = [15.60, 2, 2, 2, 4, 5, true, true, 7, "A", 2, false, 2, 8, 9];
fn(numbers1);
// Output
// 15
// 9
// 8
// 7
// 5
// 4
// 2
// 1
// 0

console.log('#'.repeat(10));

let numbers2 = [15.60, 2, 2, 2, 4, 5, true, true, 7, "A", 2, false, 2, 3, 8, 9];
fn(numbers2);
// Output
// 15
// 10
// 10
// 10
// 20