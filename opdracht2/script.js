/* Opdracht 2 */

/* A) Schrijf code waarmee je ingevulde waarde uit het invulveld 'ophaalt'
 *    maak gebruik van document.getElementById().value; 
 */

/* jouw code hieronder-->> */


/* B) Schrijf code waarmee je het ingevulde getal vergelijkt (condition) met de stemgerechtigde leeftijd van 18 jaar.
 * Als de leeftijd groter is dan 18 dan verander je de achtergrondkleur van de site met:
                    document.getElementByTagName('body').style.backgroundColor = 'purple'
 */

/* jouw code hieronder-->> */

document.getElementById("main").innerHTML;

var getal2= 18;


function check(){
    var ingevuld_getal = document.getElementById("leeftijd").value;

    if (ingevuld_getal >getal2) {
        document.getElementById("main").style.backgroundColor= 'purple';
    }
    if (ingevuld_getal<getal2) {
        document.getElementById("main").style.backgroundColor = 'green'
    }
}


/* C) Schrijf code waarmee je het ingevulde getal vergelijkt (condition) met de stemgerechtigde leeftijd van 18 jaar.
 * Als de leeftijd kleiner is dan 18 dan verander je de achtergrondkleur van de site met:
                    document.getElementByTagName('body').style.backgroundColor = 'green'
 */
