a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'], c = '#';
for (let i = 0; i < 6; i++) c += a[Math.floor(Math.random() * a.length)];
document.body.style.backgroundColor = c;
