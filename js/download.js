document.getElementById("download").onclick = function() {
    var x = document.getElementById("chapter").value;
    if (!x || x < 1 || x > 43 || parseInt(x) != x) {
        window.alert("Invalid chapter number");
    } else {
        x = parseInt(x);
        if (x < 10)
            x = "0" + x;
        var link = document.createElement("a");
        link.target = "_blank";
        link.href = "https://media.pearsoncmg.com/bc/bc_campbell_biologyinfocus_1_msa/student_art/" + x + "_art_for_students.zip"
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
}
