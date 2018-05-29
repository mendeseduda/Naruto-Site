function dropdownMenu() {
    var x = document.getElementById("Topnav_id");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}