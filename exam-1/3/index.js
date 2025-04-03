/**  
  Please write down a function is used to create an array of unique values. 
  Example: 
  let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1,  3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1]; 
  output: [1, 5, 2, 3, 4, 7, 8, 9, 0, 6] 
**/

let items = [1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1,  3, 2, 6, 7, 5, 4, 4, 7, 8, 8, 0, 1, 2, 3, 1]; 
function getUniqueNumber (items) {
  const set = new Set(items);
  const uniqueItems = [...set];
  return uniqueItems;
}
console.log(getUniqueNumber(items));