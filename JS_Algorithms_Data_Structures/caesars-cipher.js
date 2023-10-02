function rot13(str) {
  let rotStr = '';
  let code = 0;
  let newCode = 0;
  const doNotTransform = /[^A-Z]/g;
  for (let i = 0; i < str.length; i++) {
    code = str.charCodeAt(i);
    newCode = code + 13;
    if (code + 13 > 90) {
      newCode = 64 + 13 - (90 - code);
    } 
    rotStr += doNotTransform.test(str[i]) ? str[i] : String.fromCharCode(newCode);  
  }
  return rotStr;
}

rot13("SERR PBQR PNZC");