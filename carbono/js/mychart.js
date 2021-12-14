var myChart;
const personas = document.querySelector('div.content input[name="PERSONAS"]');
var personasVal = [];
var personasValL;
const electricidad = document.querySelector('div.content input[name="ELECTRICIDAD"]');
var electricidadVal = [];
var electricidadValL;
const gasNat = document.querySelector('div.content input[name="GAS_NATURAL"]');
var gasNatVal = [];
var gasNatValL;
const gasBut = document.querySelector('div.content input[name="GAS_BUTANO"]');
var gasButVal = [];
var gasButValL;
const gasolina = document.querySelector('div.content input[name="GASOLINA"]');
var gasolinaVal = [];
var gasolinaValL;
const transportes = document.querySelector('div.content input[name="TRANSPORTES"]');
var transportesVal = [];
var transportesValL;
const viajes = document.querySelector('div.content input[name="VIAJES"]');
var viajesVal = [];
var viajesValL;
personas.onchange = function(){
    if(window.myChart instanceof Chart)
    {
    window.myChart.destroy();
    }
    personasVal.push(personas.value);
    personasValL = personasVal.slice(-1).pop();
    doChart();
}
electricidad.onchange = function(){
    if(window.myChart instanceof Chart)
    {
    window.myChart.destroy();
    }
    electricidadVal.push(electricidad.value);
    electricidadValL = electricidadVal.slice(-1).pop();
    doChart();
}
gasNat.onchange = function(){
    if(window.myChart instanceof Chart)
    {
    window.myChart.destroy();
    }
    gasNatVal.push(gasNat.value);
    gasNatValL = gasNatVal.slice(-1).pop();
    doChart();
}
gasBut.onchange = function(){
    if(window.myChart instanceof Chart)
    {
    window.myChart.destroy();
    }
    gasButVal.push(gasBut.value);
    gasButValL = gasButVal.slice(-1).pop();
    doChart();
}
gasolina.onchange = function(){
    if(window.myChart instanceof Chart)
    {
    window.myChart.destroy();
    }
    gasolinaVal.push(gasolina.value);
    gasolinaValL = gasolinaVal.slice(-1).pop();
    doChart();
}
transportes.onchange = function(){
    if(window.myChart instanceof Chart)
    {
    window.myChart.destroy();
    }
    transportesVal.push(transportes.value);
    transportesValL = transportesVal.slice(-1).pop();
    doChart();
}
viajes.onchange = function(){
    if(window.myChart instanceof Chart)
    {
    window.myChart.destroy();
    }
    viajesVal.push(viajes.value);
    viajesValL = viajesVal.slice(-1).pop();
    doChart();
}
function doChart() {
var data = [
    {x: 'Personas', y: {value: personasValL}},
    {x: 'Electricidad', y: {value: electricidadValL}},
    {x: 'Gas Natural', y: {value: gasNatValL}},
    {x: 'Gas Butano', y: {value: gasButValL}},
    {x: 'Gasolina', y: {value: gasolinaValL}},
    {x: 'Transportes', y: {value: transportesValL}},
    {x: 'Viajes', y: {value: viajesValL}}
];
const ctx = document.getElementById('myChart');
 myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Personas', 'Electricidad', 'Gas Natural', 'Gas Butano', 'Gasolina', 'Transportes', 'Viajes'],
        datasets: [{
            label: 'CO2',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        parsing: {
            xAxisKey: 'x',
            yAxisKey: 'y.value'
        }
    }
});

}