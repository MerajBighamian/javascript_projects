function sum(a,b){
    //a=a || 1;
    //b=b || 2;
    //console.log(a+b);
    return a+b; 
}

var c = sum(2,5);
console.log(c)

function name_owner(){
    console.log("meraj");
}

function recursive_factorial(n){
    if (n == 1){
        return 1;
    }
    else{
        return n*recursive_factorial(n-1);
    }
}

// function loop(b) {
//     if(b == 1){
//         console.log(1)
//     }    
//     else{
//         console.log(b);
//         b--;
//         loop(b);
//     }
// }
// loop(10);

function loop(n){
    if (n==1){
        return 1;
    }
    else{
        sum = n+loop(n-1);
        return sum;
    }

}
console.log(loop(12));