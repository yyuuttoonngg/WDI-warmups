function encrypt(text, n) {
    if (n <= 0 || text === '' || text === null) {
      return text;
    }
  
    const arr = text.split('');
    const head = [],
      tail = [];
  
    let result = '';
  
    for (let i = 0; i < arr.length; i += 2) {
      head.push(arr[i]);
      tail.push(arr[i + 1]);
    }
    result = `${tail.join('')}${head.join('')}`;
    return encrypt(result, --n);
  }
  
  function decrypt(encryptedText, n) {
    return encrypt(encryptedText, n + 2);
  }

  console.log(encrypt("This is a Te", 4))
  console.log(decrypt('iiaeh  TTss ',4))
