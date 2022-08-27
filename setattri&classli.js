var division = document.createElement('h1')
division.innerHTML="HI"
division.style.color="red"
division.setAttribute('class','heading')
division.setAttribute('id','test');
document.body.append(division);


var divi = document.createElement('p')
divi.innerText="HI"
divi.style.color="red"
divi.classList.add('main','main1','main2');
document.body.append(divi);

