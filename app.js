// https://calculator.swiftutors.com/potential-difference-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const potentialDifferenceRadio = document.getElementById('potentialDifferenceRadio');
const currentRadio = document.getElementById('currentRadio');
const resistanceRadio = document.getElementById('resistanceRadio');

let potentialDifference;
let current = v1;
let resistance = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

potentialDifferenceRadio.addEventListener('click', function() {
  variable1.textContent = '(I) Current (amp)';
  variable2.textContent = '(R) Resistance (ohm)';
  current = v1;
  resistance = v2;
  result.textContent = '';
});

currentRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Potential Difference (volt)';
  variable2.textContent = '(R) Resistance (ohm)';
  potentialDifference = v1;
  resistance = v2;
  result.textContent = '';
});

resistanceRadio.addEventListener('click', function() {
  variable1.textContent = '(V) Potential Difference (volt)';
  variable2.textContent = '(I) Current (amp)';
  potentialDifference = v1;
  current = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(potentialDifferenceRadio.checked)
    result.textContent = `Potential Difference = ${computePotentialDifference().toFixed(2)} volt`;

  else if(currentRadio.checked)
    result.textContent = `Current = ${computeCurrent().toFixed(2)} amp`;

  else if(resistanceRadio.checked)
    result.textContent = `Resistance = ${computeResistance().toFixed(2)} ohm`;
})

// calculation

function computePotentialDifference() {
  return Number(current.value) * Number(resistance.value);
}

function computeCurrent() {
  return Number(potentialDifference.value) / Number(resistance.value);
}

function computeResistance() {
  return Number(potentialDifference.value) / Number(current.value);
}