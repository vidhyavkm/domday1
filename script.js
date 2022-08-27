// var division = document.createElement('p')
// division.innerHTML="<h2>  HelloGuViWorld!  </h2>"
// document.body.append(division)

// var heading = document.createElement("span")
// heading.innerHTML=`<div class="card" style="width: 18rem;">
// <img src="..." class="card-img-top" alt="...">
// <div class="card-body">
//   <h5 class="card-title">Card title</h5>
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>
// `
// heading.style.color="pink"
// document.body.appendChild(heading)

const parent = document.createElement("h1");
const child1 = document.createElement("span");

parent.innerHTML="This is a div tag";
child1.innerText= "This is a span tag";
document.body.append(parent,child1);
// document.body.append(child1,parent);