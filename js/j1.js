document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');
        //const pinNumber = getInputFieldValueById('input-pin-number');
        const currentBalace = getTextFieldValueById('remain-balance');

        if(addMoney<=0 || isNaN(addMoney)){
            alert('Invalid Donation amount');
            return;
        }

        if(currentBalace < addMoney){
            alert('You do not have Enough Money');
            return;
        }
        
        const balance = getTextFieldValueById('account-balance');
            const newBalance = balance + addMoney;

            const availableBalance = currentBalace - addMoney;
            document.getElementById('account-balance').innerText = newBalance;

            document.getElementById('remain-balance').innerText = availableBalance;


            // add to transaction history
            const div = document.createElement('div');
           // div.classList.add('bg-yellow-300');

           const variableText = getTextFieldValueById1('title1');

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
            ${addMoney} Taka is ${variableText}. 
        </p>

        <!-- Second Row: Current Date -->
        <div class="text-lg font-bold ">Date : ${koyta_Baje_dise}   Time: ${currentTimeBST}</div>
    </div>
</div>

            `

            document.getElementById('transaction-container').appendChild(div);

    })