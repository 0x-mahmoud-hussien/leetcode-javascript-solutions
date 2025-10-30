
// https://leetcode.com/problems/odd-string-difference
var oddString = function(words) {

    const diffs = words.map(word => {
        const diff = [];
        for (let i = 0; i < word.length - 1; i++) {
            diff.push(word.charCodeAt(i + 1) - word.charCodeAt(i));
        }
        return diff.toString();
    });

    if (diffs[0] === diffs[1]) {
        for (let i = 2; i < diffs.length; i++) {
            if (diffs[i] != diffs[0]) return words[i];
        }
    } else if (diffs[0] === diffs[2]) {
        return words[1];
    } else {
        return words[0];
    }
};
console.log(oddString(["adc","wzy","abc"]));
console.log(oddString(["aaa","bob","ccc","ddd"] ));