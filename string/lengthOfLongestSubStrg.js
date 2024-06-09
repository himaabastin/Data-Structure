function lengthOfLongestSubStrg(strg) {
  // count for longest substring
  let longestSubStrgLength = 0;
  // add a set ds
  let set = new Set();
  // two pointers
  let right = 0;
  let left = 0;
  // loop
  // if set dont have value ,add the value to set and update the value of longestSubstrgLength
  // else delete the first value
  while (right < strg.length) {
    const currentLetter = strg[right];
    if (!set.has(currentLetter)) {
      set.add(currentLetter);
      longestSubStrgLength = Math.max(longestSubStrgLength, set.size);
      right++;
    } else {
      set.delete(strg[left]);
      left++;
    }
  }
  return longestSubStrgLength;
}

console.log(lengthOfLongestSubStrg("abcabcabcdccdd"));
