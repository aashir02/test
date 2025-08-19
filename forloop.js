//1) print numbers from 1 to 10
// for(let i =0;i<11;i++){
//     console.log(i);
// }

//2)even numbers 1 to 50
// for(let i =2;i<50;i+=2){
//     console.log(i);
// }


//sum of first n natural numbers
// n=100;
// sum=0;
// for(i=1;i<=n;i++){
//     sum+=i;
// }
// console.log(sum);


//reverse counting from 20 to 1
// for(let i=20;i>0;i--){
//     console.log(i);
// }


//multipliction table of 5
// for(i=1;i<=10;i++){
//     console.log('5 x ',i,' = ',5*i);
// }


//prit numbers form 1 to 100 that are divisible by 3 & 5
// for(i=1;i<=100;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i);
//     }
// }


// //1 to 50 divisible by 3 or 7
// for(i=1;i<51;i++){
//     if(i%3==0 || i%7==0){
//         console.log(i);
//     }
// }

//1 to 50 not divisible by 2 or 3
// for(i=1;i<51;i++){
//     if(i%2!=0 || i%3!=0){
//         console.log(i);
//     }
// }

//even numbers and not multiple of 10
// for(i=1;i<51;i++){
//     if(i%2==0 && i%10!=0){
//         console.log(i);
//     }
// }

//divisible by 2 or 3
// for(i=1;i<51;i++){
//     if(i%2==0 || i%3==0){
//         console.log(i);
//     }
// }

//first 10 prime nubers using for loop
// for(i=2;i<=100;i++){
//     count=0;
//     for(j=1;j<=i;j++){
//         if(i%j==0){
//             count++;
//         }

//     }
//     if(count==2){
//         console.log(i);
//     }
// }

//numbers divisible by 3 or 5 between 1 to 100 and count them
// let count=0;
// for(i=1;i<101;i++){
//     if(i%3==0 || i%5==0){
//         count++;
//     }
// }
// console.log(count)

//sum of all odd numbers from 1 to 100
// sum=0;
// for(i=1;i<101;i++){
//     if(i%2!=0){
//         sum+=i;
//     }
// }
// console.log(sum);

//numbers not didvisible by 2,3,5
// for(i=1;i<101;i++){
//     if(i%2!=0 && i%3!=0 && i%5!=0){
//         console.log(i);
//     }
// }

//multiplication table for 1 to 5
// for(i=1;i<6;i++){
//     for(j=1;j<11;j++){
//         console.log(i,'x',j,'=',i*j);
//     }
//     console.log('')
// }

let i = 1;

// while(i <= 100){
//     console.log(i);
//     i++
// }

// 1234;
// 10; 

// let num = 123;
// let sum = 0; //6

// while(num > 0){ //false
//     let lastDigit = num % 10; //1
//     sum = sum + lastDigit; // 5 + 1 = 6
//     num = Math.floor(num /10); //0


// }
// console.log(sum);

// // find the largest digit in a number
// // find the number of digits
// // reverese a number

// num=123
// sum=0
// while(num>0){
//     let lastDigit=num%10;
//     sum=sum+lastDigit;
//     num=Math.floor(num/10);
// }
// console.log(sum);

//find largest digit in a number
// let num=2948;
// let largestNumber=0;

// while(num>0){
//     let digit = num%10; //3
//     if(digit>largestNumber){ //true
//         largestNumber=digit; //3
//     }
//     num=Math.floor(num/10);
// }
// console.log(largestNumber);

//find number of digits
// let num=74837478;
// let count=0;
// while(num>0){

//     count++;
//     num=Math.floor(num/10);
// }
// console.log(count);

//reversing a number

// let num=1234;
// let reverseNum=0;
// while(num>0){
//     let digit=num%10; 
//     let i=0;
//     while(i<num.toString().length-1){ 
//         digit=digit*10;
//         i++;
//     }
//     reverseNum=reverseNum+digit;
//     num=Math.floor(num/10);
    
// }
// console.log(reverseNum);



let num=12345678
let reverseNum=0;
while(num>0){
    let digit=num%10;
    reverseNum=reverseNum*10+digit;
    num=Math.floor(num/10);
}
console.log(reverseNum)