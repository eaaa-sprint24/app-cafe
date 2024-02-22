function dropDown1() {
    const img = document.getElementById('img1');
    const headerParagraph = document.querySelector('header p');
    const section = document.getElementById('section1');
    const footer = document.querySelector('footer');
    const dd = document.getElementById('dropdown1');
    const allSectionsExceptTheSection = document.querySelectorAll('section:not(#section1)');
    
    if (dd.style.display === "flex") { // If dropdown is already displayed, reverse the effects
        headerParagraph.innerHTML = "Hvad har du brug for hjælp til?<br>Tryk på pilen i det felt du vil læse mere om";
        img.style.transform = "rotate(0deg)";
        section.style.marginBottom= "";
        section.style.borderRadius= "";
        section.style.borderBottom= "";
        footer.style.borderTop= "";
        footer.style.backgroundColor= "";
        dd.style.display= "none";
        allSectionsExceptTheSection.forEach(section => {
            section.style.display = "flex"; // Show all sections again
        });
    } else {
        headerParagraph.textContent = "Tryk på pilen igen for at vende tilbage til oversigten";
        img.style.transform = "rotate(90deg)";
        section.style.marginBottom= "0";
        section.style.borderRadius= "5px 5px 0px 0px";
        section.style.borderBottom= "solid 3px rgba(44, 41, 41, 0.7)";
        dd.style.display= "flex";
        allSectionsExceptTheSection.forEach(section => {
            section.style.display = "none"; // Hide all other sections
        });
    }
}
    
function dropDown2() {
    const img = document.getElementById('img2');
    const headerParagraph = document.querySelector('header p');
    const section = document.getElementById('section2');
    const footer = document.querySelector('footer');
    const dd = document.getElementById('dropdown2');
    const allSectionsExceptTheSection = document.querySelectorAll('section:not(#section2)');
    
    if (dd.style.display === "flex") { // If dropdown is already displayed, reverse the effects
        headerParagraph.innerHTML = "Hvad har du brug for hjælp til?<br>Tryk på pilen i det felt du vil læse mere om";
        img.style.transform = "rotate(0deg)";
        section.style.marginBottom= "";
        section.style.borderRadius= "";
        section.style.borderBottom= "";
        footer.style.borderTop= "";
        footer.style.backgroundColor= "";
        dd.style.display= "none";
        allSectionsExceptTheSection.forEach(section => {
            section.style.display = "flex"; // Show all sections again
        });
    } else {
        headerParagraph.textContent = "Tryk på pilen igen for at vende tilbage til oversigten";
        img.style.transform = "rotate(90deg)";
        section.style.marginBottom= "0";
        section.style.borderRadius= "5px 5px 0px 0px";
        section.style.borderBottom= "solid 3px rgba(44, 41, 41, 0.7)";
        dd.style.display= "flex";
        allSectionsExceptTheSection.forEach(section => {
            section.style.display = "none"; // Hide all other sections
        });
    }
}
    
function dropDown3() {
    const img = document.getElementById('img3');
    const headerParagraph = document.querySelector('header p');
    const section = document.getElementById('section3');
    const footer = document.querySelector('footer');
    const dd = document.getElementById('dropdown3');
    const allSectionsExceptTheSection = document.querySelectorAll('section:not(#section3)');
    
    if (dd.style.display === "flex") { // If dropdown is already displayed, reverse the effects
        headerParagraph.innerHTML = "Hvad har du brug for hjælp til?<br>Tryk på pilen i det felt du vil læse mere om";
        img.style.transform = "rotate(0deg)";
        section.style.marginBottom= "";
        section.style.borderRadius= "";
        section.style.borderBottom= "";
        footer.style.borderTop= "";
        footer.style.backgroundColor= "";
        dd.style.display= "none";
        allSectionsExceptTheSection.forEach(section => {
            section.style.display = "flex"; // Show all sections again
        });
    } else {
        headerParagraph.textContent = "Tryk på pilen igen for at vende tilbage til oversigten";
        img.style.transform = "rotate(90deg)";
        section.style.marginBottom= "0";
        section.style.borderRadius= "5px 5px 0px 0px";
        section.style.borderBottom= "solid 3px rgba(44, 41, 41, 0.7)";
        dd.style.display= "flex";
        allSectionsExceptTheSection.forEach(section => {
            section.style.display = "none"; // Hide all other sections
        });
    }
}
    
