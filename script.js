window.onload = function () {
   let teamTitles = document.getElementsByClassName("team-title");
    for (let i = 0; i < teamTitles.length; i++) {
        teamTitles[i].addEventListener("click", editTitle);
    }


    let profileImages = document.getElementsByClassName("profile");
    for (let j = 0; j < profileImages.length; j++) {
        profileImages[j].addEventListener("mouseover", function () { effectOn(this.id); });
        profileImages[j].addEventListener("mouseout", function () { effectOff(this.id); });
    }
};

let editTitle = function (e) {
    
    let newTitle = prompt("Enter new team title:");
    if (newTitle) {
        e.target.textContent = newTitle;
    }
};

function effectOn(id) {
    let element = document.getElementById(id);
    element.style.border = "2px solid blue";
    element.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.3)";
}

function effectOff(id) {
    let element = document.getElementById(id);
    element.style.border = "none";
    element.style.boxShadow = "none";
}
