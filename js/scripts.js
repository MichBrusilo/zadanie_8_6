// instrukcje warunkowe w praktyce
var a = -3;
var b = 65;
var value;

value = (a * a) - (2 * a * b) + (b * b);

console.log(value);

if (value >0) {
	console.log("wynik dodatni");
} else if (value <0) {
	console.log("Wynik ujemny");
}
else {
	console.log("Wynik wynosi zero");
}