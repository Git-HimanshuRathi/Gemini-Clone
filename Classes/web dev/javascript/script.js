
/*function printname(name , cb1 , cb2){
    console.log(name)
    cb1('Rathi')
    cb2(18)
}

function printlastname(lastname){
    console.log(lastname)
}

function printage(age){
    console.log(age)
}

printname('Himanshu' , printlastname , printage)*/

let arr1 = [1,2,3,4,5]

function calSquare(arr){
    let newArr = []

for(let i=0 ; i<arr1.length ; i++){
    newArr.push(arr1[i]*arr1[i]) ;
}
return newArr 
}

let square = calSquare(arr1) ;
console.log(arr1)
console.log(square)

// Map

let nums2 = [1, 2, 3, 4, 5];

let mappedSqaures = nums2.map(function (val) {
  return val * val;
});

console.log("Sqaure from Map ", mappedSqaures);
console.log(nums2)

//
let trans = [1000,2000,3000,4000,5000]
let dollarinrs = 84 

let rsindollar = trans.map(function(val){
   return  (val/dollarinrs).toFixed(3) ;
});

console.log(trans)
console.log(rsindollar)

// exercise

let nums = [1,23,45,46,58,90,13,37]
let even = []
let odd = []
for(let i=0 ; i<nums.length ; i++){
    if(nums[i]%2==0){
        even.push(nums[i])
    }
    else{
       odd.push(nums[i])
    }
}
console.log('even no',even)
console.log('odd no',odd)

//filter

let nums2 = [1,23,45,46,58,90,13,37]

function checkEven(val){
    return val%2==0
}
let evenArr = nums2.filter(checkEven)

console.log('even number',)

//exercise

let transcastion = [1000,-2000,3000,-4000,5000]
let deposit = []
let withdrawal = []

function checkBalance(val){
    return val>=0
}

//exercise 


let nums3 = [1,2,3,4,5]
    function sumOfall(val){
    
    }

/* 

