let search=document.getElementById("search")
let city_input=document.querySelector(".kalpit")
let para=document.querySelector(".para")
let visibility=document.querySelector(".v")
let description=document.querySelector(".p")
async function wa(city){
    let apis = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=9893d530f6a80322093c3efc3530c99b`;
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
