// BURGER MENU FOR TABLET AND MOBILE
document.getElementById("burger-menu").onclick = function () {
  let burger_nav = document.getElementById("burger-nav");
  burger_nav.classList.toggle("no-display");
};

// FLATPICKR
let difference_in_days; // Global variable 
const date_input = document.getElementById('date-range');
const new_calendar = flatpickr(date_input, {
    mode: "range",
    minDate: "today",
    dateFormat: "y-M-d",
    altInput: true,
    altFormat: "d-M-y",
    allowInput: true,
    onChange: function(dates) {
        if (dates.length == 2) {
            let start = dates[0];
            let end = dates[1];
            difference_in_days = calculate_day_difference(start,end);
        }
    }
  });

// SELECT AVAILABLE VEHICLES BASED ON USER INPUT
let num_people = document.getElementById('num-people');
let travel_distance = document.getElementById('distance');
let motorbike = document.getElementById('motorbike');
let small_car = document.getElementById('small-car');
let large_car = document.getElementById('large-car');
let motorhome = document.getElementById('motorhome');

document.getElementById('search-btn').onclick = function(){
    // reveal within search section
    if((num_people.value >=1 && num_people.value <=6) && (difference_in_days >=1 && difference_in_days <=15))
        document.getElementById('within-search').classList.remove('no-display');
    // reveal motorbike option
    if(num_people.value == 1 && (difference_in_days >=1 && difference_in_days <=5))
        motorbike.classList.remove('no-display');
    // reveal small car option
    // note: min. number of people allowed on input is 1
    if(num_people.value <= 2 && (difference_in_days >=1 && difference_in_days <=10))
        small_car.classList.remove('no-display');
    // reveal large car option
    if(num_people.value <=5 && (difference_in_days >=1 && difference_in_days <=10))
        large_car.classList.remove('no-display');
    // reveal motor home option
    if((num_people.value >1 && num_people.value <=6) && (difference_in_days >=2 && difference_in_days <=15))
        motorhome.classList.remove('no-display');
    // outside search results
    if(num_people.value>6 || difference_in_days>15)
        document.getElementById('outside-search').classList.remove('no-display');
}

// CALCULATE ESTIMATED RENTAL COST




