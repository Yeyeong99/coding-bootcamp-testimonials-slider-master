const btn = document.querySelectorAll("button"),
    personalInfo = document.querySelectorAll(".personal-info");

for (i=0; i< btn.length; i++) {
    btn[i].addEventListener("click",function() {
        for (j=0; j< personalInfo.length; j++) {
            personalInfo[j].classList.toggle("hide");
        }
    });
};
