let chars;
chars = ["A", "B", "C", "D", "E", 10, 15, 6];
['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
fn(chars);

chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
fn(chars);

chars = ["Z", "Y", "A", "D", "E", 10, 1];
["Z", "Y", "Z", "Y", "A", "D", "E"]
fn(chars);

function fn (chars) {
  for (let i = 0; i < chars.length; i++)
    if (typeof chars[i] === 'number')
        chars.unshift(...chars.splice(i, 1));

  let letter_idx = chars.findIndex(i => typeof i == 'string');
  chars.copyWithin(0, letter_idx, letter_idx * 2);

  console.log(chars);
}
