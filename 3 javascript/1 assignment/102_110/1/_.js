let res = prompt('Print Number From – To', 'Example: 5-20').split('-')

for (i = Math.min.apply(null, res);
     i <= Math.max.apply(null, res);
     i++) console.log(i);
