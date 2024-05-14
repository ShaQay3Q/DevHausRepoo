// Tasks:

//     DONE
// Create a new Javascript-File and link it in index.html.

//     Using only your Javascript-File, change the contents of index.html:

//      DONE        
//     Change the background color of the document to a color of your choice.

//     DONE
//     Change the company name on the top to "Cloud Factory".

//      DONE
//     In the header, remove the element "Jobs".

//      DONE
//     Add a new element to the header-list with the inner-HTML being "Career".

//     Shorten the description on the page: make it show "Welcome to the home!".


//     Change the background color of the document to a color of your choice.
document.body.style.backgroundColor = "rgb(255, 250, 230)"

//     Change the company name on the top to "Cloud Factory".
const companyName = document.getElementById(`company__name`);
companyName.innerHTML = "Cloud Factory";

//     In the header, remove the element "Jobs".
// const parent = document.getElementById("navbar__list");
// const child = document.getElementById("jobs");
// parent.removeChild(child);

const elmnt = document.getElementById("jobs");
elmnt.remove();

//     Add a new element to the header-list with the inner-HTML being "Career".

const para = document.createElement("li");
const node = document.createTextNode("Career");
para.appendChild(node);

const elementLi = document.getElementById("navbar__list");
elementLi.appendChild(para);




// document.body.