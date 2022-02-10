/* US NUMERO 1 et  2 
AFFICHAGE DES DONNES SOUMISES PAR LE FORMULAIRE AU BAS DE LA PAGE
*/


let resultFormProfile = document.getElementById('resultFormProfile');
let resultFormProfessional = document.getElementById('resultFormProfessional');
let buttonSubmit = document.getElementById('buttonSubmit');
let ageRange = document.getElementsByName('ageRange');
let gender = document.getElementsByName('gender');
let study = document.getElementsByName('study');
let ProSituation = document.getElementsByName('ProSituation');
// let situationProText = document.getElementById('situationProText');
// let jobBeforeRetraining = document.getElementById('jobBeforeRetraining');
let name = document.getElementById("name");
let firstName = document.getElementById("firstName");
let email = document.getElementById("email");
let CP = document.getElementById("CP");

//VERIFICATION DES CHAMPS OBLIGATOIRE ET DES EXPRESSIONS OBLIGATOIRES (REGEX)
let RequiredField = 'Champs obligatoire';
let validEmail = document.getElementById("validEmail");
let validName = document.getElementById("validName");
let validFirstName = document.getElementById("validFirstName");
let validCP = document.getElementById("validCP");

// FONCTION DE VALIDATION DE NOM, DE PRENOM, DE CODE POSTAL ET D'EMAIL

let regexCarac = /^[a-zA-Z-_\u00C0-\u00FF\s]+$/;//la regex est la meme dans nom et prenom

const nameValidation = () =>{
    if(regexCarac.test(name.value)){
        validName.textContent ="";
    }
    else{ 
        validName.textContent = "le nom doit comporter des lettres et des tirets uniquement";
    }
}

const firstNameValidation = () =>{
    if(regexCarac.test(firstName.value)){
        validFirstName.textContent = "";
    }
    else{
        validFirstName.textContent = "le prénom doit comporter des lettres et des tirets uniquement";
    }
}

const emailValidation = () => {
    let verif = /^[\u00C0-\u00FFa-zA-Z0-9-_._]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if(verif.exec(email.value)){
        validEmail.textContent = "";
    }
    else{
        validEmail.textContent = "Email non valide";
    }
}

const codePostalValidation = () =>{
        let regexNumber = /^[0-9]+$/;
        if(regexNumber.test(CP.value)){
            validCP.textContent = "";
        }
        else{
            validCP.textContent = "le code postal doit comporter des chiffres uniquement";
        }
}

//Le chargement du fichier js se fait à l'ouverture de la page html

