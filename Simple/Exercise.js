//Simple Exercise I

function  printMany(){
    for (let i =1 ; i <= 100; i++){
        console.log(i);
    }
}
printMany();


function printEvery3(){
    for(let j =1; j<=88; j+=3){
        console.log(j);
    }

}
printEvery3();

function stars(n){
    let result = "";
    for(let i = 0; i<n; i++){
        result+="*"
    }  
    return result
}

console.log(stars(6));


//isUpperCase 
function isUpperCase(t_String){
    if(t_String.length == 0 ){
        return false;
    }
        
    if(t_String[0] == t_String[0].toUpperCase())
        return true;
    else
        return false;

}

console.log(isUpperCase("ABBC"));
console.log(isUpperCase(""));
console.log(isUpperCase("aBCD"));



//isAllUpperCase

function isAllUpperCase(str){

    let alluppercase = true
    var l_str = str.length;
    if(l_str == 0){
        return false;
    }
    for(let i =0; i < l_str; i++){
        if (str[i] != str[i].toUpperCase()){
            alluppercase = false;
            return alluppercase
        }

    }

    return alluppercase
}
console.log(isAllUpperCase("ABCD"));// returns true
console.log(isAllUpperCase("")); // returns false
console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false

//position()

function position(str){
    var l_str = str.length
    

    for(let i=0; i < l_str; i++){
        if(str[i]==str[i].toUpperCase()){
            var result = (str[i],l_str);
            return str[i]+","+i
            
        }

    }
    return -1

}
console.log(position("abcd")); // prints -1
console.log(position("AbcD")); // prints A 0
console.log(position("abCD")); // prints C 2


//findSmallCount()
function findSmallCount(arr,n){
    var l_arr = arr.length;
    var count = 0;
    for(let i =0; i < l_arr; i++){
        if(n > arr[i]){
            count ++;
        }
    }
    return count

}

console.log(findSmallCount([1, 2, 3], 2));
console.log(findSmallCount([1, 2, 3, 4, 5], 4));

//findSmallerTotal
function findSmallerTotal(arr,n){
    var l_arr = arr.length;
    let result = 0;
    for(let i = 0; i < l_arr; i++){
        if(arr[i] < n){
            result += arr[i];
        }

    }
    return result

}

console.log(findSmallerTotal([1, 2, 3], 3)); // returns 3
console.log(findSmallerTotal([1, 2, 3], 1)); // returns 0
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)); // returns 25
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)); // returns 0



//findAllSmall

function findAllSmall(arr,n){
    var l_arr = arr.length;
    var output = []
    for(let i = 0; i < n ; i++){
        if(arr[i] < n){
            output.push(arr[i]);
        }

    }
    return output;

}

console.log(findAllSmall([1, 2, 3], 10)); // returns [1, 2, 3]
console.log(findAllSmall([1, 2, 3], 2)); // returns [1]
console.log(findAllSmall([1, 3, 5, 4, 2], 4)); // returns [1, 3, 2]



//sum
function sum(arr){
    var l_arr = arr.length;
    var total = 0;
    for(let i =0; i < l_arr; i++){
        total +=arr[i];
    }
    return total ;

}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns 55
console.log(sum([])); // return 0
console.log(sum([-10, -20, -30])); // return -60