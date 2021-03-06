const defaultGradient = [
    {step: 11, color: '#E50097'},
    {step: 10, color: '#E10050'},
    {step: 9, color: '#DD000D'},
    {step: 8, color: '#D93400'},
    {step: 7, color: '#D57300'},
    {step: 6, color: '#D2B000'},
    {step: 5, color: '#B1CE00'},
    {step: 4, color: '#71CA00'},
    {step: 3, color: '#33C600'},
    {step: 2, color: '#00C207'},
    {step: 1, color: '#00BF41'}
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

const rangeTo10 = [
    {step: 11, value: 10},
    {step: 10, value: 9},
    {step: 9, value: 8},
    {step: 8, value: 7},
    {step: 7, value: 6},
    {step: 6, value: 5},
    {step: 5, value: 4},
    {step: 4, value: 3},
    {step: 3, value: 2},
    {step: 2, value: 1},
    {step: 1, value: 0}
]

const rangeTo1 = [
    {step: 11, value: 1},
    {step: 10, value: 0.9},
    {step: 9, value: 0.8},
    {step: 8, value: 0.7},
    {step: 7, value: 0.6},
    {step: 6, value: 0.5},
    {step: 5, value: 0.4},
    {step: 4, value: 0.3},
    {step: 3, value: 0.2},
    {step: 2, value: 0.1},
    {step: 1, value: 0}
]

const rangeTo100Percent = [
    {step: 11, value: '100%'},
    {step: 10, value: '90%'},
    {step: 9, value: '80%'},
    {step: 8, value: '70%'},
    {step: 7, value: '60%'},
    {step: 6, value: '50%'},
    {step: 5, value: '40%'},
    {step: 4, value: '30%'},
    {step: 3, value: '20%'},
    {step: 2, value: '10%'},
    {step: 1, value: '1%'}
]

const dataToRangeMapping = [
    {data: 'Лікарі, які вже працюють з пацієнтами з COVID-19', range: rangeTo500},
    {data: 'Всі лікарі, які можуть бути задіяні з COVID-19 (усі спеціальності)', range: rangeTo1000},
    {data: 'Зайнято загалом хворими з COVID-19', range: rangeTo1000},
    {data: 'Зайнято загалом хворими з COVID-19|Лікарі, які вже працюють з пацієнтами з COVID-19', range: rangeTo10},
    {data: 'Лікарі, які вже працюють з пацієнтами з COVID-19|Зайнято загалом хворими з COVID-19', range: rangeTo1},
    {data: 'Зайнято загалом хворими з COVID-19|Загалом, ліжок виділено для госпіталізації хворих з COVID-19', range: rangeTo100Percent},
    {data: 'Зайнято реанімаційні / інтенсивної терапії|Реанімаційні / Інтенсивної терапії', range: rangeTo100Percent}
]