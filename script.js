// function fndpair(array){
//     for(let i of array){
//         console.log("outer loop")
//         for(let j=1;j<array.length;j++){
//             console.log("inner loop")
//             if(i+array[j]==0){
//                 return[i,array[j]]
//             }
//         }
//     }
// }
// let result=fndpair([-5,-4,-3,-2,-1,0,2,4,6,8])
// console.log(result)
// timecomplexity-o(n2) is quadritic

// function findpair(array){
//     let left=0;
//     let right=array.length-1
//     while(left<right){
//         sum=array[left]+array[right]
//         if(sum==0){
//             return[array[left],array[right]]
//         }
//         else if(sum>0){
//             right--
//         }
//         else{
//         left++
//         }
//     }
// }
// let result=findpair([-5,-4,-3,-2,-1,0,2,4,6,8])
// console.log(result)

//complexity of this question is o(n)[linear] because only one time loop is working
// function findpair(array,target){
//     for(let [index,value] of array.entries()){
//         for(let j=1;j<array.length;j++){
//             if(value+array[j]==target){
//                 return[index,j]
//             }
//         }
//     }
// }
// let result=findpair([3,2,5],7)
// console.log(result)


//output=[-5,-4,-3,-2,-1,0,2,6,8]  

// function duplicatevalue(array){
//     for(let value of array){
//         for(let j=1;j<array.length;j++){
//             if(value===array[j]){
//                 return[value]
//             }
//         }
//     }
// }
// let result=duplicatevalue(["a","c","c","d"])
// console.log(result)
// function duplicatevalue(array){
//     for(let value of array){
//         console.log("outer loop")
//         for(let j=1;j<array.length;j++){
//             console.log("inner loop")
//             if(value==array[j])
//             {
//                 return[value]
//             }
//         }
//     }
// }
// let result=duplicatevalue(["a","c","c","d","d"])
// console.log(result)

// function findpair(array){
//     for(let i of array){
//         for(let j=1;j<array.length;j++){
//             if(i+array[j]===0){
//                 return[i,array[j]]
//             }
//         }
//     }
// }
// let result=findpair([-5,-4,-3,-2,-1,0,2,4,6,8])
// console.log(result)

// function findpair(array){
//     let duplicate=[]
//     for(let i=0;i<array.length;i++){
//         console.log("outer loop")
//         for(let j=1;j<array.length;j++){
//             console.log("inner loop")
//             if(array[i]==array[j]){
//             duplicate.push(array[i],array[j])
//             }
//         }
//     }
//     return duplicate;
// }
// let result=findpair([2,2,3,2,3])
// console.log(result)
// function sum(n){
//     let sum=0
//     for(let i=1;i<=n;i++){
//         sum+=i
//     }
//     return sumg
// }
// let result=sum(5)
// console.log(result)
// function fabo(length){
//         let a=0;
//         let b=1
//         console.log(a)
//         console.log(b)
//         for(let i=0;i<length;i++){
//                 temp=a+b
//                 console.log(temp)
//                 a=b;
//                 b=temp
//         }
// }
// fabo(2)
//date function gives you all the things like monday tuesday wednesday thursday 
//pallidrome string //display date//leap year//cubes//average and sum//n no of even number
//array target question//array_reverse//marks_student//even_odd_indexed//sum_even//sum_of difference//target_question//triple///divisble by 9//length_String//duplicate_values
//array sort using javascript(but sorting array in alphabets)//sortinng of arr using array//printing alphabet using javascript//copy content//copy contain using same array//rotate array using javascript//alphabets_of even number//second_largest&&third_largest/min_value/sub_array
//searching of array//duplicate_another_method//seperate_even_odd/pushing an array//revesion of rotate_an element in javascript//sum_dsa//missing_element//printing_table_using user_input//basic_understanding_of_how to play with api/profit and loose_question//reverse an array using javascript function
//linear _search//basics of javascript//binary_search//occurence of first_no index//occurence of lasst_occurence//total_occurence/peak_elmeent_through_linear search//sum_of two_array//two_array add//otp_revision
//string_question//pallidrome_string//basic_submission//pin_valid//peak_value_binary search//pivot_element(minimun rotated value)//first_occurence//last_occurence//revision_of pallidrome_in_string//lower_bound//upper_bound//first_occurrence//last_occurence//missing_element_using_linear_searc//missing_element_using_binary_Search/missing_element_last_elemrnt//sqrt_linear_search//sequence//
//basics python and javascript//find_cubes//


// function occurence(array,key){
//     start=0
//     end=array.length-1
//     let first_occurence=0
//     while(start<=end){
//         let mid=Math.floor(start+(end-start)/2)
//         if(array[mid]==key){
//             first_occurence=mid
//             end=mid-1
//         }
//         else if(array[mid]<key){
//             start=mid+1
//         }
//         else{
//             end=mid-1
//         }
//     }
//     start=0
//     end=array.length-1
//     let last_occurence=0
//     let total_occurence=0
//     while(start<=end){
//         let mid=Math.floor(start+(end-start)/2)
//         if(array[mid]==key){
//             last_occurence=mid
//             start=mid+1
//         }
//         else if(array[mid]<key){
//             start=mid+1
//         }
//         else{
//             end=mid-1
//         }
//     }
//     return{
//         'first_occurence': first_occurence,
//         'second_occurence':last_occurence,
//         total_occurence: (last_occurence-first_occurence)+1,
//     }
// }
// let result=occurence([1,2,2,3,4],2)
// console.log(result)

