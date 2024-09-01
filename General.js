
function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    if (sidebar.style.width === "250px")
        sidebar.style.width = "0";
    else (
        sidebar.style.width = "250px"
    )
}

function cerrar() {
    var sidebar = document.getElementById("mySidebar");
    if (sidebar.style.width === "250px")
        sidebar.style.width = "0";
}




AOS.init();
