const input = document.getElementById('input');
const btnSubmit = document.getElementById('btn-submit'); 

//evento para comprobar cantidad donada
const gettingDonatedAmount = (e)=>{ 
    e.preventDefault();
    const amountValue = input.value;
    if(amountValue >= 5 ){
        alert('Thank you')
    
    }else{
        alert('Amount not allowed')
    }
}

btnSubmit.addEventListener('click', gettingDonatedAmount);
