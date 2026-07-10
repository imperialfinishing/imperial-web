alert("Welcome to Imperial Finishing!");

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", function() {
  navLinks.classList.toggle("show");
});

// SCROLL REVEAL ANIMATION //
const hiddenElements = document.querySelectorAll(".hidden");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});
hiddenElements.forEach((element) => {
    observer.observe(element);
});


const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", function(){
    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none"
    }
});
topBtn.addEventListener("click", function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

//COUNTER ANIMATION
const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = Math.ceil(target / 100);
        if(current < target) {
            counter.innerText = current + increment;
            setTimeout(updateCounter, 20);
        }else{
            counter.innerText = target + '+';
        }
    };
    updateCounter();
});

//PORTFOLIO FILTER//
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        //Remove active class
        filterButtons.forEach(btn => btn.classList.remove("active"));
        //Add active class
        button.classList.add("active");
        const filter = button.getAttribute("data-filter");
        projectCards.forEach(card => {
            if(filter==="all"){
            card.style.display="block";
            }else
                if(card.getAttribute("data-category")===filter){
                    card.style.display = "block";
                }else{
                    card.style.display = "none";
                }
        });

    });
    
});

// ==========================
// PROJECT GALLERY
// ==========================

const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");

const viewButtons = document.querySelectorAll(".view-project");

const closePopup = document.querySelector(".close-popup");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

function openProject(index){

    currentIndex = index;

    popup.style.display = "flex";

    popupImage.src = viewButtons[index].dataset.image;

    popupTitle.textContent = viewButtons[index].dataset.title;

    popupDescription.textContent = viewButtons[index].dataset.description;

}

viewButtons.forEach((button,index)=>{

    button.addEventListener("click",(e)=>{

        e.preventDefault();

        openProject(index);

    });

});

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= viewButtons.length){

        currentIndex = 0;

    }

    openProject(currentIndex);

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = viewButtons.length-1;

    }

    openProject(currentIndex);

});

closePopup.addEventListener("click",()=>{

    popup.style.display="none";

});

popup.addEventListener("click",(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        popup.style.display="none";

    }

});

// ==========================
// STICKY NAVBAR
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

