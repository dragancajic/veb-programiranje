/*
 *
 * Kada je dokument spreman pozvace se funkcija povratnog poziva.
 * Ta funkcija ce da poziva requestAnimationFrame funkciju koja imitira
 * protok vremena. Npr. sa setTimeout i setInterval je kombinacija izvrsavanja 
 * neke fje posle nekog intervala i zaustavljanje tog ponavljanja.
 * 
 * U animaciji, filmovima se pojavljuje termin frejm koji moze da se shvati kao
 * jedna scena u nekom trenutku vremena. Kada je rec o igrici igrac mora da ima
 * neki osecaj kretanja i tu ulaze frejmovi. Na svakom frejmu se desava nesto,
 * u ovom slucaju u svakom trenutku jaja padaju i mozda se desi da  u nekom 
 * frejmu jaje padne na pod ili u korpu. Zato svaki put pitamo da li se takvi
 * dogadjaji desili. Ukoliko smo ostali bez zivota zelimo da sve stane i poziva
 * se fja cancelAnimationFrame, ako to nije slucaj onda opet pozivamo fju
 * requestAnimationFrame kako bi se ceo postupak ponovio.
 * 
 * Posto se  main.js i index.js odnose na isti html dokument pa mogu da koriste 
 * fje definisane u jednom ili u drugom. 
 *
 * 
 */
var jaje1 = $('#jaje1');
var jaje2 = $('#jaje2');
var jaje3 = $('#jaje3');

$(function(){

	igrica = function(){
		//console.log(123);
		if (jaje_udarilo_pod(jaje1)||jaje_udarilo_korpu(jaje1))
			postavi_jaje(jaje1);
		else{
			 egg_down(jaje1);
		}
		if (jaje_udarilo_pod(jaje2)||jaje_udarilo_korpu(jaje2))
			postavi_jaje(jaje2);
		else{
			 egg_down(jaje2);
		}
		if (jaje_udarilo_pod(jaje3)||jaje_udarilo_korpu(jaje3))
			postavi_jaje(jaje3);
		else{
			 egg_down(jaje3);
		}
		if (life==0){
			
			$('body').children().hide();
			$('#game_over').show();
			$('#kraj').show();
			$( "#restart" ).slideDown(2000,function(){});
			cancelAnimationFrame(igrica);
		} else{		
		    anim_id= requestAnimationFrame(igrica);
		}
	};	
	anim_id = requestAnimationFrame(igrica);


});
