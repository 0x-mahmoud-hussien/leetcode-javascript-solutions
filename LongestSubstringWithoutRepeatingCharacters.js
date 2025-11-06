
// https://leetcode.com/problems/longest-substring-without-repeating-characters?envType=problem-list-v2&envId=hash-table
var lengthOfLongestSubstring = function(s) {
    let seen = new Set();
    let left = 0;
    let maxLength = 0;

    for(let right = 0; right < s.length; right++) {
        while(seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }
        seen.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));