/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 



//=============== FormValidation
const names = document.getElementById('names');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const textarea = document.getElementById('textarea');
const form = document.getElementById('form');
const name_error = document.getElementById('name_error');
const email_error = document.getElementById('email_error');
const phone_error = document.getElementById('phone_error');
const textarea_error = document.getElementById('textarea_error');



var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



form.addEventListener('submit',(e)=>{
    if(names.value === '' || names.value == null  )
    {
        e.preventDefault();
        name_error.innerHTML= "Name is required";

    }else
    {
        name_error.innerHTML= "";
    }


    if(!email.value.match(validRegex))
    {

        e.preventDefault();
        email_error.innerHTML='valid email is required';
       
    }else
    {
      
        email_error.innerHTML='';

      
    }

    if(phone.value.length != 10)
    {
        e.preventDefault();
        phone_error.innerHTML="valid 10 digit number needed";

    }else
    {
        phone_error.innerHTML='';
    }

    if(textarea.value == '' || textarea.value == null  )
    {
        e.preventDefault();
        textarea_error.innerHTML= "some text is required";

    } else
    {
        textarea_error.innerHTML= "";
    }
   

    if( name_error.innerHTML==="" && email_error.innerHTML==='' && phone_error.innerHTML===''&& textarea_error.innerHTML==="")
{

    // $("#form").submit((e)=>{
       
        e.preventDefault()
        $.ajax({
            
            url:"https://script.google.com/macros/s/AKfycbwp5n9s3ks8-vj50d_CnMPYf8MVDTz4l-eNInWs0zCliHUOFmgn8keYFeGNp7NYGGUu/exec",
            data:$("#form").serialize(),
            method:"POST",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com" 
            },
            error:function (err){
                alert("Something Error")

            }
        })
     //})
} 
}
)