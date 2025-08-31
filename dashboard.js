let miladiDateElem = document.querySelector(".miladi-date");
// let jalaliDate = moment().locale('fa').format('dddd، jD jMMMM، jYYYY');
// jalaliElem.innerHTML = jalaliDate;

// let date = new Date();
// let customizeDate = date.toDateString();
// miladiDateElem.innerHTML = customizeDate;


// آرایه ای از روزهای هفته به فارسی
var daysOfWeekPersian = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// تاریخ جاری
var currentDate = new Date();
var dayOfWeek = currentDate.getDay();
var day = currentDate.getDate(); 
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var hours = currentDate.getHours(); 
var minutes = currentDate.getMinutes();

// تبدیل شماره روز هفته به رشته فارسی معادل آن
var dayOfWeekPersian = daysOfWeekPersian[dayOfWeek];

// تاریخ کامل به میلادی
var fullDateGregorian = dayOfWeekPersian + ', ' + day + ' ' + getMonthName(month) + ', ' + year + ' ' + hours + ':'+minutes;

// ویرایش تاریخ بر اساس ساعت (am یا pm)
if (hours >= 12) {
    fullDateGregorian += " PM";
    document.querySelector(".sun-moon-mode").src = "../../svg/cloudy.svg";
} else {
    fullDateGregorian += " AM";
    document.querySelector(".sun-moon-mode").src = "../../svg/sun.svg";
}

// نمایش تاریخ کامل به کاربر
var dateElement = miladiDateElem.textContent = fullDateGregorian;

// تابع برای دریافت نام ماه
function getMonthName(monthIndex) {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[monthIndex];
}



let saveState = '';
function showContent(params) {
  let getElem = document.getElementById(params);
  let getActive = document.querySelector(".active");
  if (getActive) {
    // console.log(getActive);
    getActive.classList.add("d-none");
    getElem.classList.remove("d-none");
    getActive.classList.remove("active");
    getElem.classList.add("active")
  } else {
    document.getElementById("home").classList.add("active");
  }
}


window.addEventListener("resize",function(){
  let menuBarElem = document.getElementById("menuBar");
  if(window.innerWidth < 565){
    menuBarElem.classList.remove("w-25");
    menuBarElem.classList.add("d-none")
    
  }else{
    menuBarElem.classList.add("w-25");
    menuBarElem.classList.remove("d-none")
  }
})



function fullWidthMenuBar() {
  let menuBarElem = document.getElementById("menuBar");
  let contentBarElem = document.getElementById("contentBar")
  let containWidth25 = menuBarElem.classList.contains("w-25");

  // if(window.innerWidth <= 565 || window.outerWidth <= 565 || screen.width <= 565 || screen.availWidth <= 565){
  //   menuBarElem.classList.remove("w-25");

    if(containWidth25){
      menuBarElem.classList.remove("w-25");
      menuBarElem.classList.add("w-100");
      contentBarElem.classList.remove("w-75");
      contentBarElem.classList.add("d-none");
      // menuBarElem.classList.add("d-none")
    }else if(menuBarElem.classList.contains("d-none")){
      contentBarElem.classList.remove("d-none");
      contentBarElem.classList.add("w-100");
      menuBarElem.classList.remove("d-none");
      menuBarElem.classList.add("w-100");
    }else{
      contentBarElem.classList.remove("d-none");
      contentBarElem.classList.add("w-100");
      menuBarElem.classList.remove("w-100");
      menuBarElem.classList.add("d-none");
    }
    
  // }else{
  //   menuBarElem.classList.add("w-25");
  // }


  
}