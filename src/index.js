module.exports = function check(str, bracketsConfig) {
  str = str.split('');

  if (str.length%2!=0) return false; // количество скобок должно быть чётным
  
  // ищем рядом стоящие парные скобки и удаляем их из массива
  
  var old_len;
  
  while (str.length>0)
  {
  old_len = str.length;
  
  for(let i=0; i<str.length; i++)
  for (let j=0; j<bracketsConfig.length; j++)
  if (str[i]==bracketsConfig[j][0] && str[i+1]==bracketsConfig[j][1])
  str.splice(i,2);
  
  if (old_len == str.length) return false;
  
  }
  
  return true;
  
  };