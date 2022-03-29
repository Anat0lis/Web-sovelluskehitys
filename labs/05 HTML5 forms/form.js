function FormValidation(){
  let form = document.querySelector('form');
  Array.from(form.elements).forEach(element=>{
    if(element.type == 'text') {
      if (element.validity.valueMissing) {
        element.setCustomValidity('Täytä kenttä');
        return false;
      } else if (element.validity.patternMismatch) {
        element.setCustomValidity('Väärä syöttö');
        return false;
      }else if(element.validity.typeMismatch) {
        element.setCustomValidity('väärä syöttö');
        return false;
      }
    }
    if(element.type == 'email') {
      if (element.validity.valueMissing) {
        element.setCustomValidity('Täytä kenttä');
        return false;
      } else if (element.validity.patternMismatch) {
        element.setCustomValidity('Väärä syöttö');
        return false;
      }else if(element.validity.typeMismatch) {
        element.setCustomValidity('väärä syöttö, pitää sisältä "@"');
        return false;
      }
    }
    if(element.type == 'number') {
      if (element.validity.valueMissing) {
        element.setCustomValidity('Täytä kenttä');
        return false;
      } else if (element.validity.patternMismatch) {
        element.setCustomValidity('Väärä syöttö');
        return false;
      }else if(element.validity.typeMismatch) {
        element.setCustomValidity('väärä syöttö');
        return false;
      }
    }
    if(element.type =='checkbox'){
      if(!element.validity.valid){
        element.setCustomValidity('Valitse valintaruutu');
        return false;
      }
    }
    element.setCustomValidity('');
    return true;
  })
}