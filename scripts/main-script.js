// BURGER MENU FOR TABLET AND MOBILE
document.getElementById("burger-menu").onclick = function () {
  let burger_nav = document.getElementById("burger-nav");
  burger_nav.classList.toggle("no-display");
};

// FLATPICKR
let difference_in_days; // Global variable
const date_input = document.getElementById("date-range");
const new_calendar = flatpickr(date_input, {
  mode: "range",
  minDate: "today",
  dateFormat: "y-M-d",
  altInput: true,
  altFormat: "d-M-y",
  allowInput: true,
  onChange: function (dates) {
    if (dates.length == 2) {
      let start = dates[0];
      let end = dates[1];
      difference_in_days = calculate_day_difference(start, end);
    }
  },
});

// SELECT AVAILABLE VEHICLES BASED ON USER INPUT
let num_people = document.getElementById("num-people");
let travel_distance = document.getElementById("distance");
let motorbike = document.getElementById("motorbike");
let small_car = document.getElementById("small-car");
let large_car = document.getElementById("large-car");
let motorhome = document.getElementById("motorhome");
let vehicle_cards = document.getElementsByClassName("vehicle-card");
let view_cost_btns = document.getElementsByClassName("estimate-cost-btn");

document.getElementById("search-btn").onclick = function () {
  // reveal within search section
  if (
    num_people.value >= 1 &&
    num_people.value <= 6 &&
    difference_in_days >= 1 &&
    difference_in_days <= 15
  ) {
    document.getElementById("outside-search").classList.add("no-display");
    document.getElementById("within-search").classList.remove("no-display");
    // reveal motorbike option
    if (
      num_people.value == 1 &&
      difference_in_days >= 1 &&
      difference_in_days <= 5
    )
      motorbike.classList.remove("no-display");
    // reveal small car option
    // note: min. number of people allowed on input is 1
    if (
      num_people.value <= 2 &&
      difference_in_days >= 1 &&
      difference_in_days <= 10
    )
      small_car.classList.remove("no-display");
    // reveal large car option
    if (
      num_people.value <= 5 &&
      difference_in_days >= 1 &&
      difference_in_days <= 10
    )
      large_car.classList.remove("no-display");
    // reveal motor home option
    if (
      num_people.value > 1 &&
      num_people.value <= 6 &&
      difference_in_days >= 2 &&
      difference_in_days <= 15
    )
      motorhome.classList.remove("no-display");
  }
  // outside search results
  else {
    document.getElementById("outside-search").classList.remove("no-display");
    document.getElementById("within-search").classList.add("no-display");
  }

  for (let i = 0; i < view_cost_btns.length; i++) {
    view_cost_btns[i].onclick = function () {
      document.getElementById("calculation-and-rental-links-group").classList.remove("no-display");

    //  I declared variables so that they are easier on the eyes :)
    let selected_vehicle_type = document.getElementById("selected-vehicle-type");
    let fuel_consumption_span = document.getElementById("fuel-consumption-span");
    let vehicle_names = document.getElementsByClassName('vehicle-name');
    let vehicle_fuel_consumptions = document.getElementsByClassName('selected-vehicle-fuel-consumption');
    let travel_distance_calc_span = document.getElementById('travel-distance-span');
    let calculated_fuel_cost = document.getElementById('calculated-fuel-cost');
    let chosen_days_calc_span = document.getElementById('chosen-days');
    let chosen_price_calc_span = document.getElementById('chosen-price');
    let vehicle_prices = document.getElementsByClassName('vehicle-price');
    let fuel_liter_usage = document.getElementById('fuel-liter-usage');
    let vehicle_rental_total = document.getElementById('vehicle-rental-total');
    let fuel_cost_total = document.getElementById('fuel-cost-total');
    let overall_cost = document.getElementById('overall-cost');

    // Info. on the fuel consumption calculator
    selected_vehicle_type.innerHTML = vehicle_names[i].innerHTML;
    fuel_consumption_span.innerHTML = vehicle_fuel_consumptions[i].innerHTML;
    travel_distance_calc_span.innerHTML = travel_distance.value;

    // CALCULATE FUEL COST
    calculated_fuel_cost.innerHTML = (Number(vehicle_fuel_consumptions[i].innerHTML) * (travel_distance.value/100) * 2.21).toFixed(2);

    // CALCULATE OVERALL RENTAL COST
    chosen_days_calc_span.innerHTML = difference_in_days;
    chosen_price_calc_span.innerHTML = vehicle_prices[i].innerHTML;
    fuel_liter_usage.innerHTML = Number(vehicle_fuel_consumptions[i].innerHTML) * (travel_distance.value/100);
    vehicle_rental_total.innerHTML = difference_in_days * Number(vehicle_prices[i].innerHTML);
    fuel_cost_total.innerHTML = calculated_fuel_cost.innerHTML;
    overall_cost.innerHTML = Number(vehicle_rental_total.innerHTML) + Number(fuel_cost_total.innerHTML);
    };
  }
};
