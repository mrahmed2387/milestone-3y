// display area

let form = document.getElementById('resume-form') as HTMLFormElement
let resumeDisplay  = document.getElementById('resume-display') as HTMLDivElement

// form submission

form.addEventListener('submit',(event: Event)=>{
    event.preventDefault()

    const name= (document.getElementById('name') as HTMLInputElement).value
    const email= (document.getElementById('email') as HTMLInputElement).value
    const ph= (document.getElementById('phone') as HTMLInputElement).value
    const education= (document.getElementById('education') as HTMLInputElement).value
    const experience= (document.getElementById('experience') as HTMLInputElement).value
    const skills= (document.getElementById('skills') as HTMLInputElement).value

// dynamic resume generator 
const resumehtml = `
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}
<p><b>Email:</b>${email}
<p><b>Phone:</b>${ph}

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>


`

// display

if (resumeDisplay) {
    resumeDisplay.innerHTML = resumehtml
} else {
    
}

})
