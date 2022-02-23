/* US NUMERO 1 et  2 
AFFICHAGE DES DONNES SOUMISES PAR LE FORMULAIRE AU BAS DE LA PAGE
*/


let resultFormProfile = document.getElementById('resultFormProfile');
let resultFormProfessional = document.getElementById('resultFormProfessional');
let buttonSubmit = document.getElementById('buttonSubmit');
let study = document.getElementsByName('study');
let ProSituation = document.getElementsByName('ProSituation');
let situationProText = document.getElementById('situationProText');
let jobBeforeRetraining = document.getElementById('jobBeforeRetraining');
let name = document.getElementById("name");
let firstName = document.getElementById("firstName");
let email = document.getElementById("email");
let CP = document.getElementById("CP");
let studyArea = document.getElementById('studyArea');
let invalidForm = document.querySelector('form p#invalidForm');

let professionalRetraining = document.getElementsByName('professionalRetraining');

//QuerySelector de mes input type radio et checkbox 

let ageRangeRadioButton = document.querySelectorAll('input[name="ageRange"]');
let genderRadioButton = document.querySelectorAll('input[name="gender"]');
let proSituationCheckbox = document.querySelectorAll('input[name="ProSituation"]');
let professionalRetrainingCheckbox = document.querySelectorAll('input[name="professionalRetraining"]');

//VERIFICATION DES CHAMP OBLIGATOIRE ET DES EXPRESSIONS OBLIGATOIRES (REGEX)
let RequiredField = 'Champ obligatoire';
let validEmail = document.getElementById("validEmail");
let validName = document.getElementById("validName");
let validFirstName = document.getElementById("validFirstName");
let validCP = document.getElementById("validCP");
let validStudyArea = document.getElementById("validStudyArea");
let validSituationProText = document.getElementById("validSituationProText");
let validJobBeforeRetraining = document.getElementById("validJobBeforeRetraining");
let validSituationPro = document.getElementById("validSituationPro");
let validProfessionalRetraining = document.getElementById("validProfessionalRetraining");

// FONCTION DE VALIDATION DE NOM, DE PRENOM, DE CODE POSTAL ET D'EMAIL

let regexCarac = /^[a-zA-Z-_\u00C0-\u00FF\s]+$/;//la regex est la meme dans nom et prenom

const nameValidation = () => {
    if (regexCarac.test(name.value) || name.value.length === 0) {
        validName.textContent = "";
        return true;
    }
    else {
        validName.textContent = "le nom doit comporter des lettres et des tirets uniquement";
        return false;
    }
}

