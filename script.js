window.onload = function() {
    // Ensuring the checkbox is unchecked on page load
    document.getElementById('dark-mode-toggle').checked = false;
};

// Additional existing code for handling the checkbox toggle
document.getElementById('dark-mode-toggle').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.querySelector('header').classList.remove('dark-mode');
    }
});


document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = 1;
});
document.querySelector('a[href="about.html"]').addEventListener('mouseover', function() {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = 'about.html';
    document.head.appendChild(link);
});


function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}



document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.querySelector('.hamburger .checkbox');
    const navItems = document.querySelector('nav ul');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
        navItems.style.display = 'flex';
        navItems.style.flexDirection = 'column'; // Optional: styles the menu vertically
        navItems.style.alignItems = 'center'; // Optional: centers the items
        } else {
        navItems.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const checkbox = document.querySelector('.hamburger .checkbox');
    const navItems = document.querySelector('nav ul');

    // Function to manage navigation display based on window size and checkbox state
    function manageNavigation() {
    if (window.innerWidth > 625) {
        navItems.style.display = 'flex'; // Always show nav items on larger screens
        navItems.style.flexDirection = 'row'; // Ensure the flex direction is row for larger screens
        navItems.style.alignItems = 'center'; // Reset alignment to default
    } else {
        if (checkbox.checked) {
        navItems.style.display = 'flex';
        navItems.style.flexDirection = 'column'; // Display vertically when menu is open in mobile view
        navItems.style.alignItems = 'center'; // Center-align the items in mobile view
        
    } else {
          navItems.style.display = 'none'; // Hide nav items when the menu is closed
        }
    }
    }

    // Event listener for checkbox changes
    checkbox.addEventListener('change', manageNavigation);
    // Event listener for window resize
    window.addEventListener('resize', manageNavigation);

    // Initial check on page load
    manageNavigation();
});




// dark mode

{/* <div class="calendly-inline-widget" data-url="https://calendly.com/animeshmittal1911/30min?background_color=121212&text_color=ffffff" style="min-width:700px;height:500px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}


// light mode

{/* <div class="calendly-inline-widget" data-url="https://calendly.com/animeshmittal1911/30min?primary_color=ff8c00" style="min-width:700px;height:500px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}