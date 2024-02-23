//Simple Exercise II

//stars
function stars(n){
    for(let i = 1; i <=n; i++){
        let line = "";
        for(let j = 0; j < i; j++){
            line+="*"

        }
        console.log(line);
    }
}

stars(4);

//makeStars

function makeStars(n){
    let result = "*";

    for(let i = 2; i <=n; i++ ){
        let s = "/n"
        for(let j= 0; j < i; j++){
            s+="*";

        }
        
        result +=s;
    }
    console.log(result);
    
}

makeStars(5);

//stars2
function stars2(n){
    for(let i = 1; i<=n;i++){
        let line = "";
        for(let j= 0; j < i; j++){
            line+="*";

        }
        console.log(line);
    }

        for(let i= n-1;i>0;i--){
            let line2= ""
            for(let j=0;j<i;j++){
                line2+="*"

            }
            console.log(line2);
        }

}

stars2(5);

//table

function table(){
    for(let i=1; i<=9; i++){
        console.log("3" + "*"+i+"="+3*i);
    }
}
table();




//table9to9
function table9to9(){
    for(let i=1; i<=9; i++){
        for(let j=1; j<=9;j++){
            console.log( i+ "*"+j+"="+ i*j);
        }
    }
}

table9to9();


//fib
function fib(n){
    if(n <=1){
        return n

    }if(n >1){
        return fib(n-1) + fib(n-2)
    }
}

console.log(fib(0)); // returns 0
console.log(fib(1)); // returns 1
console.log(fib(2)); // returns 1
console.log(fib(3)); // returns 2
console.log(fib(8)) // returns 21


//reverse
function reverse(str){
    
    let result = "";
    for(let i = str.length-1; i>=0;i--){
        result+=str[i];
    }
    return result;
    
}

console.log(reverse("abcd")); // returns "dcba"
console.log(reverse("I am a good guy.")); // returns ".yug doog a am I"

//swap
function swap(str){
    var l_str = str.length;
    let result ="";
    if(l_str ==0){
        return false
    }
    for(let i=0; i<l_str; i++){
        if(str[i]== str[i].toUpperCase()){
            result+=str[i].toLowerCase();
        }else if(str[i]!= str[i].toUpperCase()){
            result+=str[i].toUpperCase();
            
        }
        
    }
    
    return result;
}

console.log(swap("Aloha")); // returns "aLOHA"
console.log(swap("Love you.")); // returns "lOVE YOU."


//findMin

function findMin(arr){
    
    let min = arr[0];
    if(arr.length == 0){
        return undefined;
    }
    for(let i =1; i< arr.length; i++){
        if(arr[i]< min){
            min = arr[i];
        }
        return min
    }
    console.log(min)

}

console.log(findMin([1, 2, 5, 6, 99, 4, 5]));
console.log(findMin([]));
console.log(findMin([2, 6, 0, 33, 44, 88,-10]));



//findNthMin


function findNthMin(arr,n){
    for(let i=0; i< arr.length;i++){
        let counter =0;
        for(let j=0;j<arr.length;j++){
            if(arr[j] < arr[i]){
                counter++;
            }if(counter == n-1){
                return arr[i];

            }

        }

    }


}



console.log(findNthMin([1, 2, 3, 4, 5], 1)); // returns 1
console.log(findNthMin([1, 3, 5, 7, 9], 3)); // returns 5




