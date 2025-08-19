// let arr = [3, 8, 1, 5, 9,];
// let revArr=[];


// for(let i = arr.length-1;i>=0;i--){
//     revArr=arr[i];
//     console.log(revArr)
    
// }

// let arr = [2,3,4,5,6,7];
// let evenArr=[];

// for(let i=0;i<arr.length-1;i++){
//     if(arr[i]%2==0){
//         evenArr[i]=arr[i];
//         console.log(evenArr)
//     }
//     else{
//         console.log(arr[i])
//     }
// }


// let sum = 0;
// let num = [2,4,5,-9]; // 11


//step 1 : iterate through all elements
//step 2 : check (using if)
//step 3 : if true ..num[i] = 0


// let x = 5;
// let y;

// x = y;

// console.log(x);

/////////////////////BASICS///////////////////

//1.accept 5 nums and print

// let arr= [1,2,3,4]
// console.log(arr)

//2. sum of all elements
// let arr = [1,2,3]
// let sum= 0;
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i];
// }
// console.log(sum)

//3.average of elemnets
// let arr = [1,1,10]
// let sum =0;
// let avg=0;
// for(let i =0;i<arr.length;i++){
//     sum+=arr[i];
// }
// avg=sum/arr.length
// console.log(avg)

//4. count how many possitive integrs ina aarray
// let arr=[1,3,-9,7,-8]
// let count=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0){
//         count++;
//     }
// }
// console.log(count,'/',arr.length,' number of possitive numbers')

//5.find maximum element
// let arr=[2,3,4,2,6,9]
// let max=arr[0];
// for(let i =0;i<arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i];
//     }
// }
// console.log(max,' is the largest number')

//6.find min elemnet
// let arr=[2,3,4,5,8,,-1,2]
// let min=arr[0];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<min){
//         min=arr[i];
//     }
// }
// console.log(min,' is the minimum number')

// //7.count number of odd and even numbers

// let arr= [1,2,3,4,5,6,8]
// odd=0;
// even=0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         even++;
//     }
//     else{
//         odd++;
//     }
// }
// console.log(even,' even numberr');
// console.log(odd,' odd numbers')

// //8.check for an element
// let arr = [1,2,3,4,5,0]
// let find=40;
// let flag=0;
// for(let i=0;i<arr.length;i++){
//     if(find==arr[i]){
//         console.log(find,' found at postion ',i)
//         flag=1;
//         break;
//     }
// }
// if(flag==0){
//     console.log(find,"not found")
// }

//9.print array elemnets from last to first
// let arr=[1,2,3,4]
// let n=arr.length
// for(let i=0;i<Math.floor(n/2);i++){
//     let temp = arr[i];
//     arr[i]=arr[n-1-i];
//     arr[n-1-i]=temp;

// }
// console.log(arr)

// //10.print the square of each element
// let arr  = [16,4,9,25,36]

// for(let i=0;i<arr.length;i++){
//     arr[i]=arr[i]*arr[i]
// }
// console.log(arr)

// //11.replace negetive numbers with 0
// let arr=[-1,-2,-5,-2,0]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]<0){
//         arr[i]=0
//     }
// }
// console.log(arr)

// //12.multiply all elements and print hte product
// let arr = [1,2,3,4,0]
// let product=1;
// for(let i=0;i<arr.length;i++){
//     product=product*arr[i]
// }
// console.log(product)

// //13.display only the fisrt and last elemnet of the array
// let arr=[1,3,4,5]
// for(let i=0;i<arr.length;i++){
//     if(i==0 || i==arr.length-1){
//         console.log(arr[i]);
//     }
// }

// //14.create a array with each element doubled
// let arr=[1,2,3,5]
// for(let i =0;i<arr.length;i++){
//     arr[i]=arr[i]*2
// }
// console.log(arr)

// //15.display only the odd numbers 
// let arr=[1,2,3,4,5]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2!=0){
//         console.log(arr[i])
//     }
// }

///////////////////INTERMEDIATE/////////////////

//1.count th frequency of each items in the array

// let arr = [1,1,1,2,2,2];
// let arr2=arr;
// //console.log(arr)
// for(let i=0;i<arr.length;i++){
//     let count=0;
//     for(let j=0;j<arr.length;j++){
//         //console.log(arr[i])
//         if(arr2[j]!=-1){
//             console.log(arr[i])
//             if(arr[i]==arr2[j]){
//                 count++;
//                 arr2[j]=-1;
//             }
//         }
//     }
//     //console.log(arr[i],'->',count,'times');
// }
// //console.log(arr)

// let arr = [1,1,1,2,2,2];
// n=arr.length;
// let arr2=arr;

// for(let i =0;i<n;i++){
//     for(let j =0;j<n;j++){
//         if(arr2[j]!=-1 && arr[i]==arr2[j]){
//             count=count+1;

//         } 
//     }
// }


// let num1 = [6,5,6];
// let num2 = [6,5,6];

// console.log(num1 == num2);

// let arr=[1, 2, 0, 2, 3, 4, 5, 2, 1]
// n=arr.length
// let flag= false;

// for( let i=0;i<Math.floor(n/2);i++){
//     if(arr[i]==arr[n-1-i]){
//         flag=true;
//     }
//     else{
//         flag=false;
//     }
// }
// if(flag==true){
//     console.log("true")
// }
// else{
//     console.log("false")
// }

//merging 2 arrays

let arr1=[1,2,3,4]
let arr2=[5,6,7,8]
l1=arr1.length
l2=arr2.length

for(let i=l1;i<l2+l1;i++){ 
    arr1[i]=arr2[i-l1]
}
console.log(arr1)