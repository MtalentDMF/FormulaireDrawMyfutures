/* US NUMERO 1 et  2 
VERIFICATION DE LA RECEPTION DES DONNES SOUMISES PAR LE FORMULAIRE
*/


let resultFormProfile = document.getElementById('resultFormProfile');
let resultFormProfessional = document.getElementById('resultFormProfessional');
let buttonSubmit = document.getElementById('buttonSubmit');
let ageRange = document.getElementsByName('ageRange');
// ageRange avec un querySelector 
let gender = document.getElementsByName('gender');
//gender avec un querySelector
let study = document.getElementsByName('study');
let ProSituation = document.getElementsByName('ProSituation');
// let situationProText = document.getElementById('situationProText').value;
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


//FONCTION DE VALIDATION DE L'EMAIL ET DE VERIFICATION QUE L'EMAIL NEST PAS VIDE

const emailValidation = () => {
    // let email 	= document.formulaire.EMAIL.value;
    
    //Rajout du "." et du "_"

    let verif = /^[\u00C0-\u00FFa-zA-Z0-9-_._]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (verif.exec(email.value) == null) //email.value.length!==0
    {
        validEmail.textContent = "Email non valide";
        return false;
    }
    else {
         return true;
    }

}
// 
// FONCTION DE VALIDATION DE NOM, DE PRENOM, DE CODE POSTAL

let regexCarac = /^[a-zA-Z-_\u00C0-\u00FF\s]+$/;//la regex est la meme dans nom et prenom

const nameValidation = () =>{
    if(regexCarac.test(name.value) == false){
        console.log('after else if myRegex.text');
        validName.textContent = "le nom doit comporter des lettres et des tirets uniquement";
    }
}

const firstNameValidation = () =>{
    if(regexCarac.test(firstName.value) == false){
        console.log('after else if myRegex.text');
        validFirstName.textContent = "le prénom doit comporter des lettres et des tirets uniquement";
    }
}

const codePostalValidation = () =>{
        let regexNumber = /^[0-9]+$/;
        if(regexNumber.test(CP.value) == false){
            console.log('after else if myRegex.text');
            validCP.textContent = "le code postal doit comporter des chiffres uniquement";
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
        for(i =0; i<ageRange.length;i++)
        {
            if(ageRange[i].checked)
                resultFormProfile.innerHTML += "Tranche d'age : "  + ageRange[i].value + '<br>';
        }
        /* ---------------------------------------------------------------------------------- 
        C'est un bouton radio, je créer une boucle pour récuperer la valeur de mon bouton grâce à la méthode checked.
        -------------------------------------------------------------------------------------
        */
        for(i =0; i<gender.length;i++)
        {
            if(gender[i].checked)
                resultFormProfile.innerHTML += 'Genre : ' + gender[i].value + '<br>';
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
            
        for (i = 0; i < study.length; i++) {
            if (study[i].checked)
                resultFormProfessional.innerHTML += 'Niveau etude : ' + study[i].value + '<br>';
        }
    
        // le domaine d'etude est obligatoirement renseigné
    
        resultFormProfessional.innerHTML += 'Domaine etude : ' + document.getElementById('studyArea').value + '<br>';
        
        for (i = 0; i < ProSituation.length; i++) {
            if (ProSituation[i].checked)
                resultFormProfessional.innerHTML += 'Situation Pro : ' + ProSituation[i].value + '<br>';
        }
        
        // Pour afficher le contenue du text area uniquement s'il y a une valeur.
    
        if(situationProText.value.length>0){
            console.log('after if situationProText.value = "' + situationProText.value + '"');
            // JAI RAJOUTE DES GUILLEMETS POUR VERIFIER QU'IL Y AVAIT BIEN DU CONTENU
            resultFormProfessional.innerHTML += 'Situation pro texte :  ' + situationProText.value + '<br>';
        
        }
        else
            console.log('after else situationProText.value = ' + situationProText.value);
        // SYSTEMATIQUEMENT RAJOUTER DU CONSOLE LOG LORSQU'IL Y A UN BUG. 
        
        resultFormProfessional.innerHTML += 'Poste avant reconversion : ' + document.getElementById('jobBeforeRetraining').value + '<br>';
    
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
        else if(name.value.length){
            true;
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

        // let emptyCase = document.getElementById("emptyCase");
        // let boolEmptyCase = 1;
        // for (i = 0; i < ageRange.length; i++) {
        //     if (boolEmptyCase == 1 && !ageRange[i].checked) {
        //         console.log('after if !ageRange[i].checked');
        //         emptyCase.textContent = 'Cette question est obligatoire';
        //         boolEmptyCase = 0;
        //     }
        //     else {
        //         console.log('je sors de la boucle');
        //         return false;
        //     }
        // }

        //Par Algorithme

        // Age

        let emptyCase = document.getElementById("emptyCase");
        let boolEmptyCase = false;

        for(i= 0; i<ageRange.length; i++) {
            if(ageRange[i].checked){
                console.log('after if !ageRange[i].checked');
                boolEmptyCase = true;
            }
        }
        if(boolEmptyCase==false)
            {
                emptyCase.textContent = 'Cette question est obligatoire';
            }

        // Gender

        let emptyCaseGender = document.getElementById("emptyCaseGender");
        let boolEmptyCaseG = false;

        for(i= 0; i<gender.length; i++) {
            if(gender[i].checked){
                console.log('after if !gender[i].checked');
                boolEmptyCaseG = true;
            }
        }
        if(boolEmptyCaseG==false)
            {
                console.log('boolemptycaseG false')
                emptyCaseGender.textContent = 'Cette question est obligatoire';
            }
            
    });

        //La verification des champs doit se faire dans le input
        /*
        ---------------------------------------------------------
        Je crée un nouvel envent au changement de l'input cest à dire des quon entre une donnée dans le input
        ---------------------------------------------------------
        */
    
        let form = document.querySelector('form');

        form.name.addEventListener('change', function() {
            console.log('bonjour la france')
            nameValidation();
        });

        form.firstName.addEventListener('change', function() {
            console.log('bonjour la france')
            firstNameValidation();
        });

        form.email.addEventListener('change', function() {
            console.log('bonjour la france')
            emailValidation();
        });

        form.CP.addEventListener('change', function() {
            console.log('bonjour la france')
            codePostalValidation();
        });
});