// function maximum_element(array){
//     let max=array[0]
//     for(let i=0;i<array.length;i++){
//         if(array[i]>max){
//             max=array[i]
//         }
//     }
//     return max
// }
// let result=maximum_element([1,2,3,4,5])
// console.log(result)
// function array(){
//     let array1=[3,5,22,5,7,2,45,75,89,21,2]
//     let array2=[9,2,42,55,71,22,4,5,90,25,26]
//     let sum_array1=0
//     let sum_array2=0
//     for(let i=0;i<array1.length;i++){
//         sum_array1+=array1[i]
//     }
//     for(let j=0;j<array2.length;j++){
//         sum_array2+=array2[j]

//     }
//     return{
//         'sum_array1':sum_array1,
//         'sum_array2':sum_array2,
//         'result':sum_array1+sum_array2
//     }
// }
// let result=array()
// console.log(result)


// function array_two_Add(){
//     let arr_1=[4,6,7]
//     let arr2=[8,1,9]
//     let arr=[]
//     for(let i=0;i<arr_1.length;i++){
//         for(let i=0;i<arr2.length;i++){
//             arr.push(arr_1[i]+arr2[i])
//         }
//     }
//     return [...new Set(arr)]

// }
// let results=array_two_Add()
// console.log(results)


// function kalpit(str){
//     let result=''
//     for(let i=0;i<str.length;i++){
//         if(i%2==0){
//             result=result+str[i]+'z'.toUpperCase()
//         }
//     }
//     return result
// }
// let result=kalpit("javascript")
// console.log(result)



// function string(str1,str2){
//     let result_str1=''
//     let result_str2=''
//     for(let i=str1.length-1;i>=0;i--){
//         result_str1+=str1[i]
//     }
//     for(let i=str2.length-1;i>=0;i--){
//         result_str2+=str2[i]
//     }
//     return{
//         'result_str1':result_str1==str1,
//         'result_str2':result_str2==str2
//     }
// }
// let resultss=string("racecar","java")
// console.log(resultss)
// function peak_Element(array){
//     start=0
//     end=array.length-1
//     let ans=0
//     while(start<end){
//         let mid=Math.floor(start+(end-start)/2)
//         if(array[mid]<array[mid+1]){
//             start=mid+1
//         }
//         else{
//             end=mid
//         }
//     }
//     return start
// }
// function pivot(array){
//     s=0
//     e=array.length-1
//     while(s<e){
//         let mid=Math.floor(s+(e-s)/2)
//         if(array[mid]>=array[0]){
//             s=mid+1
//         }
//         else{
//             e=mid
//         }
//     }
//     return s
// }
// let kalpit=pivot([1,8,10,17,3])
// console.log(kalpit)


// function missing_element_using_linear_search(array){
//     for(let i=0;i<array.length-1;i++){
//         if(array[i]!=i){
//             return i
//         }
//     }
//     return -1
// }
// let result=missing_element_using_linear_search([0,1,3,5,6])
// console.log(result)



// function missing_element_using_binary_Search(array){
//     s=0
//     e=array.length-1
//     let missing_element=0
//     while(s<=e){
//         let mid=Math.floor(s+(e-s)/2)
//         if(array[mid]!=mid){
//             missing_element=mid
//             e=mid-1
//         }
//         else{
//             s=mid+1
//         }
//     }
//     return missing_element
// }
// let reresult=missing_element_using_binary_Search([0,1,2,3,4,5])
// console.log(reresult)

// function sqrt_linear_search(x){
//     for(let i=0;i<=x;i++){
//         if(i*i>x){
//             return i-1
//         }
//         else if(i*i==x){
//             return i
//         }
//     }
// }
// let result=sqrt_linear_search(30)
// console.log(result)

// let btn1=document.querySelector(".btn")
// let api_key='9893d530f6a80322093c3efc3530c99b'
// let api='https://openweathermap.org/api_key'
// async function weather_api(){
//     let response=await fetch(api)
//     let result= response.json()
//     print(result)
// }
// weather_api()
// function kalpit(x){
//     for(let i=0;i<=x;i++){
//         if(i*i==x){
//             return i
//         }
//         else if(i*i>x){
//             return i-1
//         }
//     }
// }
// let reresult=kalpit(28)
// console.log(reresult)

// function cube_bineary_search(x){
//     for(let i=0;i<=x;i++){
//         if(i*i*i==x){
//             return i
//         }
//         else if(i*i*i>x){
//             return i-1
//}
let search=document.getElementById("search")
let city_input=document.querySelector(".kalpit")
let para=document.querySelector(".para")
let visibility=document.querySelector(".v")
let description=document.querySelector(".p")
async function wa(city){
    let apis = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9893d530f6a80322093c3efc3530c99b`;
    console.log(apis)
    let res=await fetch(apis)
    let respond=await res.json()
    console.log(respond)
    para.innerText=`temperature::${respond.main.temp}`
    visibility.innerText=`visibility:${respond.visibility}`
    description.innerText=`description:${respond.weather[0].description}`
}
search.addEventListener("click",()=>{
    let city = city_input.value.trim()
    if (city) {
        wa(city);
    } else {
        console.log("Please enter a city name.");
    }
})
