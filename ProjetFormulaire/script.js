/* US NUMERO 1, puis 2 
VERIFICATION DE LA RECEPTION DES DONNES SOUMISES PAR LE FORMULAIRE
*/

console.log('demarrage du fichier');

let myresult = document.getElementById('myResult');
let myButton = document.getElementById('buttonSubmit');
let trancheAge = document.getElementsByName('boutonradio1');
let genre = document.getElementsByName('genre');
let etude = document.getElementsByName('etude');
let situationPro = document.getElementsByName('situationPro');
// let situationProText = document.getElementById('situationProText').value;


myButton.addEventListener('click', function() {
    console.log('onClick submit');
    myresult.textContent = 'nom: ' + document.getElementById('nom').value;
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
            myresult.textContent += ', niveau etude : ' + etude[i].value;
    }

    myresult.textContent += ', domaine etude : ' + document.getElementById('domEtude').value;
    
    for (i = 0; i < situationPro.length; i++) {
        if (situationPro[i].checked)
            myresult.textContent += ', situation Pro : ' + situationPro[i].value;
    }
    // if(situationProText)
    //     myresult.textContent += 'situation pro texte :  ' + situationProText;
    
    // Il faut trouver une façon de faire apparaitre la situationProText uniquement s'il y a une valeur dedans
    myresult.textContent += ', ' + document.getElementById('situationProText').value;
    
    myresult.textContent += 'Poste avant reconversion : ' + document.getElementById('posteAvantReconv').value;
});



// myButton.addEventListener('click', function() {
//     console.log('onClick submit');
//     myresult2.textContent = 'nom: ' + document.getElementById('nom').value;
//     myresult2.textContent += ', prenom: ' + document.getElementById('prenom').value;
//     myresult2.textContent += ', email : ' + document.getElementById('email').value;
//     myresult2.textContent += ', CP : ' + document.getElementById('CP').value;
//     for(i =0; i<trancheAge.length;i++)
//     {
//         if(trancheAge[i].checked)
//         myresult2.textContent += ", tranche d'age : "  + trancheAge[i].value;
//     }
// });