const firstNameValidation = () => {
    if (regexCarac.test(firstName.value) || firstName.value.length === 0) {
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
    if (verif.exec(email.value) || email.value.length === 0) {
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
    if (regexNumber.test(CP.value) || CP.value.length === 0) {
        validCP.textContent = "";
        return true;
    }
    else {
        validCP.textContent = "le code postal doit comporter des chiffres uniquement";
        return false;
    }
}

const textFields = (id, field) => {
    let regexText = /^[a-zA-Z0-9-'()",?;.!\u00C0-\u00FF\s]+$/;
    if(regexText.exec(id.value) || id.value.length === 0) {
        field.textContent = "";
        return true;
    }
    else {
        field.textContent = "Les caractères spéciaux ne sont pas autorisés";
        return false;
    }
}

// FONCTION DE VALIDATION DES CHECKBOX ET RADIO BOUTONS

const validButton = (id, field) => {
    for (i = 0; i < id.length; i++) {
        if (id[i].checked) {
            field.textContent = "";
            invalidForm.textContent = "";

        }
    }
}

// FONCTION DE VALIDATION DES CHECKBOX ET RADIO BOUTONS QUI ENGLOBENT L'EVENT LISTENER

// const validButtonTest = (id,field) =>{
//     for (i = 0; i < id.length; i++) {
//         id[i].addEventListener('change', function () {
//             for (i = 0; i < id.length; i++) {
//                 if (id[i].checked) {
//                     field.textContent = "";
//                     invalidForm.textContent = "";

//                 }
//             }
//         });
//     }
// }

//FONCTION DE VALIDATION DES CHAMPS OBLIGATOIRES

const emptyField = (id, field) =>{
    if(id.value.length === 0){
        field.textContent = RequiredField;
        return false;
    }
    else{
        return true;
    }
} 

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

    form.name.addEventListener('focusout', function () {
        nameValidation();
    });
    
    form.firstName.addEventListener('focusout', function () {
        firstNameValidation();
    });

    form.email.addEventListener('focusout', function () {
        emailValidation();
    });

    
    form.CP.addEventListener('focusout', function () {
        codePostalValidation();
    }); 
    
    form.studyArea.addEventListener('focusout', function () {
        textFields(studyArea,validStudyArea);
    });
    
    form.situationProText.addEventListener('focusout', function () {
        textFields(situationProText,validSituationProText);
    });
    
    form.jobBeforeRetraining.addEventListener('focusout', function () {
        textFields(jobBeforeRetraining,validJobBeforeRetraining);
    });
    
    form.name.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });
    
    form.firstName.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });
    

    form.email.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });


    form.CP.addEventListener('focus', function () {
        invalidForm.textContent = "";
    }); 


    form.studyArea.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });


    form.jobBeforeRetraining.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });

    /**
     * 
    ---------------------------------------------------------
    Effacer le message d'erreur lors de la correction des boutons et checkbox du formulaire 
    ---------------------------------------------------------
     */

    for (i = 0; i < ageRangeRadioButton.length; i++) {
        ageRangeRadioButton[i].addEventListener('change', function () {
            validButton(ageRangeRadioButton, emptyCaseAge);
        });
    }

    for (i = 0; i < genderRadioButton.length; i++) {
        genderRadioButton[i].addEventListener('change', function () {
            validButton(genderRadioButton, emptyCaseGender);
        });
    }

    for (i = 0; i < proSituationCheckbox.length; i++) {
        proSituationCheckbox[i].addEventListener('change', function () {
            validButton(proSituationCheckbox, validSituationPro);
        });
    }

    for (i = 0; i < professionalRetrainingCheckbox.length; i++) {
        professionalRetrainingCheckbox[i].addEventListener('change', function () {
            validButton(professionalRetrainingCheckbox, validProfessionalRetraining);
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
        // const isEmptyName = name.value.length === 0;

        // Verif des champs nom, prenom, mail, codepostal

        // if (isEmptyName) {
        //     validName.textContent = RequiredField;
        // }

        // Remplacé par la fonction emptyField

        emptyField(name,validName);

        emptyField(firstName,validFirstName);

        emptyField(email,validEmail);

        emptyField(CP,validCP);     

        emptyField(studyArea,validStudyArea);
        
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

        //ProSituation 

        let boolEmptyCaseProSituation = false;

        for (i = 0; i < proSituationCheckbox.length; i++) {
            if (proSituationCheckbox[i].checked) {
                boolEmptyCaseProSituation = true;
                validSituationPro.textContent = "";
            }
        }
        if (boolEmptyCaseProSituation == false) {
            validSituationPro.innerHTML = 'Cette question est obligatoire';

        }

        //ProfessionalRetraining
        
        let boolEmptyCaseProfessionalRetraining = false;

        for (i = 0; i < professionalRetrainingCheckbox.length; i++) {
            if (professionalRetrainingCheckbox[i].checked) {
                boolEmptyCaseProfessionalRetraining = true;
                validProfessionalRetraining.textContent = "";
            }
        }
        if (boolEmptyCaseProfessionalRetraining == false) {
            validProfessionalRetraining.innerHTML = 'Cette question est obligatoire';

        }


        //-----------------------------------------------------------------------------------
        /*
        LA VARIABLE FORMULAIRE VALID PERMET DE VERIFIER SI TOUS LES CHAMPS SONT VALIDES AVANT D'ENVOYER LE FORMULAIRE
        */ 
        //-----------------------------------------------------------------------------------

        let nameValidSending = emptyField(name,validName) && nameValidation();
        let firstNameValidSending = emptyField(firstName,validFirstName) && firstNameValidation();
        let emailValidSending = emptyField(email,validEmail) && emailValidation();
        let cpValidSending =  emptyField(CP,validCP) && codePostalValidation();
        let studyAreaValidSending = emptyField(studyArea,validStudyArea) && textFields(studyArea,validStudyArea);
        let boolTrue = boolEmptyCase && boolEmptyCaseGender && boolEmptyCaseProSituation && boolEmptyCaseProfessionalRetraining;
        let formulaireValid = nameValidSending && firstNameValidSending && emailValidSending && cpValidSending && studyAreaValidSending && boolTrue;
        
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
        
        resultFormProfessional.innerHTML += 'Rapport à la reconversion : ';
    
        for (i = 0; i < professionalRetraining.length; i++) {
            if (professionalRetraining[i].checked) {
                resultFormProfessional.innerHTML += professionalRetraining[i].value + ' , ';
            }
        }

    }
