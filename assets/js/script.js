/* US NUMERO 1 et  2 
AFFICHAGE DES DONNES SOUMISES PAR LE FORMULAIRE AU BAS DE LA PAGE
*/


let resultFormProfile = document.getElementById('resultFormProfile');
let resultFormProfessional = document.getElementById('resultFormProfessional');
let buttonSubmit = document.getElementById('buttonSubmit');
let study = document.getElementsByName('study');
let ProSituation = document.getElementsByName('ProSituation');
let ageRangeRadioButton = document.querySelectorAll('input[name="ageRange"]');
let genderRadioButton = document.querySelectorAll('input[name="gender"]');
let situationProText = document.getElementById('situationProText');
let jobBeforeRetraining = document.getElementById('jobBeforeRetraining');
let name = document.getElementById("name");
let firstName = document.getElementById("firstName");
let email = document.getElementById("email");
let CP = document.getElementById("CP");
let studyArea = document.getElementById('studyArea');
let invalidForm = document.querySelector('form p#invalidForm');

//VERIFICATION DES CHAMP OBLIGATOIRE ET DES EXPRESSIONS OBLIGATOIRES (REGEX)
let RequiredField = 'Champ obligatoire';
let validEmail = document.getElementById("validEmail");
let validName = document.getElementById("validName");
let validFirstName = document.getElementById("validFirstName");
let validCP = document.getElementById("validCP");

// FONCTION DE VALIDATION DE NOM, DE PRENOM, DE CODE POSTAL ET D'EMAIL

let regexCarac = /^[a-zA-Z-_\u00C0-\u00FF\s]+$/;//la regex est la meme dans nom et prenom

const nameValidation = () => {
    if (regexCarac.test(name.value)) {
        validName.textContent = "";
        return true;
    }
    else {
        validName.textContent = "le nom doit comporter des lettres et des tirets uniquement";
        return false;
    }
}

const firstNameValidation = () => {
    if (regexCarac.test(firstName.value)) {
        validFirstName.textContent = "";
        return true;
    }
    else {
        validFirstName.textContent = "le prénom doit comporter des lettres et des tirets uniquement";
        return false;
    }
}

const emailValidation = () => {
    let verif = /^[\u00C0-\u00FFa-zA-Z0-9-_._]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (verif.exec(email.value)) {
        validEmail.textContent = "";
        return true;
    }
    else {
        validEmail.textContent = "Email non valide";
        return false;
    }
}

const codePostalValidation = () => {
    let regexNumber = /^[0-9]+$/;
    if (regexNumber.test(CP.value)) {
        validCP.textContent = "";
        return true;
    }
    else {
        validCP.textContent = "le code postal doit comporter des chiffres uniquement";
        return false;
    }
}

// const textFields = (id, field) => {
//     let regexText = /^[a-zA-Z0-9-'()",?;.!\u00C0-\u00FF\s]+$/;
//     if(regexText.exec(id.value)) {
//         field.textContent = "";
//         return true;
//     }
//     else {
//         field.textContent = "Les caractères spéciaux ne sont pas autorisés";
//         return false;
//     }
// }

    /*
    Variables qui servent à la validation de mon formulaire voir fonction updateData
    */

    //------------------------------------------------------------------------------
        

        
    //-------------------------------------------------------------------------------

//Le chargement du fichier js se fait à l'ouverture de la page html

