// get input by id

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    
    return inputNumber;
}


function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function getTextFieldValueById1(id){
    const text1 = document.getElementById(id).innerText;
    //const textNumber = parseFloat(textValue);
    return text1;
}


function showSectionById(id){
    // hide all the sections
    document.getElementById('donation-form').classList.add('hidden');
   // document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}

