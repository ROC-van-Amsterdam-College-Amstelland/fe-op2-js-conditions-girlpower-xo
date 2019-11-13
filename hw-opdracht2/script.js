function zoekUit() {
    var aantal = document.getElementById("aantal").value;
    var duur =  document.getElementById("duur").value;
    var streaming = document.getElementById("streaming").value;

    var abonnement ="eenvoudig";
//als je met meer dan 2 personen kijkt en meer dan 3 uur per dag, dan is het beste abonnement familie
//pseudocode: als (aantal==3 en duur>3 dan abonnement ="familie")
var getal1= 3;

if(aantal==getal1){
    function onclick(){
        var ingevuld_getal = document.getElementById("aantal").value;
    
        if (ingevuld_getal >getal1) {
            document.getElementById("resulaat").style.backgroundColor= 'famillie';
        }
        if (ingevuld_getal>getal1) {
            document.getElementById("resultaat").style.backgroundColor = 'famillie';
        }
    





//als je met 2 of meer personen kijkt of al een abonnement hebt, dan is het beste abonnement uitgebreid
//pseudocode: 

//als je met 2 personen kijkt of meer dan 4 uur per dag dan is het abonnement standaard
//pseudocode: 

// als je met 1 persoon kijkt en 6 of meer uur per dag dan is het abonnement uitgebreid
//pseudocode: 


//toon het type abonnement op het scherm

