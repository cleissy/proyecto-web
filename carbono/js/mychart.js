var myChart;
const personas = document.querySelector('div.contentcalc input[name="PERSONAS"]');
var personasVal = [];
var personasValL;
const electricidad = document.querySelector('div.contentcalc input[name="ELECTRICIDAD"]');
var electricidadVal = [];
var electricidadValL;
const gasNat = document.querySelector('div.contentcalc input[name="GAS_NATURAL"]');
var gasNatVal = [];
var gasNatValL;
const gasBut = document.querySelector('div.contentcalc input[name="GAS_BUTANO"]');
var gasButVal = [];
var gasButValL;
const gasolina = document.querySelector('div.contentcalc input[name="GASOLINA"]');
var gasolinaVal = [];
var gasolinaValL;
const diesel = document.querySelector('div.contentcalc input[name="DIESEL"]');
var dieselVal = [];
var dieselValL;
const transportes = document.querySelector('div.contentcalc input[name="TRANSPORTES"]');
var transportesVal = [];
var transportesValL;
const viajes = document.querySelector('div.contentcalc input[name="VIAJES"]');
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
    var electricidadco2= ((((electricidad.value /30)/24)/0.25407)*0.357)*personas.value;
    electricidadVal.push(electricidadco2);
    electricidadValL = electricidadVal.slice(-1).pop();
    doChart();
}
gasNat.onchange = function(){
    if(window.myChart instanceof Chart)
    {
    window.myChart.destroy();
    }
    var gasNatco2= ((gasNat.value-8.45)/0.05076)*0.252;
    gasNatVal.push(gasNatco2);
    gasNatValL = gasNatVal.slice(-1).pop();
    doChart();
}
gasBut.onchange = function(){
    if(window.myChart instanceof Chart)
    {
    window.myChart.destroy();
    }
    var gasButco2= (gasBut.value) *40.386;
    gasButVal.push(gasButco2);
    gasButValL = gasButVal.slice(-1).pop();
    doChart();
}
gasolina.onchange = function(){
    if(window.myChart instanceof Chart)
    {
    window.myChart.destroy();
    }
    var gasolinaco2= (gasolina.value /1.5)*0.023;
    gasolinaVal.push(gasolinaco2);
    gasolinaValL = gasolinaVal.slice(-1).pop();
    doChart();
}
diesel.onchange = function(){
    if(window.myChart instanceof Chart)
    {
    window.myChart.destroy();
    }
    var dieselco2= (diesel.value /1.36)*0.0261;
    dieselVal.push(dieselco2);
    dieselValL = dieselVal.slice(-1).pop();
    doChart();
}
transportes.onchange = function(){
    if(window.myChart instanceof Chart)
    {
    window.myChart.destroy();
    }
    transportesco2= ((((transportes.value *35)/100)*0.544)/50);
    transportesVal.push(transportesco2);
    transportesValL = transportesVal.slice(-1).pop();
    doChart();
}
viajes.onchange = function(){
    if(window.myChart instanceof Chart)
    {
    window.myChart.destroy();
    }
    viajesco2= (viajes.value * 0.285);
    viajesVal.push(viajesco2);
    viajesValL = viajesVal.slice(-1).pop();
    doChart();
}
function doChart() {
var data = [
    {x: 'Electricidad', y: {value: electricidadValL}},
    {x: 'Gas Natural', y: {value: gasNatValL}},
    {x: 'Gas Butano', y: {value: gasButValL}},
    {x: 'Gasolina', y: {value: gasolinaValL}},
    {x: 'Diesel', y: {value: dieselValL}},
    {x: 'Transportes', y: {value: transportesValL}},
    {x: 'Viajes', y: {value: viajesValL}},
    {x: 'Total', y: {value: electricidadValL + gasNatValL + gasButValL + gasolinaValL + dieselValL + transportesValL + viajesValL}}
];
const ctx = document.getElementById('myChart');
 myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Electricidad', 'Gas Natural', 'Gas Butano', 'Gasolina', 'Diesel', 'Transportes', 'Viajes'],
        datasets: [{
            label: 'Kg de CO2',
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