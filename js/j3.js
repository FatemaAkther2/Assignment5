document.getElementById('btn-add-money2')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money2');
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
        
        const balance = getTextFieldValueById('account-balance2');
            const newBalance = balance + addMoney;

            const availableBalance = currentBalace - addMoney;
            document.getElementById('account-balance2').innerText = newBalance;
            document.getElementById('remain-balance').innerText = availableBalance;

            // add to transaction history
            const div = document.createElement('div');
            // div.classList.add('bg-yellow-300');
 
            const variableText = getTextFieldValueById1('title3');
 
            const koyta_Baje_dise = new Date().toLocaleDateString();
 
            const currentTimeBST = new Date().toLocaleTimeString('en-US', { 
             timeZone: 'Asia/Dhaka', 
             hour: '2-digit', 
             minute: '2-digit', 
             second: '2-digit', 
             hour12: true 
         });
 
             div.innerHTML = `
                 <div class="bg-gray-100 border-4 border-gray-300 rounded-2xl p-6 px-20 mb-10">
     <div class="grid grid-rows-2 gap-4">
         <!-- First Row: Paragraph -->
         <p class="text-lg font-bold">
             ${addMoney} Taka is Donate for ${variableText}. 
         </p>
 
         <!-- Second Row: Current Date -->
         <div class="text-lg font-bold ">${koyta_Baje_dise} ${currentTimeBST}</div>
     </div>
 </div>
 
             `
 
             document.getElementById('transaction-container').appendChild(div);

    })