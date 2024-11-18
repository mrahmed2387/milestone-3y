// display area
var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
// form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var ph = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // dynamic resume generator 
    var resumehtml = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(name, "\n<p><b>Email:</b>").concat(email, "\n<p><b>Phone:</b>").concat(ph, "\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n\n\n");
    // display
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumehtml;
    }
    else {
    }
});
