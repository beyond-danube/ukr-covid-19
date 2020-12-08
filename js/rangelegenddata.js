const lienarGradientBluePurple = [
    {step: 11, color: '#8800A3'},
    {step: 10, color: '#A000A3'},
    {step: 9, color: '#9B15AD'},
    {step: 8, color: '#962AB7'},
    {step: 7, color: '#913FC1'},
    {step: 6, color: '#8C54CB'},
    {step: 5, color: '#8869D6'},
    {step: 4, color: '#837EE0'},
    {step: 3, color: '#7E93EA'},
    {step: 2, color: '#79A8F4'},
    {step: 1, color: '#75BEFF'}
]
  
const rangeTo500 = [
    {step: 11, value: 500},
    {step: 10, value: 450},
    {step: 9, value: 400},
    {step: 8, value: 350},
    {step: 7, value: 300},
    {step: 6, value: 250},
    {step: 5, value: 200},
    {step: 4, value: 150},
    {step: 3, value: 100},
    {step: 2, value: 50},
    {step: 1, value: 1}
]

const rangeTo1000 = [
    {step: 11, value: 1000},
    {step: 10, value: 900},
    {step: 9, value: 800},
    {step: 8, value: 700},
    {step: 7, value: 600},
    {step: 6, value: 500},
    {step: 5, value: 400},
    {step: 4, value: 300},
    {step: 3, value: 200},
    {step: 2, value: 100},
    {step: 1, value: 1}
]

const dataToRangeMapping = [
    {data: 'Лікарі, які вже працюють з пацієнтами з COVID-19', range: rangeTo500},
    {data: 'Всі лікарі, які можуть бути задіяні з COVID-19 (усі спеціальності)', range: rangeTo1000},
    {data: 'Зайнято загалом хворими з COVID-19', range: rangeTo1000}
]