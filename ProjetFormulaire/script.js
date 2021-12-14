/* US NUMERO 1, puis 2 
VERIFICATION DE LA RECEPTION DES DONNES SOUMISES PAR LE FORMULAIRE
*/

console.log('demarrage du fichier');


let myresult = document.getElementById('myresult');
let myresult2 = document.getElementById('myresult2');
let myButton = document.getElementById('buttonSubmit');
let trancheAge = document.getElementsByName('boutonradio1');
let genre = document.getElementsByName('genre');
let etude = document.getElementsByName('etude');
let situationPro = document.getElementsByName('situationPro');
// let situationProText = document.getElementById('situationProText').value;
//Jai enlevé la variable situationProText pourtant, l'element est quand meme recuperé 


myButton.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Formulaire envoyé');
    myresult.textContent += 'nom: ' + document.getElementById('nom').value;
    myresult.textContent += ', prenom: ' + document.getElementById('prenom').value;
    myresult.textContent += ', email : ' + document.getElementById('email').value;
    myresult.textContent += ', CP : ' + document.getElementById('CP').value;
    for(i =0; i<trancheAge.length;i++)
    {
        if(trancheAge[i].checked)
        myresult.textContent += ", tranche d'age : "  + trancheAge[i].value;
    }
    /* ---------------------------------------------------------------------------------- 
    C'est un bouton radio, je créer une boucle pour récuperer la valeur de mon bouton grâce à la méthode checked. myresult.textConten += ', ' + document.getElementsByName('boutonradio1');
    -------------------------------------------------------------------------------------
    */
    for(i =0; i<genre.length;i++)
    {
        if(genre[i].checked)
        myresult.textContent += ', genre : ' + genre[i].value;
    }
    /* ----------------------------------------------------------------------------------
    J'ai créer ma boucle sur cet exemple :
    var ele = document.getElementsByName('gender');
        for(i = 0; i < ele.length; i++) {
             if(ele[i].checked)
             document.getElementById("result").innerHTML
                     = "Gender: "+ele[i].value;
    -------------------------------------------------------------------------------------

    JAURAI PU LE FAIRE AVEC UN TAG NAME SUR LES INPUT POUR RECUPERER TOUS LES INPUT 

    function displayRadioValue() {
            document.getElementById("result").innerHTML = "";
            var ele = document.getElementsByTagName('input');
              
            for(i = 0; i < ele.length; i++) {
                  
                if(ele[i].type="radio") {
                  
                    if(ele[i].checked)
                        document.getElementById("result").innerHTML
                                += ele[i].name + " Value: "
                                + ele[i].value + "<br>";
                }
            }
        }

    */

    for (i = 0; i < etude.length; i++) {
        if (etude[i].checked)
            myresult2.textContent += ', niveau etude : ' + etude[i].value;
    }

    myresult2.textContent += ', domaine etude : ' + document.getElementById('domEtude').value;
    
    for (i = 0; i < situationPro.length; i++) {
        if (situationPro[i].checked)
            myresult2.textContent += ', situation Pro : ' + situationPro[i].value;
    }

    // Pour afficher le contenue du text area uniquement s'il y a une valeur.

    if(situationProText.value){
        console.log('after if situationProText.value = "' + situationProText.value + '"');
        // JAI RAJOUTE DES GUILLEMETS POUR VERIFIER QU'IL Y AVAIT BIEN DU CONTENU
        myresult2.textContent += ', situation pro texte :  ' + situationProText.value;
    
    }
    else
        console.log('after else situationProText.value = ' + situationProText.value);
    // SYSTEMATIQUEMENT RAJOUTER DU CONSOLE LOG LORSQU'IL Y A UN BUG. 
    
    myresult2.textContent += ', Poste avant reconversion : ' + document.getElementById('posteAvantReconv').value;
});


