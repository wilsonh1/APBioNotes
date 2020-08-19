var fr = document.getElementsByClassName("footref");

for (let i = 0; i < fr.length; i++) {
    fr[i].onclick = function(e) {
        e.stopPropagation();
        let fb = this.nextElementSibling;
        if (fb.style.display == "block")
            fb.style.display = "none";
        else
            fb.style.display = "block";
    }
}

document.body.onclick = function() {
    for (let i = 0; i < fr.length; i++) {
        let fb = fr[i].nextElementSibling;
        fb.style.display = "none";
    }
}
