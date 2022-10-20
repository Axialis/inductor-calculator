let coilDiameter = 0;
let coilLenght = 0;
let coilWireDiameter = 0;
let coilTurns = 0;

const maxDiameter = document.getElementById('maxDiameter');
const minDiameter = document.getElementById('minDiameter');
const minLenght = document.getElementById('minLenght');
const maxLenght = document.getElementById('maxLenght');
const minWireDiameter = document.getElementById('minWireDiameter');
const maxWireDiameter = document.getElementById('maxWireDiameter');


const innerDiameter = document.getElementById('innerDiameter');
const lenght = document.getElementById('lenght');
const wireDiameter = document.getElementById('wireDiameter');


const currentDiameter = document.getElementById('currentDiameter');
const currentLenght = document.getElementById('currentLenght');
const currentWireDiameter = document.getElementById('currentWireDiameter');

const turnsCount = document.getElementById('turnsCount');
const inductorValue = document.getElementById('inductorValue');


function countWireTurns() {
    turnsCount.innerText = `${Math.floor(Number(lenght.value)/Number(wireDiameter.value))}`
}

function calculateInductivity() {
    const val = (Math.pow(coilTurns, 2) * (coilDiameter + coilWireDiameter))/ (1000 * (coilLenght/(coilDiameter + coilWireDiameter) + 0.45));
    inductorValue.innerText = `${val.toFixed(4)}  μH`
}

function getMainValue() {
    coilDiameter = Number(innerDiameter.value);
    coilLenght = Number(lenght.value);
    coilWireDiameter = Number(wireDiameter.value);
    coilTurns = Math.floor(Number(lenght.value)/Number(wireDiameter.value));
}

function reInit() {
    innerDiameter.max = `${maxDiameter.value}`;
    innerDiameter.min = `${minDiameter.value}`;
    innerDiameter.value = `${(Number(maxDiameter.value) - Number(minDiameter.value)) /2}`
    
    lenght.min = `${minLenght.value}`;
    lenght.max = `${maxLenght.value}`;
    lenght.value = `${(Number(maxLenght.value) - Number(minLenght.value))/2}`;
    
    wireDiameter.max = `${maxWireDiameter.value}`;
    wireDiameter.min = `${minWireDiameter.value}`;
    wireDiameter.value = `${(Number(maxWireDiameter.value) - Number(minWireDiameter.value))/2}`;
       
    currentDiameter.innerText = `${innerDiameter.value} mm`;
    currentLenght.innerText = `${lenght.value} mm`;
    currentWireDiameter.innerText = `${wireDiameter.value} mm`;
}

function listenering() {
    innerDiameter.addEventListener('input', () => {
        currentDiameter.innerText = `${innerDiameter.value} mm`;
        getMainValue();
        calculateInductivity();
    })
    
    lenght.addEventListener('input', () => {
        currentLenght.innerText = `${lenght.value} mm`;
        countWireTurns();
        getMainValue();
        calculateInductivity();
    })
    
    wireDiameter.addEventListener('input', () => {
        currentWireDiameter.innerText = `${wireDiameter.value} mm`;
        countWireTurns();
        getMainValue()
        calculateInductivity();
    })
    
    maxDiameter.addEventListener('input', () => {
        reInit();
    })
    
    minDiameter.addEventListener('input', () => {
        reInit();
    })
    
    minLenght.addEventListener('input', () => {
        reInit();
    })
    maxLenght.addEventListener('input', () => {
        reInit();
    })
    minWireDiameter.addEventListener('input', () => {
        reInit();
    })
    maxWireDiameter.addEventListener('input', () => {
        reInit();
    })
}

listenering();
reInit();
countWireTurns();
getMainValue();
calculateInductivity();

