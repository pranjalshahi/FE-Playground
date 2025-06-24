function formLargestNumber(arr) {
  if (arr.every(n => n === 0)) {
  return "0"; } 
  else if(arr.length == 1)
  {
    return String(arr[0]);
  }
  else{
  for(let i = 0 ; i < arr.length - 1; i++)
    {
      for(let j =arr.length-1 ; j > i ; j--)
      {
        if(parseInt( String(arr[i]) + String(arr[j])) < parseInt( String(arr[j]) + String(arr[i]))){
          arr[i] = arr[i] + arr[j];
          arr[j] = arr[i] - arr[j];
          arr[i] = arr[i] - arr[j];
        }
      }
    }
    let r = ""
    for(let i= 0 ; i < arr.length; i++)
    {
      r = r + String(arr[i]);
    }
    return r;
  }
}
const input = [3, 30, 34, 5, 9];
formLargestNumber(input);
module.exports = formLargestNumber;
