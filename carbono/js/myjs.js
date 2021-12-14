
$('.carousel-control-next').click(function() {
    if (document.getElementById('PERSONAS').value>0) {}
    else {
        alert('¿?');
        $('#carouselIndicators').carousel({ pause: true, interval: 0 });
    }
});

var butt01 = document.getElementsByClassName(
    "btn btn-primary","button",document.getElementById("butt01")
);

    butt01[0].onclick = function(){
        if (document.getElementById('PERSONAS').value>0) {
            $("#carouselIndicators").carousel('next');
        }
        else alert('¿Cuántas personas?');
    }

var butt02 = document.getElementsByClassName(
    "btn btn-primary","button",document.getElementById("butt02")
);

    butt02[1].onclick = function(){
        if (document.getElementById('ELECTRICIDAD').value>-1) {
            $("#carouselIndicators").carousel('next');
        }
        else alert('¿Cuánta Electricidad?');
    }

var butt03 = document.getElementsByClassName(
    "btn btn-primary","button",document.getElementById("butt03")
);

    butt03[2].onclick = function(){
        if (document.getElementById('GAS_NATURAL').value>-1) {
            $("#carouselIndicators").carousel('next');
        }
        else alert('¿Cuánto Gas Natural?');
    }

var butt04 = document.getElementsByClassName(
    "btn btn-primary","button",document.getElementById("butt04")
);

    butt04[3].onclick = function(){
        if (document.getElementById('GAS_BUTANO').value>-1) {
            $("#carouselIndicators").carousel('next');
        }
        else alert('¿Cuánto Gas Butano?');
    }

var butt05 = document.getElementsByClassName(
    "btn btn-primary","button",document.getElementById("butt05")
);

    butt05[4].onclick = function(){
        if (document.getElementById('GASOLINA').value>-1) {
            $("#carouselIndicators").carousel('next');
        }
        else alert('¿Cuánta Gasolina gastas?');
    }

var butt06 = document.getElementsByClassName(
    "btn btn-primary","button",document.getElementById("butt06")
);

    butt06[5].onclick = function(){
        if (document.getElementById('TRANSPORTES').value>-1) {
            $("#carouselIndicators").carousel('next');
        }
        else alert('¿Cuántos transportes públicos usas?');
    }

var butt07 = document.getElementsByClassName(
    "btn btn-primary","button",document.getElementById("butt07")
);

    butt07[6].onclick = function(){
        if (document.getElementById('VIAJES').value>-1) {
            $("#carouselIndicators").carousel('next');
        }
        else alert('¿Cuántos viaje en avión?');
    }

/*
for (var i=0; i < butt.length; i++) {
    butt[i].onclick = function(){
        alert("Finaly!");
    }
};
*/