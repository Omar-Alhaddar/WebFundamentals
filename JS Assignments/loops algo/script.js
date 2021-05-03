//1 3 5 7 9 11 13 15 17 19
for(var i=1; i<=20;i++){
    if(i%2 !== 0){
        console.log(i)
    }
}


/* Num: 1 Sum: 1
script.js:14 Num: 2 Sum: 3
script.js:14 Num: 3 Sum: 6
script.js:14 Num: 4 Sum: 10
script.js:14 Num: 5 Sum: 15
 */
var sum=0;
var a;
for(var i=1 ; i<=5 ; i++){
    sum=sum+i;
    a="Num: "+i+" "+"Sum: "+sum;
    console.log(a)
    

}