document.addEventListener('DOMContentLoaded', () => {

    //La verification de caracteres des champs se fait dans le input
    /*
    ---------------------------------------------------------
    Je crée un event au changement de l'input cest à dire des quon entre une donnée dans le input
    ---------------------------------------------------------
    */

   
    //Avec invalidForm, je supprime le message d'erreur "le formulaire est invalide" quand l'utilisateur retourne sur un des champs concernés. Je le fais pour chaque champ obligatoire

    let form = document.querySelector('form');

    form.name.addEventListener('change', function () {
        nameValidation();
        invalidForm.textContent = "";
    });

    form.name.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });


    form.firstName.addEventListener('change', function () {
        firstNameValidation();
    });
    
    form.firstName.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });

    form.email.addEventListener('change', function () {
        emailValidation();
        invalidForm.textContent = "";
    });

    form.email.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });

    form.CP.addEventListener('change', function () {
        codePostalValidation();
    }); 

    form.CP.addEventListener('focus', function () {
        invalidForm.textContent = "";
    }); 

    /**
     * 
    ---------------------------------------------------------
    Effacer le message d'erreur lors de la correction du formulaire 
    ---------------------------------------------------------
     */

    for (i = 0; i < ageRangeRadioButton.length; i++) {
        ageRangeRadioButton[i].addEventListener('change', function () {
            for (i = 0; i < ageRangeRadioButton.length; i++) {
                if (ageRangeRadioButton[i].checked) {
                    emptyCaseAge.textContent = "";
                    invalidForm.textContent = "";

                }
            }
        });
    }

    for (i = 0; i < genderRadioButton.length; i++) {
        genderRadioButton[i].addEventListener('change', function () {
            for (i = 0; i < genderRadioButton.length; i++) {
                if (genderRadioButton[i].checked) {
                    emptyCaseGender.textContent = "";
                    invalidForm.textContent = "";
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
        /*
        ---------------------------------------------------------------------------------
        Verification des champs du formulaire
        Si les champs ne sont pas remplis correctement, les messages d'erreurs suivants s'affichent
        ---------------------------------------------------------------------------------
        */
        const isEmptyName = name.value.length === 0;
        const isEmptyFirstName = firstName.value.length === 0;
        const isEmptyEmail = email.value.length === 0;
        const isEmptyCp = CP.value.length === 0;

        // Verif des champs nom, prenom, mail, codepostal
        if (isEmptyName) {
            validName.textContent = RequiredField;
        }

        if (isEmptyFirstName) {
            validFirstName.textContent = RequiredField;
        }

        if (isEmptyEmail) {
            validEmail.textContent = RequiredField;
        }

        if (isEmptyCp) {
            validCP.textContent = RequiredField;
        }
        //
        //Si le bouton radio n'est pas coché
        //let emptyCaseAge = document.getElementById("emptyCaseAge");

        // for(i= 0; i<ageRangeRadioButton.length; i++) {
        //     console.log("for ageRangeRadioButton");
        //     if(!ageRangeRadioButton[i].checked){
        //         emptyCaseAge.textContent = 'Cette question est obligatoire';
        //     }
        // }
        
        //Pour la tranche d'age
        
        let emptyCaseAge = document.getElementById("emptyCaseAge");
        let boolEmptyCase = false;
        
        for (i = 0; i < ageRangeRadioButton.length; i++) {
            if (ageRangeRadioButton[i].checked) {
                boolEmptyCase = true;
                emptyCaseAge.textContent = "";
            }
        }
        if (boolEmptyCase == false) {
            emptyCaseAge.textContent = 'Cette question est obligatoire';
        }

        // Gender

        let emptyCaseGender = document.getElementById("emptyCaseGender");
        let boolEmptyCaseGender = false;
        

        for (i = 0; i < genderRadioButton.length; i++) {
            if (genderRadioButton[i].checked) {
                boolEmptyCaseGender = true;
                emptyCaseGender.textContent = "";
            }
        }
        if (boolEmptyCaseGender == false) {
            emptyCaseGender.textContent = 'Cette question est obligatoire';
        }

        //-----------------------------------------------------------------------------------
        /*
        LA VARIABLE FORMULAIRE VALID PERMET DE VERIFIER SI TOUS LES CHAMPS SONT VALIDES AVANT D'ENVOYER LE FORMULAIRE
        */ 
        //-----------------------------------------------------------------------------------


        let nameValid = !isEmptyName && nameValidation();
        let firstNameValid = !isEmptyFirstName && firstNameValidation();
        let emailValid = !isEmptyEmail && emailValidation();
        let cpValid = !isEmptyCp && codePostalValidation();
        let formulaireValid = nameValid && firstNameValid && emailValid && cpValid && boolEmptyCase && boolEmptyCaseGender;
        
        if(formulaireValid){
            updateData();
            invalidForm.textContent = "";
        }
        else{
            invalidForm.textContent = "Le formulaire est invalide";
        }


        //--------------------------------------------------------------------------------------------
    });

});


//------------------------------------------------------------------------------
        /*
        FONCTION UPDATE DATA QUI PERMET D'ENVOYER LES DONNEES DU FORMULAIRE
        */
       //-------------------------------------------------------------------------------
       function updateData() {

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
        for (i = 0; i < ageRangeRadioButton.length; i++) {
            if (ageRangeRadioButton[i].checked) {
                resultFormProfile.innerHTML += "Tranche d'age : " + ageRangeRadioButton[i].value + '<br>';
    
            }
        }
    
        for (i = 0; i < genderRadioButton.length; i++) {
            if (genderRadioButton[i].checked) {
                resultFormProfile.innerHTML += 'Genre : ' + genderRadioButton[i].value + '<br>';
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
            if (study[i].checked) {
                resultFormProfessional.innerHTML = 'Niveau etude : ' + study[i].value + '<br>';
            }
        }
    
        resultFormProfessional.innerHTML += 'Domaine etude : ' + studyArea.value + '<br>';
    
        //J'ajoute un champ situation professionnelle en dehors du for pour qu'il n'apparaisse qu'une fois et que les situation pro apparaissent à la suite
        resultFormProfessional.innerHTML += 'Situation professionnelle : ';
    
        for (i = 0; i < ProSituation.length; i++) {
            if (ProSituation[i].checked) {
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
    }

            