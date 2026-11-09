const palindromes = function (swap) {
const cleaned = swap
.toLowerCase()
.replace(/[^a-z0-9]/g, "");
const separated = cleaned.split("");
const reversed = separated.reverse();
const merge = reversed.join("");
return cleaned === merge
};

// Do not edit below this line
module.exports = palindromes;
