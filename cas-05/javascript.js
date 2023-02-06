//Osluskivaci
//element.addEventListener('ime dogadjaja', obrada)
//elemnt.removeEventListener('ime dogadjaja', obrada)
console.log("Uspeli smo");

let kvadrat = document.getElementById("kvadrat");//vraca null ukoliko el ne postoji
let originalna_velicina = 50;
let velicina = 50;
let korak = 30;

function smanji_kvadratic(){
    if(velicina - korak < originalna_velicina){
        console.log("Ne sme da bude manji");
        return;
    }
    
    velicina = velicina - korak;
    kvadrat.style.width = velicina+"px";
    kvadrat.style.height = velicina+"px";

    
}

function povecaj_kvadratic(){
    velicina = velicina + korak;
    kvadrat.style.width = velicina+"px";
    kvadrat.style.height = velicina+"px";
}

if(kvadrat != null){
    let smanji = document.getElementById("smanji");
    let povecaj = document.getElementById("povecaj");
    
    if(smanji!=null)
    {
        smanji.addEventListener("click", smanji_kvadratic);
    }
    
    if(povecaj!=null){
        povecaj.addEventListener("click", povecaj_kvadratic);
    }
}else
    console.log("Ne postoji takav element");
