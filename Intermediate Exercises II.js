//Intermediate Exercises II

//factorPrime



function factorPrime(n){
    let answer = n +" = "
    let p = 2;
    while(p<=n){
        if(n % p ==0){
            answer += p+ " x ";
            n/=p;
        }else{
            p++;
        }
    }
    answer = answer.substring(0,answer.length - 3);
    console.log(answer);


}
factorPrime(120);


//intersection


function intersection(arr1,arr2){
    let result = [];
    for(let i =0; i<arr1.length;i++){
        for(let j=0; j<arr2.length;j++){
            if(arr1[i] == arr2[j]){
                //check 有沒有重複
                let okay = true;
                for(let k=0; k < result.length;k++){
                    if(arr1[i] == result[k]){
                        okay = false;
                    }

                }
                if(okay ==true){
                    result.push(arr1[i]);
                }

            }
        }
    }
    console.log(result);


}




intersection([1, 3, 4, 6, 10], [5, 11, 4, 3, 100, 144, 0]); // returns [3, 4]



//flatten

function flatten(arr){

    let result = [];
    arr_1(arr);
    console.log(result);
    return result;

    function arr_1(arr1){
        for (let i=0;i<arr1.length;i++){
            if(Array.isArray(arr1[i])){
                arr_1(arr1[i]);
            }else{
                result.push(arr1[i]);
            }
        }
    }

}

flatten([1, [[], 2, [0, [1]], [3]], [1, 3, [3], [4, [1]], [2]]]);
// returns [1, 2, 0, 1, 3, 1, 3, 3, 4, 1, 2]