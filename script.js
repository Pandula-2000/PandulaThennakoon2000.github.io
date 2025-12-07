// Function to switch Main Tabs (Home, Research, Publications, etc.)
function openTab(evt, tabName) {
    // 1. Hide all tab contents
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active-content");
        tabcontent[i].style.display = "none";
    }

    // 2. Remove "active" class from sidebar buttons
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 3. Show current tab and set button active
    document.getElementById(tabName).style.display = "block";
    setTimeout(() => {
        document.getElementById(tabName).classList.add("active-content");
    }, 10); // Tiny delay to allow CSS animation to trigger
    
    evt.currentTarget.className += " active";
}

// === RESEARCH PAGE LOGIC ===

// Function to open a specific project detail view
function openProject(projectId) {
    // Hide the main list of projects
    document.getElementById('research-list').style.display = 'none';
    
    // Hide all other project details (safety measure)
    var details = document.getElementsByClassName('project-detail');
    for(var i=0; i<details.length; i++) {
        details[i].style.display = 'none';
    }

    // Show the specific project detail
    document.getElementById(projectId).style.display = 'block';
}

// Function to go back to the main research list
function closeProject() {
    // Hide all details
    var details = document.getElementsByClassName('project-detail');
    for(var i=0; i<details.length; i++) {
        details[i].style.display = 'none';
    }

    // Show the list again
    document.getElementById('research-list').style.display = 'block';
    // Add animation class to fade it in nicely
    document.getElementById('research-list').style.animation = 'fadeIn 0.5s ease';
}

// Set default tab on load
document.addEventListener("DOMContentLoaded", function() {
    // Simulate click on the first tab
    document.querySelector(".tab-link").click();
});