document.getElementById('btn-add-money1')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money1');
        //const pinNumber = getInputFieldValueById('input-pin-number');
        const currentBalace = getTextFieldValueById('remain-balance');

        if(addMoney<=0 || isNaN(addMoney)){
            alert('Put a Valid Number');
            return;
        }

        if(currentBalace < addMoney){
            alert('You do not have Enough Money');
            return;
        }
        
        const balance = getTextFieldValueById('account-balance1');
            const newBalance = balance + addMoney;

            const availableBalance = currentBalace - addMoney;
            document.getElementById('account-balance1').innerText = newBalance;
            document.getElementById('remain-balance').innerText = availableBalance;

            // add to transaction history
           /* const p = document.createElement('p');
            p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
            console.log(p); 

            // should be a common function
            document.getElementById('transaction-container').appendChild(p);*/

    })