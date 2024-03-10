// Write a programe to pick missing spaces 
// array = [ 0,1,0,1,0,0,0,0,1,1,0 ]
function findSpaces() {
    let numbers = [0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0];
    let numbers2 = numbers ;
//     console.log(numbers2);
    let temp = 1;
    let count = 0;
    let size = numbers.length;
    let flash = 1;
    for (count = 0; count <= (size - 1); count++) {
         if (numbers[count] == numbers[temp + flash])
         {
              numbers2[count + 1] = " * ";
         }
         flash++;
    }
    console.log(numbers);
}

findSpaces();