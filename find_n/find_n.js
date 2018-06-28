// Your task is to construct a building which will be a pile of n cubes. 
// The cube at the bottom will have a volume of n^3, the cube above will 
// have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you 
// find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb) will 
// be an integer m and you have to return the integer n such as 
// n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if 
// there is no such n.

function find_n(m) {
  let volume = 0;
  let counter = 0;
  while (volume < m){
    counter++;
    volume += counter * counter * counter;
  }
  return volume === m ? counter : -1;
}

module.exports.find_n = find_n;

console.log(find_n(4183059834009), 2022);
console.log(find_n(24723578342962), -1);
console.log(find_n(135440716410000), 4824);
console.log(find_n(40539911473216), 3568);
console.log(find_n(26825883955641), 3218);