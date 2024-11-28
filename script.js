
viewdata ()

function viewdata (){
let country = document.getElementById("menu").value

axios.get (`http://api.aladhan.com/v1/timingsByCity/{date}?country=${country}&city=${country}`)
.then ((response)=>{
 let countrytime = response.data.data.timings
 let date1 = response.data.data.date.gregorian.date
 let day1 = response.data.data.date.hijri.weekday.ar
 console.log (date1)
 console.log(day1)
 document.getElementById("fajer").innerHTML = countrytime.Fajr
 document.getElementById("shoroq").innerHTML = countrytime.Sunrise
 document.getElementById("thohar").innerHTML = countrytime.Dhuhr
 document.getElementById("aser").innerHTML = countrytime.Asr
 document.getElementById("magreb").innerHTML = countrytime.Maghrib
 document.getElementById("esha").innerHTML = countrytime.Isha
 document.getElementById("date-view").innerHTML = date1
 document.getElementById("day-view").innerHTML = day1


})
.catch (error=>{
    alert(error)
})

// country name view

switch (country){
case "JO":
    document.getElementById("country-name").innerHTML = " مواقيت الصلاة في المملكة الاردنية الهاشمية"
break;
case "SA":
    document.getElementById("country-name").innerHTML = " مواقيت الصلاة في المملكة العربية السعودية"
break;
case "KW":
    document.getElementById("country-name").innerHTML = "مواقيت الصلاة في دولة الكويت"
break;
case "AE":
    document.getElementById("country-name").innerHTML = "مواقيت الصلاة في الامارات العربية المتحدة"
break;
}
}
