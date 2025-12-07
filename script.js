function openTab(evt, tabName) {
    // 1. Hide all tab content
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active-content");
    }

    // 2. Remove "active" class from all buttons
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 3. Show the current tab and add "active" class to the button
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active-content");
    evt.currentTarget.className += " active";
}