function dropDown4() {
    const img = document.getElementById('img4');
    const headerParagraph = document.querySelector('header p');
    const section = document.getElementById('section4');
    const footer = document.querySelector('footer');
    const dd = document.getElementById('dropdown4');
    const allSectionsExceptTheSection = document.querySelectorAll('section:not(#section4)');
    
    if (dd.style.display === "flex") { // If dropdown is already displayed, reverse the effects
        headerParagraph.innerHTML = "Hvad har du brug for hjælp til?<br>Tryk på pilen i det felt du vil læse mere om";
        img.style.transform = "rotate(0deg)";
        section.style.marginBottom= "";
        section.style.borderRadius= "";
        section.style.borderBottom= "";
        footer.style.borderTop= "";
        footer.style.backgroundColor= "";
        dd.style.display= "none";
        allSectionsExceptTheSection.forEach(section => {
            section.style.display = "flex"; // Show all sections again
        });
    } else {
        headerParagraph.textContent = "Tryk på pilen igen for at vende tilbage til oversigten";
        img.style.transform = "rotate(90deg)";
        section.style.marginBottom= "0";
        section.style.borderRadius= "5px 5px 0px 0px";
        section.style.borderBottom= "solid 3px rgba(44, 41, 41, 0.7)";
        dd.style.display= "flex";
        allSectionsExceptTheSection.forEach(section => {
            section.style.display = "none"; // Hide all other sections
        });
    }
}
    
function dropDown5() {
    const img = document.getElementById('img5');
    const headerParagraph = document.querySelector('header p');
    const section = document.getElementById('section5');
    const footer = document.querySelector('footer');
    const dd = document.getElementById('dropdown5');
    const allSectionsExceptTheSection = document.querySelectorAll('section:not(#section5)');
    
    if (dd.style.display === "flex") { // If dropdown is already displayed, reverse the effects
        headerParagraph.innerHTML = "Hvad har du brug for hjælp til?<br>Tryk på pilen i det felt du vil læse mere om";
        img.style.transform = "rotate(0deg)";
        section.style.marginBottom= "";
        section.style.borderRadius= "";
        section.style.borderBottom= "";
        footer.style.borderTop= "";
        footer.style.backgroundColor= "";
        dd.style.display= "none";
        allSectionsExceptTheSection.forEach(section => {
            section.style.display = "flex"; // Show all sections again
        });
    } else {
        headerParagraph.textContent = "Tryk på pilen igen for at vende tilbage til oversigten";
        img.style.transform = "rotate(90deg)";
        section.style.marginBottom= "0";
        section.style.borderRadius= "5px 5px 0px 0px";
        section.style.borderBottom= "solid 3px rgba(44, 41, 41, 0.7)";
        dd.style.display= "flex";
        allSectionsExceptTheSection.forEach(section => {
            section.style.display = "none"; // Hide all other sections
        });
    }
}
    
function dropDown6() {
    const img = document.getElementById('img6');
    const headerParagraph = document.querySelector('header p');
    const section = document.getElementById('section6');
    const footer = document.querySelector('footer');
    const dd = document.getElementById('dropdown6');
    const allSectionsExceptTheSection = document.querySelectorAll('section:not(#section6)');
    
    if (dd.style.display === "flex") { // If dropdown is already displayed, reverse the effects
        headerParagraph.innerHTML = "Hvad har du brug for hjælp til?<br>Tryk på pilen i det felt du vil læse mere om";
        img.style.transform = "rotate(0deg)";
        section.style.marginBottom= "";
        section.style.borderRadius= "";
        section.style.borderBottom= "";
        footer.style.borderTop= "";
        footer.style.backgroundColor= "";
        dd.style.display= "none";
        allSectionsExceptTheSection.forEach(section => {
            section.style.display = "flex"; // Show all sections again
        });
    } else {
        headerParagraph.textContent = "Tryk på pilen igen for at vende tilbage til oversigten";
        img.style.transform = "rotate(90deg)";
        section.style.marginBottom= "0";
        section.style.borderRadius= "5px 5px 0px 0px";
        section.style.borderBottom= "solid 3px rgba(44, 41, 41, 0.7)";
        dd.style.display= "flex";
        allSectionsExceptTheSection.forEach(section => {
            section.style.display = "none"; // Hide all other sections
        });
    }
}
