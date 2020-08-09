var fr = document.getElementsByClassName("footref");

for (let i = 0; i < fr.length; i++) {
    fr[i].onclick = function(e) {
        e.stopPropagation();
        let fb = fr[i].nextElementSibling;
        if (fb.style.display == "none")
            fb.style.display = "block";
        else {
            fb.style.display = "none";
        }
    }
}

document.body.onclick = function() {
    for (let i = 0; i < fr.length; i++) {
        let fb = fr[i].nextElementSibling;
        fb.style.display = "none";
    }
}
