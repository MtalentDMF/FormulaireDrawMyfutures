/* US NUMERO 1, puis 2 
VERIFICATION DE LA RECEPTION DES DONNES SOUMISES PAR LE FORMULAIRE
*/


let myresult = document.getElementById('myresult');
let myresult2 = document.getElementById('myresult2');
let myButton = document.getElementById('buttonSubmit');
let trancheAge = document.getElementsByName('boutonradio1');
let genre = document.getElementsByName('genre');
let etude = document.getElementsByName('etude');
let situationPro = document.getElementsByName('situationPro');
// let situationProText = document.getElementById('situationProText').value;
//Jai enlevé la variable situationProText pourtant, l'element est quand meme recuperé 

//POUR FAIRE DISPARAITRE UN ELEMENT DE MA PAGE HTML AU CHARGEMENT DE LA PAGE
document.addEventListener('DOMContentLoaded', () => {
    console.log('demarrage du fichier');
    document.getElementById('resultatAttendu').style.display = "none";
    document.getElementById('resultatAttendu2').style.display = "none";
    console.log('after display none');
});

myButton.addEventListener('click', e => {
    e.preventDefault();
    //JE FAIS APPARAITRE LES DIV 
    document.getElementById('resultatAttendu').style.display = "block";
    document.getElementById('resultatAttendu2').style.display = "block";
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

    // USER STORY 3 
    
    let champOb = 'Champs obligatoire';
    let nom = document.getElementById("nom");
    let prenom = document.getElementById("prenom");
    let email = document.getElementById("email");
    let CP = document.getElementById("CP");
    let validNom = document.getElementById("validNom");
    let validPrenom = document.getElementById("validPrenom");
    let validEmail = document.getElementById("validEmail");
    let validCP = document.getElementById("validCP");


    //Si le champs est vide

    if (nom.value==false) {
        console.log('after if nom.value==false');
        validNom.textContent = champOb;
    }
    if (prenom.value==false) {
        console.log('after if prenom.value==false');
        validPrenom.textContent = champOb;
    }
    if (email.value==false) { 
        console.log('after if email.value==false');
        validEmail.textContent = champOb;
    }
    if (CP.value==false) {
        console.log('after if CP.value==false');
        validCP.textContent = champOb;
    }

    //Si le bouton radio n'est pas coché

    // let cocheCase = document.getElementById("cocheCase");
 
    // for (i = 0; i < trancheAge.length; i++) {
    //     console.log('after for trancheAge cocheCase');
    //     if (!trancheAge[i].checked) {
    //         console.log('after if cocheCase')
    //         cocheCase.textContent = 'Veuillez cocher une case';
    //     }
    // }

    // Il rentre dans la boucle et affiche systematiquement cocher une case dés qu'il y a une case non coché. Il faudrait qu'il sorte de la boucle immédiatement apres avoir trouvé une case cochée.

    
    validNom.textContent = 'Veuillez-saisir des caractères uniquements';

    validPrenom.textContent = 'Veuillez-saisir des caractères uniquements';

    validCP.textContent = "Veuillez saisir un Code postal valide"

    validEmail.textContent = "L'adresse email n'est pas valide";
});









