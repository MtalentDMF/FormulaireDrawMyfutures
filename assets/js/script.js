/* US NUMERO 1 et  2 
AFFICHAGE DES DONNES SOUMISES PAR LE FORMULAIRE AU BAS DE LA PAGE
*/

//Variables qui prend les id des champs input et des champs text Area

let buttonSubmit = document.getElementById('buttonSubmit');
let study = document.getElementsByName('study');
let ProSituation = document.getElementsByName('ProSituation');
let situationProText = document.getElementById('situationProText');
let jobBeforeRetraining = document.getElementById('jobBeforeRetraining');
let name = document.getElementById("name");
let firstName = document.getElementById("firstName");
let email = document.getElementById("email");
let CP = document.getElementById("CP");

let professionalRetrainingText = document.getElementById('professionalRetrainingText');
let retrainingJobArea = document.getElementById('retrainingJobArea');
let formationText = document.getElementById('formationText');
let websitesRetrainingArea = document.getElementById('websitesRetrainingArea');
let websitesFormationArea = document.getElementById('websitesFormationArea');
let websitesOrPlacesArea = document.getElementById('websitesOrPlacesArea');
let socialMediaText = document.getElementById('socialMediaText');
let interestingAccountsArea = document.getElementById('interestingAccountsArea');
let additionalQuestionsArea = document.getElementById('additionalQuestionsArea');

const debugmode = true;//TODO retirer ce hack lors de la livraison finale

//QuerySelector de mes input type radio et checkbox 

let ageRangeRadioButton = document.querySelectorAll('input[name="ageRange"]');
let genderRadioButton = document.querySelectorAll('input[name="gender"]');
let proSituationCheckbox = document.querySelectorAll('input[name="ProSituation"]');
let professionalRetrainingCheckbox = document.querySelectorAll('input[name="professionalRetraining"]');
let formationCheckbox = document.querySelectorAll('input[name="formation"]');
let socialMediaCheckbox = document.querySelectorAll('input[name="socialMedia"]');
let newsletterRadioButton = document.querySelectorAll('input[name="newsletter"]');

//Recuperation des listes

let list = document.getElementById('list');

//VARIABLES D'EMPLACEMENT DE MESSAGES D'ERREURS DES VERIFICATIONS DES CHAMPS OBLIGATOIRE ET DES EXPRESSIONS OBLIGATOIRES (REGEX)

let RequiredField = 'Champ obligatoire';
let validEmail = document.getElementById("validEmail");
let validName = document.getElementById("validName");
let validFirstName = document.getElementById("validFirstName");
let validCP = document.getElementById("validCP");

let validSituationProText = document.getElementById("validSituationProText");
let validJobBeforeRetraining = document.getElementById("validJobBeforeRetraining");
let validSituationPro = document.getElementById("validSituationPro");
let validProfessionalRetraining = document.getElementById("validProfessionalRetraining");
let validProfessionalRetrainingText = document.getElementById("validProfessionalRetrainingText");
let validRetrainingJobArea = document.getElementById("validRetrainingJobArea");
let validFormationText = document.getElementById("validFormationText");
let validWebitesRetrainingArea = document.getElementById("validWebitesRetrainingArea");
let validWebsitesFormationArea = document.getElementById("validWebsitesFormationArea");
let validWebsitesOrPlacesArea = document.getElementById("validWebsitesOrPlacesArea");
let validSocialMedia = document.getElementById("validSocialMedia");
let validSocialMediaText = document.getElementById("validSocialMediaText");
let validInterestingAccountsArea = document.getElementById("validInterestingAccountsArea");
let validAdditionalQuestionsArea = document.getElementById("validAdditionalQuestionsArea");
let validFieldOfStudy = document.getElementById("validFieldOfStudy");


//Message d'erreur si l'envoi du formulaire n'est pas valide 

let invalidForm = document.querySelector('form p#invalidForm');

// FONCTION DE VALIDATION DE NOM, DE PRENOM, DE CODE POSTAL ET D'EMAIL

let regexCarac = /^[a-zA-Z-_\u00C0-\u00FF\s]+$/;//la regex est la meme dans nom et prenom

const nameValidation = () => {
    if (regexCarac.test(name.value) || name.value.length === 0) {
        return true;
    }
    else {
        validName.textContent = "le nom doit comporter des lettres et des tirets uniquement";
        return false;
    }
}

