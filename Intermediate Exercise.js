//Intermediate Exercise

//mySort

function findMin(arr){
    let min = arr[0];
    for(let i=1; i < arr.length; i++ ){
        if(arr[i] < min){
            min = arr[i];
        }

    }
    return min;
}

function mySort(arr){
    let result = [];
    while (arr.length > 0){
        let min = findMin(arr);
        result.push(min);
        arr.splice(arr.indexOf(min),1);

    }
    return result;

}

console.log(mySort([17, 0, -3, 2, 1, 0.5])); // returns [-3, 0, 0.5, 1, 2, 17]
//or use sort()


//isPrime

function isPrime(n){
    if (n ==1 ){
        return false;
    }
    else{
        for(let i =2;i < n;i++ ){
            if(n % i ===0){
                return false;
            }

            

        }
        return true;
    }

}

console.log(isPrime(1)); // returns false
console.log(isPrime(5)); // returns true
console.log(isPrime(91)); // returns false
console.log(isPrime(1000000)); // returns false


//confirmEnding


function confirmEnding(str1,str2){
    let k = str2.length;
    let t = str1.length - k;
    for(let i =0 ; i<t;i++ ){
        if(str1[i+t] == str2[i]){
            return true
        }else{
            return false
        }
    }

}


console.log(confirmEnding("Bastian", "n")); // true
console.log(confirmEnding("Connor", "n")); // false
console.log(confirmEnding("Open sesame", "same")); // true


//findDuplicate

function findDuplicate(arr){
    if(arr.length ==0){
        return false
    }
    for(let i=0; i< arr.length;i++){
        for(let j=0; j< arr.length; j++){
            if(i != j && arr[i]==arr[j]){
                return true
            }
        }
    }
    return false

}

console.log(findDuplicate([1, 3, 5, 7, 9, 3])); // returns true
console.log(findDuplicate([])); // returns false
console.log(findDuplicate(([3, 4, 5, 6, 7, 10000, 0]))); // returns false


//palindrome

function palindrome(str){
    /*let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return true
    } else {
        return false;
    }*/

    /*let rev = str.split("").reverse().join("");
 
    if (rev == str) {
        return true
    }
    return false

    let l_str = str.length - 1;
    if (l_str == 0 ){
        return false
    }*/

    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
            
        }
       // console.log(str[i],str[j]);
        j--;
        
    }
    
    return true;
    


}


console.log(palindrome("bearaeb")); // true
console.log(palindrome("Whatever revetahw")); // true
console.log(palindrome("Aloha, how are you today?")); // false



//pyramid
function pyramid(n){
    let i = n-1;
    let j = 1;
    for(k=1;k<=n;k++){
        drawRow(i,j);
        i--;
        j+=2;

    }


}

function drawRow(space,star){
    let result ="";
    for(let i = 0; i<space; i++){
        result+=" ";

    }for(let i = 0; i < star; i++){
        result+="*";
    }
    console.log(result);
}


pyramid(5);

//inversePyramid

function inversePyramid(n){
    let i=0;
    let j=2*n-1;
    for(let k=1; k<=n;k++){
        drawRow(i,j);
        i++;
        j-=2;
    }
}

inversePyramid(4);
   

