/* https://kodim.cz/kurzy/javascript-vyuka/js-1/retezce-podminky/cv-retezce

CVICENI 1 */

/*
const title = 'Lord of the Rings';
title.length;
title.toUpperCase();
title.slice(0, 5);
title.slice(title.length - 5, title.length); */

/* CVICENI 2 */

let email = prompt('Zadejte email');
let atIndex = email.indexOf('@');
let jmeno = email.slice(0, atIndex);
let domain1 = email.slice(atIndex + 1, email.length);

const parsedEmail = {
    userName: jmeno,
    domain: domain1,
}

document.body.innerHTML += "<p> Jmeno: " + parsedEmail.userName + "</p>";
document.body.innerHTML += "<p> Domena: " + parsedEmail.domain + "</p>";