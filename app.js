document.getElementById("loan-form").addEventListener('submit' , function displayResults(e) {
    const loadings = document.getElementById('loading');
    const results = document.getElementById('results');

    loadings.style.display = 'block';
    results.style.display = 'none';

    setTimeout(outPut , 2000);

    e.preventDefault();
});

function outPut() {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const yea = document.getElementById('years');
    const monthlyPay = document.getElementById('monthly-payment');
    const totalPay = document.getElementById('total-payment');
    const totalInter = document.getElementById('total-interest');


    const monthly = parseFloat(amount.value);
    const total = parseFloat(interest.value) / 100 / 12;
    const yearss = parseFloat(yea.value)*12;

    const xy = Math.pow(1+total , yearss);
    const yx = (monthly*xy*total)/(xy-1);

    if (isFinite(yx)) {

        monthlyPay.value = yx.toFixed(2);
        totalPay.value = (yx*total).toFixed(2);
        totalInter.value =  ((yx * total)-monthly).toFixed(2);
    }
    else{
        showError('Input accurate value!, To display result');

    }


}
function showError(error) {

    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'none';

    const divErr = document.createElement('div');

    const heading = document.querySelector('.heading');
    const card = document.querySelector('.card');

    divErr.className = 'alert alert-danger';
    divErr.appendChild(document.createTextNode(error));
   
   card.insertBefore(divErr , heading);
   setTimeout( removeAlert , 3000);

}
function removeAlert() {
    document.querySelector('.alert').remove();
}