const firstNameValidation = () => {
    if (regexCarac.test(firstName.value) || firstName.value.length === 0) {
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

//FONCTION DE VALIDATION DES CHAMPS OBLIGATOIRES

//Validation pour les input textes

const emptyField = (id, field) =>{
    if(id.value.length === 0){
        field.textContent = RequiredField;
        return false;
    }
    else{
        return true;
    }
} 

// Validation pour les select 

// let nul = document.getElementById('null');

const click = (listItem,field) =>{
    if(listItem.options[listItem.selectedIndex].text === "-----choisissez un domaine dans la liste-----"){
        field.textContent = RequiredField;
        return false;
    }
    else{
        return true;
    }
}

//Le chargement du fichier js se fait à l'ouverture de la page html

document.addEventListener('DOMContentLoaded', () => {

    //Animation du titre
    
    const textAnime = document.querySelector('#titre h1')

    new Typewriter(textAnime)
    .changeDelay(80)
    .typeString('Reconversion vers les métiers du numérique')
    // .pauseFor(300)
    // .deleteChars(1)
    // .typeString(' vers les métiers du numérique')
    .start()

// CONNEXION A LA BASE DE DONNEE AIRTABLE
    

    // const getRecords = async () => {
    //     const records = await profil.select({ maxRecords: 10, view: 'Grid view' }).firstPage();
    //     console.log(records);
    // }

    // getRecords();

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
    
    
    form.situationProText.addEventListener('focusout', function () {
        textFields(situationProText,validSituationProText);
    });
    
    form.jobBeforeRetraining.addEventListener('focusout', function () {
        textFields(jobBeforeRetraining,validJobBeforeRetraining);
    });

    form.professionalRetrainingText.addEventListener('focusout', function () {
        textFields(professionalRetrainingText,validProfessionalRetrainingText);
    });

    form.retrainingJobArea.addEventListener('focusout', function () {
        textFields(retrainingJobArea,validRetrainingJobArea);
    });

    form.formationText.addEventListener('focusout', function () {
        textFields(formationText,validFormationText);
    });

    form.websitesRetrainingArea.addEventListener('focusout', function () {
        textFields(websitesRetrainingArea,validWebitesRetrainingArea);
    });

    form.additionalQuestionsArea.addEventListener('focusout', function () {
        textFields(additionalQuestionsArea,validAdditionalQuestionsArea);
    });

    form.websitesFormationArea.addEventListener('focusout', function () {
        textFields(websitesFormationArea,validWebsitesFormationArea);
    });

    form.websitesOrPlacesArea.addEventListener('focusout', function () {
        textFields(websitesOrPlacesArea,validWebsitesOrPlacesArea);
    });

    form.socialMediaText.addEventListener('focusout', function () {
        textFields(socialMediaText,validSocialMediaText);
    });

    form.interestingAccountsArea.addEventListener('focusout', function () {
        textFields(interestingAccountsArea,validInterestingAccountsArea);
    });

    form.name.addEventListener('focus', function () {
        invalidForm.textContent = "";
        validName.textContent = "";

    });

    form.firstName.addEventListener('focus', function () {
        invalidForm.textContent = "";
        validFirstName.textContent = "";
    });
    
    form.email.addEventListener('focus', function () {
        invalidForm.textContent = "";
        validEmail.textContent = "";
    });


    form.CP.addEventListener('focus', function () {
        invalidForm.textContent = "";
        validCP.textContent = "";
    }); 

    form.situationProText.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });

    form.jobBeforeRetraining.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });

    form.professionalRetrainingText.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });

    form.retrainingJobArea.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });

    form.formationText.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });
    
    form.websitesRetrainingArea.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });

    form.websitesFormationArea.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });

    form.websitesOrPlacesArea.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });

    form.socialMediaText.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });
    
    form.interestingAccountsArea.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });

    form.additionalQuestionsArea.addEventListener('focus', function () {
        invalidForm.textContent = "";
    });

    form.list.addEventListener('click', function () {
        invalidForm.textContent = "";
        validFieldOfStudy.textContent = "";
    }
    );

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

    for (i = 0; i < newsletterRadioButton.length; i++) {
        newsletterRadioButton[i].addEventListener('change', function () {
            validButton(newsletterRadioButton, emptyCaseNewsletter);
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

    for (i = 0; i < socialMediaCheckbox.length; i++) {
        socialMediaCheckbox[i].addEventListener('change', function () {
            validButton(socialMediaCheckbox, validSocialMedia);
        });
    }

    //JE FAIS DISPARAITRE LES DIV DE RECUPERATION DES DONNEES AU BAS DE MON FORMULAIRE

    document.getElementById('resultOk').classList.remove('block');
    document.getElementById('resultOk').classList.add('none');

    buttonSubmit.addEventListener('click', e => {
        e.preventDefault();
        /*
        ---------------------------------------------------------------------------------
        Verification des champs du formulaire
        Si les champs ne sont pas remplis correctement, les messages d'erreurs suivants s'affichent
        ---------------------------------------------------------------------------------
        */

        console.log(list.options[list.selectedIndex].value);

        emptyField(firstName,validFirstName);

        emptyField(CP,validCP);     

        emptyField(retrainingJobArea,validRetrainingJobArea);

        emptyField(websitesRetrainingArea,validWebitesRetrainingArea);

        emptyField(websitesFormationArea,validWebsitesFormationArea);

        click(list,validFieldOfStudy);
        
        //
        //Si le bouton radio ou checkbox n'est pas coché
        //

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

        // Newsletter

        let emptyCaseNewsletter = document.getElementById("emptyCaseNewsletter");
        let boolEmptyCaseNewsletter = false;
        

        for (i = 0; i < newsletterRadioButton.length; i++) {
            if (newsletterRadioButton[i].checked) {
                boolEmptyCaseNewsletter = true;
                emptyCaseNewsletter.textContent = "";
            }
        }
        if (boolEmptyCaseNewsletter == false) {
            emptyCaseNewsletter.textContent = 'Cette question est obligatoire';
        }

        // VERIFICATION QUE LEMAIL EST BIEN RENSEIGNE QUAND ON A DEMANDE LA NEWSLETTER

        let boolEmailRenseigne = true;

        for (i = 0; i < newsletterRadioButton.length; i++) {
            if (newsletterRadioButton[0].checked && email.value.length === 0) {
                validEmail.textContent = "Pour recevoir la newsletter, veuillez renseigner votre email";
                boolEmailRenseigne = false;
            }
            else{
                boolEmailRenseigne;
                }
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

        //SocialMedia   

        let boolEmptyCaseSocialMedia = false;

        for (i = 0; i < socialMediaCheckbox.length; i++) {
            if (socialMediaCheckbox[i].checked) {
                boolEmptyCaseSocialMedia = true;
                validSocialMedia.textContent = "";
            }
        }
        if (boolEmptyCaseSocialMedia == false) {
            validSocialMedia.innerHTML = 'Cette question est obligatoire';

        }
        //-----------------------------------------------------------------------------------
        /*
        LA VARIABLE FORMULAIRE VALID PERMET DE VERIFIER SI TOUS LES CHAMPS SONT VALIDES AVANT D'ENVOYER LE FORMULAIRE
        */ 
        //-----------------------------------------------------------------------------------

        //Champs obligatoires

        let nameValidSending = nameValidation();
        let firstNameValidSending = emptyField(firstName,validFirstName) && firstNameValidation();
        let emailValidSending = emailValidation();
        let cpValidSending =  emptyField(CP,validCP) && codePostalValidation();
        let retrainingJobAreaSending = textFields(retrainingJobArea,validRetrainingJobArea) && emptyField(retrainingJobArea,validRetrainingJobArea);
        let websitesRetrainingAreaSending = textFields(websitesRetrainingArea,validWebitesRetrainingArea) && emptyField(websitesRetrainingArea,validWebitesRetrainingArea);
        let websitesFormationAreaSending = textFields(websitesFormationArea,validWebsitesFormationArea) && emptyField(websitesFormationArea,validWebsitesFormationArea);
        let fieldOfStudySending = click(list,validFieldOfStudy);
        //Champs non obligatoires
        
        let areaNotRequired = textFields(situationProText,validSituationProText) && textFields(jobBeforeRetraining,validJobBeforeRetraining) && textFields(professionalRetrainingText,validProfessionalRetrainingText) && textFields(formationText,validFormationText) && textFields(websitesOrPlacesArea,validWebsitesOrPlacesArea) && textFields(socialMediaText,validSocialMediaText) && textFields(interestingAccountsArea,validInterestingAccountsArea);
        
        //boutons et checkbox
        
        let boolTrue = boolEmptyCase && boolEmptyCaseGender && boolEmptyCaseProSituation && boolEmptyCaseProfessionalRetraining && boolEmptyCaseSocialMedia && boolEmptyCaseNewsletter && boolEmailRenseigne;

        //Variable qui contient toutes les variables de vérification des champs du formulaire

        let formulaireValid = nameValidSending && firstNameValidSending && emailValidSending && cpValidSending && retrainingJobAreaSending && websitesRetrainingAreaSending && websitesFormationAreaSending && fieldOfStudySending && areaNotRequired && boolTrue;
        
        if(formulaireValid || debugmode){
            updateData();
            invalidForm.textContent = "";
            document.getElementById('resultOk').classList.remove('none');
            document.getElementById('resultOk').classList.add('block');
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


    var Airtable = require('airtable');

    var base = new Airtable({ apiKey: 'keyJZoCXEOlsyQu2N' }).base('apprgKZR6URooGqFe');

    const profil = base('Profil');

//Création d'un objet fieldsJson pour créer les données

//Initialisation de l'objet avec tous les champs de type texte

    let fieldsJsonObject = {
        "fields": {
            "Poste avant reconversion": jobBeforeRetraining.value,
            "Nouveau métier visé": retrainingJobArea.value,
            "Sites internet consultés pour reconversion": websitesRetrainingArea.value,
            "Autres sites ou lieux": websitesOrPlacesArea.value,
            "Comptes intéressants": interestingAccountsArea.value,
            "Sites internet consultés pour formation": websitesFormationArea.value,
            "Code postal": CP.value,
            "Prénom": firstName.value,
            "Nom": name.value,
            "Email": email.value,
            "Rapport à la reconversion Autre" : professionalRetrainingText.value,
            "Réseaux sociaux Autre":socialMediaText.value,
            "Formation Autre":formationText.value,
            "Situation professionnelle Autre":situationProText.value,
            "Questions supplémentaires": additionalQuestionsArea.value,
            "Domaine Etude": [list.options[list.selectedIndex].value]
        }
    };
    
    //Ajout des radio bouton à l'objet 

    for (i = 0; i < study.length; i++) {
        if (study[i].checked) {
            fieldsJsonObject["fields"]["Niveau étude"] = [study[i].value];
        }
    }

    for (i = 0; i < genderRadioButton.length; i++) {
        if (genderRadioButton[i].checked) {
        fieldsJsonObject["fields"]["Genre"] = [genderRadioButton[i].value];
        }
    }

    for (i = 0; i < ageRangeRadioButton.length; i++) {
        if (ageRangeRadioButton[i].checked) {
        fieldsJsonObject["fields"]["Age"] = [ageRangeRadioButton[i].value];
        }
    }

    for (i = 0; i < newsletterRadioButton.length; i++) {
        if (newsletterRadioButton[i].checked) {
        fieldsJsonObject["fields"]["Newsletter"] = [newsletterRadioButton[i].value];
        }
    }

    // RECUPERATION DES CHECKBOX
    
    fieldsJsonObject["fields"]["Rapport à la reconversion"] = [];
    for (i = 0; i < professionalRetrainingCheckbox.length; i++) {
        if (professionalRetrainingCheckbox[i].checked){
            fieldsJsonObject["fields"]["Rapport à la reconversion"].push(professionalRetrainingCheckbox[i].value);
        }
    }   

    fieldsJsonObject["fields"]["Réseaux sociaux"] = [];
    for (i = 0; i < socialMediaCheckbox.length; i++) {
        if (socialMediaCheckbox[i].checked){
            fieldsJsonObject["fields"]["Réseaux sociaux"].push(socialMediaCheckbox[i].value);
        }
    }   

    fieldsJsonObject["fields"]["Formation"] = [];
    for (i = 0; i < formationCheckbox.length; i++) {
        if (formationCheckbox[i].checked){
            fieldsJsonObject["fields"]["Formation"].push(formationCheckbox[i].value);
        }
    }   

    fieldsJsonObject["fields"]["Situation professionnelle"] = [];
    for (i = 0; i < ProSituation.length; i++) {
        if (ProSituation[i].checked){
            fieldsJsonObject["fields"]["Situation professionnelle"].push(ProSituation[i].value);
        }
    }   

    // RECUPERATION DES CHAMPS AUTRE



    console.log(fieldsJsonObject);


    //Création du profil

    profil.create([
        fieldsJsonObject
    ], function (err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function (record) {
            console.log(record.getId());
        });
    });
}
