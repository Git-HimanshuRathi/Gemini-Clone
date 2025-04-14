let arr1 = [1,1,11,11,1,11,2,2,3]

function removeDuplicate(arr1){
    let noDuplicate = []
    for(let i=0 ; i<arr1.size ; i++){
        for(let j=0 ; j<arr.size ; j++){
        if(arr1(i)!=arr1(j)){
            noDuplicate.push(arr1(i));
           }
        }
    }
    return noDuplicate ;
}
console.log(removeDuplicate(arr1));

function findMax(arr2){
    let max = arr2(0) ;
    for(let i=0 ; i<arr2.size ; i++){
        if(arr2(i)>max){
          max = arr2(i) ;
        }
    }
    return max ;
}

function removeDuplicate(arr1){
    let noDuplicate = [];
    for(let i = 0; i < arr1.length; i++){
        if(!noDuplicate.includes(arr1[i])){ // Check if element is not already in the noDuplicate array
            noDuplicate.push(arr1[i]);
        }
    }
    return noDuplicate;
}
console.log(removeDuplicate(arr1)); 

function sumOfarr(arr1){
    let sum = 0 ;
    for(let i=0 ; i<arr1.size ; i++){
        sum += arr1[i] ;
    }
    return sum ; 
}
console.log(sumOfarr(arr1));

let sumfxn = arr1.reduce(function(acc,cur){
    return acc + cur ;
},0);
console.log(sumfxn);

let A = [1,2]
let B = [3,4]
let C = [5]

function nestedArr(A,B,C){

   let sum1 = A.concat(B.concat(C));
   return sum1 ;
}
console.log(nestedArr(A,B,C));

let a = [1,[2,[3,4,[5]]]]

function flattenArray(a){
    let x = a.flat(Infinity);
     return x ;
}
console.log(flattenArray(a))