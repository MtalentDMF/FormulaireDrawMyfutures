/* US NUMERO 1 et  2 
VERIFICATION DE LA RECEPTION DES DONNES SOUMISES PAR LE FORMULAIRE
*/


let resultFormProfile = document.getElementById('resultFormProfile');
let resultFormProfessional = document.getElementById('resultFormProfessional');
let buttonSubmit = document.getElementById('buttonSubmit');
let ageRange = document.getElementsByName('ageRange');
// ageRange avec un querySelector 
let gender = document.getElementsByName('gender');
let etude = document.getElementsByName('etude');
let ProSituation = document.getElementsByName('ProSituation');
// let situationProText = document.getElementById('situationProText').value;
let name = document.getElementById("name");
let firstName = document.getElementById("firstName");
let email = document.getElementById("email");
let CP = document.getElementById("CP");

//VERIFICATION DES CHAMPS OBLIGATOIRE ET DES EXPRESSIONS OBLIGATOIRES (REGEX)
let champOb = 'Champs obligatoire';
let validEmail = document.getElementById("validEmail");
let validName = document.getElementById("validName");
let validFirstName = document.getElementById("validFirstName");
let validCP = document.getElementById("validCP");


//FONCTION DE VALIDATION DE L'EMAIL, JAI AUSSI INTEGRE LA VALIDATION QUE LE EMAIL NEST PAS VIDE

const emailValidation = () => {
    // let email 	= document.formulaire.EMAIL.value;
    
    //Rajout du "." et du "_"

    let verif = /^[\u00C0-\u00FFa-zA-Z0-9-_._]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (email.value.length===0){
        validEmail.textContent = champOb;
    }
    else if (verif.exec(email.value) == null) //email.value.length!==0
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
const nameValidation = () =>{
    let regexCarac = /^[a-zA-Z-_\u00C0-\u00FF\s]+$/;
    if (name.value.length===0) {
        validName.textContent = champOb;
    }
    else if(regexCarac.test(name.value) == false){
        console.log('after else if myRegex.text');
        validName.textContent = "le nom doit comporter des lettres et des tirets uniquement";
    }
}

const firstNameValidation = () =>{
    let regexCarac = /^[a-zA-Z-_\u00C0-\u00FF\s]+$/;
    if (firstName.value.length===0) {
        validFirstName.textContent = champOb;
    }
    else if(regexCarac.test(firstName.value) == false){
        console.log('after else if myRegex.text');
        validFirstName.textContent = "le prénom doit comporter des lettres et des tirets uniquement";
    }
}

const codePostalValidation = () =>{
        let regexNumber = /^[0-9]+$/;
        if (CP.value.length===0) {
            validCP.textContent = champOb;
        }
        else if(regexNumber.test(CP.value) == false){
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
        

        resultFormProfile.textContent += 'nom: ' + document.getElementById('name').value;
        resultFormProfile.textContent += ', prenom: ' + document.getElementById('firstName').value;
        resultFormProfile.textContent += ', email : ' + document.getElementById('email').value;
        resultFormProfile.textContent += ', CP : ' + document.getElementById('CP').value;
        for(i =0; i<ageRange.length;i++)
        {
            if(ageRange[i].checked)
            resultFormProfile.textContent += ", tranche d'age : "  + ageRange[i].value;
        }
        /* ---------------------------------------------------------------------------------- 
        C'est un bouton radio, je créer une boucle pour récuperer la valeur de mon bouton grâce à la méthode checked. resultFormProfile.textConten += ', ' + document.getElementsByName('ageRange');
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
        
        for (i = 0; i < ProSituation.length; i++) {
            if (ProSituation[i].checked)
                resultFormProfessional.textContent += ', situation Pro : ' + ProSituation[i].value;
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
        
        // Si le champs est vide et s'il ne respecte pas les caractères attendus.
        
        nameValidation();

        firstNameValidation();

        emailValidation();
        
        codePostalValidation();

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

        // gender

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
        
        //LE FAIRE PLUTÔT AVEC UN QUERYSELECTOR
    });
});











