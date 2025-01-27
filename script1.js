let nickname = "Lara";
let heightInInches = 57;
let weightinkg = 33;

let heightinfeet = Math.floor(heightInInches / 12);
let heightremainder = heightInInches % 12;
let weightinlbs = weightinkg * 2.20462;

alert(`Name: ${nickname}\nHeight: ${heightinfeet}' ${heightremainder}"\nWeight: ${weightinlbs.toFixed(3)} lbs`);