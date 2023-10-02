function palindrome(str) {
  const regex = /[a-z0-9]/g;
  const chars = str.toLowerCase().match(regex);
  const reversed = chars.toReversed();
  return chars.join('') === reversed.join('');
}

palindrome("eye");

