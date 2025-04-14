function removeDuplicate(arr1){
    let noDuplicate = []
    for(let i=0 ; i<arr1.size ; i++){
        for(let j=0 ; j<arr1.size ; j++){
            if(arr1(i)!=arr1(j)){
                noDuplicate.push(arr1(i))
            }
        }
        return noDuplicate ;
    }
}

function maxInarr(arr2){
    let max = arr2(0)
    for(let i=0 ; i<arr2.size ; i++){
        if(arr2(i)>arr2(0)){
            max = arr2(i)
        }
    }
    return max ;
}

function reverseArray(arr){
    arr.reverse();
    return arr;
}

function removeDuplicates(arr){
  for(let i=0;i<arr.length;i++){
    let count=1;
    for(let j=i;j<arr.length;j++){
      if(arr[i]==arr[j] && i!=j){
        count++;
        
        arr.splice(j,1);

      }
    }
  }

  return arr;
}

function findMax(arr){
  let maxVal =0;
  for(let i=0;i<arr.length;i++){

    if(arr[i]>arr[maxVal]){
      maxVal = i;
    }


  }

  return arr[maxVal];


}

function sumArray(arr){

  let ans = arr.reduce(function(acc,val) { 
    acc += val;
    return acc;
  },0);

  return ans;
}

function flattenArray(arr){

} 

function mergeObjects(obj1,obj2){

  let ans = Object.assign({},obj1,obj2)
  return ans;
}

function countProperties(obj){
  let count = Object.keys(obj).length
  return count;
}

function deepClone(obj){

}

function filterByKeys(obj,keys){
  var result = {};

  for(let i=0;i<keys.length;i++){

    let ans = keys[i];

    if(obj.hasOwnProperty(ans)){
      result[ans] = obj[ans];
    }

  }


}

function swapKeysAndValues(obj){

}

function reverseString(str){

    let ans = str.split('').reverse().join("");
    return ans;

}

function countVowels(str){
  let ans = str.replace(" ","").toLowerCase().split("");
  let count =0;

  for(let i=0;i<ans.length;i++){
    for(let j=i+1;j<ans.length;j++){
      if(ans[i]==ans[j]){
        ans.splice(j,1);
      }
    }
  }

  for(let i=0;i<ans.length;i++){
    if(ans[i] == 'a' || ans[i] == 'e' || ans[i] == 'i' ||  ans[i] == 'o' || ans[i] == 'u'){
      count++;
    }

  }

  return count
  
}

function Longest(str){
  let ans = str.split(' ');
  let count = '';

  for(let i=0;i<ans.length;i++){
    if(ans[i].length>count.length){
      count = ans[i];
    }
  }

  return count;
}

function isPalindrome(str){
 
  let start =0;
  let end = ans.length-1;
  let fans = true;
  while(start<end){
    if(ans[start]!=ans[end]){
      fans = false;
    }
    start++;
    end--;
  }
  if(fans==false){
    return false;
  } else{
    return true;
  }
}

function capitalizeWords(str){
  let ans = str.split("")
  ans[0] = ans[0].toUpperCase();
  for(let i=0;i<ans.length;i++){
    if(ans[i]==" "){
      ans[i+1] = ans[i+1].toUpperCase();

    }

  }
return ans.join("");

}

function doubleNumbers(nums){

  let arr = nums.map(function(val){
    return val*2;

  })

  return arr;
}

function filterFalsey(arr){

  let ans = arr.filter(function(val){
    if(val>=0 && val<=9){
      return val;
    }
  })
  return ans


}