document.addEventListener('DOMContentLoaded', () => {
    console.log('demarrage du fichier');
    
    //La verification de caracteres des champs se fait dans le input
    /*
    ---------------------------------------------------------
    Je crée un event au changement de l'input cest à dire des quon entre une donnée dans le input
    ---------------------------------------------------------
    */

    let form = document.querySelector('form');

    form.name.addEventListener('change', function() {
        nameValidation();
    });

    form.firstName.addEventListener('change', function() {
        firstNameValidation();
    });

    form.email.addEventListener('change', function() {
        emailValidation();
    });

    form.CP.addEventListener('change', function() {
        codePostalValidation();
    });

    /**
     * 
    ---------------------------------------------------------
    Effacer le message d'erreur lors de la correction du formulaire 
    ---------------------------------------------------------
     */ 

    let ageRangeRadioButton = document.querySelectorAll('input[name="ageRange"]');

    for(i=0; i<ageRange.length;i++){
    ageRangeRadioButton[i].addEventListener('change', function(){
    for (i = 0; i < ageRange.length; i++) {
        if (ageRange[i].checked){
            emptyCaseAge.textContent = "";
        }       
    }
    });
    }


    let genderRadioButton = document.querySelectorAll('input[name="gender"]');

    for(i=0; i<gender.length;i++){
    genderRadioButton[i].addEventListener('change', function(){
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked){
            emptyCaseGender.textContent = "";
        }     
    }
    });
}
    

    //JE FAIS DISPARAITRE LES DIV DE RECUPERATION DES DONNEES AU BAS DE MON FORMULAIRE

    document.getElementById('resultFormProfileStyle').classList.remove('block');
    document.getElementById('resultFormProfileStyle').classList.add('none');
    document.getElementById('resultFormProfessionalStyle').classList.remove('block');
    document.getElementById('resultFormProfessionalStyle').classList.add('none');

    buttonSubmit.addEventListener('click', e => {
        e.preventDefault();
        //JE FAIS APPARAITRE LES DIV 
        document.getElementById('resultFormProfileStyle').classList.remove('none');
        document.getElementById('resultFormProfileStyle').classList.add('block');
        document.getElementById('resultFormProfessionalStyle').classList.remove('none');
        document.getElementById('resultFormProfessionalStyle').classList.add('block');
        

        resultFormProfile.innerHTML = 'Nom: ' + document.getElementById('name').value + '<br>';
        resultFormProfile.innerHTML += "Prenom: " + document.getElementById('firstName').value + '<br>';
        resultFormProfile.innerHTML += 'Email : ' + document.getElementById('email').value + '<br>';
        resultFormProfile.innerHTML += 'CP : ' + document.getElementById('CP').value + '<br>';

        /* ---------------------------------------------------------------------------------- 
        C'est un bouton radio, je créer une boucle pour récuperer la/les valeur(s) de mon bouton grâce à la méthode checked.
        -------------------------------------------------------------------------------------
        */
       
        for(i =0; i<ageRange.length;i++)
       {
           if(ageRange[i].checked){
               resultFormProfile.innerHTML += "Tranche d'age : "  + ageRange[i].value + '<br>';
           }    
       }

       for(i =0; i<gender.length;i++)
        {
            if(gender[i].checked){
                resultFormProfile.innerHTML += 'Genre : ' + gender[i].value + '<br>';
            }     
        }

        /* 
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
        
        // J'ajoute un champs 'niveau etude' vide pour que ça ne rajoute pas des champs dans la div de récupération du formulaire à chaque click du bouton envoyer
        
        resultFormProfessional.innerHTML = 'Niveau etude : <br>';
            
        for (i = 0; i < study.length; i++) {
            if (study[i].checked){
                resultFormProfessional.innerHTML = 'Niveau etude : ' + study[i].value + '<br>';
            }      
        } 
    
        resultFormProfessional.innerHTML += 'Domaine etude : ' + document.getElementById('studyArea').value + '<br>';
        
        //J'ajoute un champ situation professionnelle en dehors du for pour qu'il n'apparaisse qu'une fois et que les situation pro apparaissent à la suite

        resultFormProfessional.innerHTML += 'Situation professionnelle : ';

        for (i = 0; i < ProSituation.length; i++) {
            if (ProSituation[i].checked){
                resultFormProfessional.innerHTML += ProSituation[i].value + ' , ';
            }
        }

        resultFormProfessional.innerHTML += '<br>' + 'Situation pro autre :  ' + situationProText.value + '<br>';
        
        // Pour afficher le contenue du text area uniquement s'il y a une valeur.
        // if(situationProText.value.length>0){
        //     console.log('after if situationProText.value = "' + situationProText.value + '"');
        //     // JAI RAJOUTE DES GUILLEMETS POUR VERIFIER QU'IL Y AVAIT BIEN DU CONTENU
        //     resultFormProfessional.innerHTML += '<br>' + 'Situation pro texte :  ' + situationProText.value + '<br>';
        
        // }
        // else
        //     console.log('after else situationProText.value = ' + situationProText.value);
        // SYSTEMATIQUEMENT RAJOUTER DU CONSOLE LOG LORSQU'IL Y A UN BUG. 
        
        resultFormProfessional.innerHTML += 'Poste avant reconversion : ' + jobBeforeRetraining.value + '<br>';
    
        /*
        ---------------------------------------------------------------------------------
        Verification des champs du formulaire
        Si les champs ne sont pas remplis correctement, les messages d'erreurs suivants s'affichent
        ---------------------------------------------------------------------------------
        */ 
       
        // Verif des champs nom, prenom, mail, codepostal
        if (name.value.length===0) {
            validName.textContent = RequiredField;
        }

        if (firstName.value.length===0) {
            validFirstName.textContent = RequiredField;
        }

        if (email.value.length===0){
            validEmail.textContent = RequiredField;
        }
        
        if (CP.value.length===0) {
            validCP.textContent = RequiredField;
        }
        //
        //Si le bouton radio n'est pas coché
        //
        
        //Pour la tranche d'age

        let emptyCaseAge = document.getElementById("emptyCaseAge");
        let boolEmptyCase = false;

        for(i= 0; i<ageRange.length; i++) {
            if(ageRange[i].checked){
                boolEmptyCase = true;
                emptyCaseAge.textContent = "";
            }
        }
        if(boolEmptyCase==false)
            {
                emptyCaseAge.textContent = 'Cette question est obligatoire';
            }

        // Gender

        let emptyCaseGender = document.getElementById("emptyCaseGender");
        let boolEmptyCaseGender = false;

        for(i= 0; i<gender.length; i++) {
            if(gender[i].checked){
                boolEmptyCaseGender = true;
                emptyCaseGender.textContent = "";
            }
        }
        if(boolEmptyCaseGender==false)
            {
                emptyCaseGender.textContent = 'Cette question est obligatoire';
            }
            
    });
        
});











