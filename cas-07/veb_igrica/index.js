var korpa = $('#korpa'),
    jaje1 = $('#jaje1'),
    jaje2 = $('#jaje2'),
    jaje3 = $('#jaje3'),
    pod = $('#pod'),
    poeni = $('#points'),
    trenutni_poeni = 0,
    life = 3,
    life_span=$('#life');



$('#restart').on({click:function(){
	location.reload();
	},mouseenter:function(){
		$(this).css('cursor','grab');
}});
var audioCatch = document.getElementById("catch");
var audioBreak = document.getElementById("break");
var manCought = document.getElementById("cought");
$(document).on('mousemove', function (e) {
    korpa.css('left', e.pageX);
});

jaje1.css('visibility','visible');
jaje2.css('visibility','visible');
jaje3.css('visibility','visible');
function egg_down(egg) {
    egg_current_position = parseInt(egg.css('top'));
    egg.css('top', egg_current_position + 5);
}

$('#sunce').hover(function(){
			$('#sunce').css('background-image',
'url("./slike/sun2.png")');
		}, function(){
			$('#sunce').css('background-image',
'url("./slike/sun1.png")');}
);


function jaje_udarilo_pod(egg){
	if (collision(egg,pod)){
		audioBreak.play();
		decrement_life();
		return true;
	}
	return false;
}

function postavi_jaje(egg){
	egg.css('top', '8%');
} 

function jaje_udarilo_korpu(egg){
	if (collision(egg,korpa)){
		trenutni_poeni++;
		poeni.text(trenutni_poeni);		
		audioCatch.play();
		return true;
	}
	return false;
}

function decrement_life(){
	life--;
	life_span.text(life);
	if (life == 1)
		manCought.play();
	return life;
}
/*
 Ova funkcija proverava da li su se dva predmeta sudarila.
 Za to se koriste metode offset i outerHeight/outerWidth .
 Metoda offset vraca koordinate gornjeg levog ugla elementa.
 OuterHeight/OuterWidth vracaju vrednost visine i duzine 
 celog elementa (content, padding, border i margin zajedno).
 Ideja je da se ukljuce gornji levi ugao nekog elementa i 
 donji desni ugao nekog elementa. Ukoliko se oni poklapaju ili 
 prelaze tada se desila kolizija.
 
 */
function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
}

