/* US NUMERO 1 et  2 
VERIFICATION DE LA RECEPTION DES DONNES SOUMISES PAR LE FORMULAIRE
*/


let resultFormProfile = document.getElementById('resultFormProfile');
let resultFormProfessional = document.getElementById('resultFormProfessional');
let myButton = document.getElementById('buttonSubmit');
let trancheAge = document.getElementsByName('boutonradio1');
let gender = document.getElementsByName('gender');
let etude = document.getElementsByName('etude');
let situationPro = document.getElementsByName('situationPro');
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let CP = document.getElementById("CP");
let validEmail = document.getElementById("validEmail");
let champOb = 'Champs obligatoire';

// let nameProfil = document.getElementById('nom').value;
// let situationProText = document.getElementById('situationProText').value;

//FONCTION DE VALIDATION DE L'EMAIL, JAI AUSSI INTEGRE LA VALIDATION QUE LE EMAIL NEST PAS VIDE

const Emailvalidation = () => {
    // let email 	= document.formulaire.EMAIL.value;

    let verif = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
    if (email.value.length===0)
        validEmail.textContent = champOb;
    else if (verif.exec(email.value) == null) //email.value.length!==0
    {
        validEmail.textContent = "Email non valide";
        return false;
    }
    else {
        return true;
    }

}

//ESSAYER DE CREER LES FONCTIONS POUR LES CHAMPS NOMS PRENOMS CODEPOSTAL 

document.addEventListener('DOMContentLoaded', () => {
    console.log('demarrage du fichier');
    //JE FAIS DISPARAITRE LES DIV
    document.getElementById('resultFormProfileStyle').classList.remove('block');
    document.getElementById('resultFormProfileStyle').classList.add('none');
    document.getElementById('resultFormProfessionalStyle').classList.remove('block');
    document.getElementById('resultFormProfessionalStyle').classList.add('none');

    myButton.addEventListener('click', e => {
        e.preventDefault();
        //JE FAIS APPARAITRE LES DIV 
        document.getElementById('resultFormProfileStyle').classList.remove('none');
        document.getElementById('resultFormProfileStyle').classList.add('block');
        document.getElementById('resultFormProfessionalStyle').classList.remove('none');
        document.getElementById('resultFormProfessionalStyle').classList.add('block');
        
        resultFormProfile.textContent += 'nom: ' + document.getElementById('nom').value;
        resultFormProfile.textContent += ', prenom: ' + document.getElementById('prenom').value;
        resultFormProfile.textContent += ', email : ' + document.getElementById('email').value;
        resultFormProfile.textContent += ', CP : ' + document.getElementById('CP').value;
        for(i =0; i<trancheAge.length;i++)
        {
            if(trancheAge[i].checked)
            resultFormProfile.textContent += ", tranche d'age : "  + trancheAge[i].value;
        }
        /* ---------------------------------------------------------------------------------- 
        C'est un bouton radio, je créer une boucle pour récuperer la valeur de mon bouton grâce à la méthode checked. resultFormProfile.textConten += ', ' + document.getElementsByName('boutonradio1');
        -------------------------------------------------------------------------------------
        */
        for(i =0; i<gender.length;i++)
        {
            if(gender[i].checked)
            resultFormProfile.textContent += ', genre : ' + gender[i].value;
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
                resultFormProfessional.textContent += ', niveau etude : ' + etude[i].value;
        }
    
        // le domaine d'etude est obligatoirement renseigné
    
        resultFormProfessional.textContent += ', domaine etude : ' + document.getElementById('domEtude').value;
        
        for (i = 0; i < situationPro.length; i++) {
            if (situationPro[i].checked)
                resultFormProfessional.textContent += ', situation Pro : ' + situationPro[i].value;
        }
    
        // Pour afficher le contenue du text area uniquement s'il y a une valeur.
    
        if(situationProText.value.length>0){
            console.log('after if situationProText.value = "' + situationProText.value + '"');
            // JAI RAJOUTE DES GUILLEMETS POUR VERIFIER QU'IL Y AVAIT BIEN DU CONTENU
            resultFormProfessional.textContent += ', situation pro texte :  ' + situationProText.value;
        
        }
        else
            console.log('after else situationProText.value = ' + situationProText.value);
        // SYSTEMATIQUEMENT RAJOUTER DU CONSOLE LOG LORSQU'IL Y A UN BUG. 
        
        resultFormProfessional.textContent += ', Poste avant reconversion : ' + document.getElementById('posteAvantReconv').value;
    
        /*
        ---------------------------------------------------------------------------------
        USER STORY 3 verification des champs du formulaire
        ---------------------------------------------------------------------------------
        */ 
        
        let validName = document.getElementById("validName");
        let validPrenom = document.getElementById("validPrenom");
        let validCP = document.getElementById("validCP");
    
        /*
        -----------------------------------------------------------------------------------------------
        Si le champs est vide et s'il ne respecte pas les caractères attendus.
        ESSAYER DE CREER UNE FONCTION QUI FAIT LE TAFF CAR ON UTILISE 4 FOIS LA MEME CHOSE
        -----------------------------------------------------------------------------------------------
        */

        let regexCarac = /^[a-zA-Z-\s]+$/;
        let regexNumber = /^[0-9]+$/;
        
        
        if (nom.value.length===0) {
            validName.textContent = champOb;
        }
        else if(regexCarac.test(nom.value) == false){
            console.log('after else if myRegex.text');
            validName.textContent = "le nom doit comporter des lettres et des tirets uniquement";
        }

        if (prenom.value.length===0) {
            validPrenom.textContent = champOb;
        }
        else if(regexCarac.test(prenom.value) == false){
            console.log('after else if myRegex.text');
            validPrenom.textContent = "le prénom doit comporter des lettres et des tirets uniquement";
        }

        if (CP.value.length===0) {
            validCP.textContent = champOb;
        }
        else if(regexNumber.test(CP.value) == false){
            console.log('after else if myRegex.text');
            validCP.textContent = "le code postal doit comporter des chiffres uniquement";
        }

        //
        //Si le bouton radio n'est pas coché
        //
    
        //Pour la tranche d'age
    
        let emptyCase = document.getElementById("emptyCase");
        
        for(i= 0; i<trancheAge.length; i++) {
            if(!trancheAge[i].checked){
                console.log('after if trancheAge[i].checked');
                emptyCase.textContent = 'Cette question est obligatoire';
            }
            else{
                console.log('je sors de la boucle');
                return false;
            }
        }
    
        //Pour le gender 
    
        let emptyCaseGender = document.getElementById("emptyCaseGender");
        
        for(i= 0; i<gender.length; i++) {
            if(!gender[i].checked){
                console.log('after if gender[i].checked');
                emptyCaseGender.textContent = 'Cette question est obligatoire';
            }
            else{
                console.log('je sors de la boucle');
                return false;
            }
        }

        //VALIDATION DE L'EMAIL PAR LA FONCTION

        Emailvalidation();
        
        
        
    });
});











