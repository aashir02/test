// let r   = 7;

// for(let i=1;i<r;i++){
//     s="";

//     for(let j=r;j>i;j--){
//         s+=" ";
        
//     }

//     for(let k=1;k<=2*i-1;k++){
//         s+="*";
//     }

//     console.log(s);

// }





// let row=4
// let col=4

// for(let i=1;i<=row;i++){
//     pattern = " ";
//     for(let j=1;j<=col;j++){
//         pattern+="*";
//     }
//     console.log(pattern);
// }

// let row=5


// for(let i=1;i<=row;i++){
//     pattern = " ";
//     for(let j=1;j<=i;j++){
//         pattern+="*";
//     }
//     console.log(pattern);
// }

// let row=5


// for(let i=1;i<=row;i++){
//     pattern = "";
//     for(let j=row;j>i;j--){
//         pattern+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         pattern+="*";
//     }
//     console.log(pattern);
// }

// let row = 5;

// for(let i = 1; i<=row; i++){
//     pattern="";
//     for(let j = row; j>i; j--){
//             pattern+="*";
//     }
//     console.log(pattern)
// }

// let row =5

// for(let i =1; i<row; i++){
//     pattern="";
//     for(let j=0; j<i; j++){
//         pattern+=" ";
//     }
//     for(let k=i+1; k<2*row-i;k++){
//         pattern+="*";
//     }
//     console.log(pattern);
// }

// let row =5;

// for(let i =1; i<=row; i++){
//     pattern="";
//     for(let j=0; j<row-i+1; j++){
//         pattern+=" "
//     }
//     for(let k=1; k<=i*2-1; k++){
//         pattern+="*"
//     }
//     console.log(pattern);
// }
// for(let i =row-1; i>=1; i--){
//     pattern="";
//     for(let j=0; j<row-i+1; j++){
//         pattern+=" "
//     }
//     for(let k=1; k<=i*2-1; k++){
//         pattern+="*"
//     }
//     console.log(pattern);
// }

//fiboanacci series

// let num=10;
// let firstNum=0;
// let lastNum=1;

// for(let i=0; i<num-2; i++){
//     console.log(firstNum);
//     sum=firstNum+lastNum;
//     firstNum=lastNum;
//     lastNum=sum;
//}

//reversing a number

// let num=1234;
// index=num.toString().length
// let revNum=0;
// for(let i=0;i<index;i++){
//     digit=num%10
//     revNum=revNum*10+digit
//     num=Math.floor(num/10);
// }
// console.log(revNum)


//pallindrome check

// let str = "malayalam";
// let index=str.length;
// let revStr="";

// for(let i = 0;i<=index-1;i++){
//     revStr=revStr+str[i]; 
// }
// if(str==revStr){
//     console.log("true")
// }
