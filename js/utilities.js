// get input by id

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    document.getElementById(id).value= '';
    if(isNaN(inputValue)) return '-1';

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


 // Function to open the modal
 function openModal() {
    /*const addMoney4 = getInputFieldValueById('input-add-money2');
        //const pinNumber = getInputFieldValueById('input-pin-number');

        const currentBalace4 = getTextFieldValueById('remain-balance');

        if(addMoney4<=0 || isNaN(addMoney4)){
          //  alert('Invalid Donation amount');
            return;
        }

        if(currentBalace4 < addMoney4){
          //  alert('You do not have Enough Money');
            return;
        }*/
    document.getElementById('modal').classList.remove('hidden');
    document.getElementById('modal').classList.add('flex');
}

// Function to close the modal
function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('modal').classList.remove('flex');
}

function changeColor(clickedButton) {
    // Reset the color of both buttons to gray
    document.getElementById('show-donation').classList.replace('bg-lime-500', 'bg-gray-200');
    document.getElementById('show-transaction-history').classList.replace('bg-lime-500', 'bg-gray-200');
    
    // Change the background color of the clicked button to lime
    clickedButton.classList.replace('bg-gray-200', 'bg-lime-500');
}


// Track whether on Blog or Home page

function goToHomePage() {
    // Redirect to the home.html page
    window.location.href = 'home.html'; // Make sure home.html is in the same directory
}

function goToIndexPage() {
    // Redirect to the index.html page
    window.location.href = 'index.html'; // Make sure index.html is in the same directory
}