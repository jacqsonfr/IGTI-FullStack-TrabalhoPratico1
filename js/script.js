window.addEventListener('load', start);

function start() {
  console.log('Loaded');
  // let range_red = document.getElementById('range_red');
  let range_red = document.querySelector('#range_red');
  range_red.addEventListener('change', updateText);

  let range_green = document.getElementById('range_green');
  range_green.addEventListener('change', updateText);

  let range_blue = document.getElementById('range_blue');
  range_blue.addEventListener('change', updateText);
}

function updateText(event) {
  let red_R = document.getElementById('red_value');
  let green_R = document.getElementById('green_value');
  let blue_R = document.getElementById('blue_value');

  if (event.target.id == 'range_red') {
    console.log('Red Value:', event.target.value);
    red_R.value = event.target.value;
  } else if (event.target.id == 'range_green') {
    console.log('Green Value:', event.target.value);
    green_R.value = event.target.value;
  } else if (event.target.id == 'range_blue') {
    console.log('Blue Value:', event.target.value);
    blue_R.value = event.target.value;
  }
  document.getElementById('result-color').style.backgroundColor =
    'rgb(' + red_R.value + ',' + green_R.value + ',' + blue_R.value + ')';
  // console.log(event.target.value);
  // console.log(event);
}

// let red_R = document.getElementById('red_value');
// let green_R = document.getElementById('green_value');
// let blue_R = document.getElementById('blue_value');
// let result_color = document.getElementsByClassName('result-color');

// function updateText(input, value) {
//   if (input == 'r') {
//     console.log('Red Value:', value);
//     red_R.value = value;
//   } else if (input == 'g') {
//     console.log('Green Value:', value);
//     green_R.value = value;
//   } else if (input == 'b') {
//     console.log('Blue Value:', value);
//     blue_R.value = value;
//   }

//   document.getElementById('result-color').style.backgroundColor =
//     'rgb(' + red_R.value + ',' + green_R.value + ',' + blue_R.value + ')';
// }
