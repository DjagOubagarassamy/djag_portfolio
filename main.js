import './style.css'



// Loader 

var loader = document.querySelector('.loader-wrap')

window.addEventListener('load', function(){
    loader.style.opacity = "0"
})




// GSAP 


gsap.registerPlugin(ScrollTrigger);


let about = document.querySelector("#title-a");
let skillso = document.querySelector("#title-b");
let contacto = document.querySelector("#title-e");
let titles = document.querySelector('#titres');

let mobile1 = document.querySelector('#bigo1')
let mobile2 = document.querySelector('#bigo2')
let mobile3 = document.querySelector('#bigo3')

let mobile3_1 = document.querySelector('#bigo3-1')
let mobile3_2 = document.querySelector('#bigo3-2')
let mobile3_3 = document.querySelector('#bigo3-3')


let tablet2_1 = document.querySelector('#pc2-1')
let tablet2_2 = document.querySelector('#pc2-2')
let mobile2_1 = document.querySelector('#bigo2-1')
let mobile2_2 = document.querySelector('#bigo2-2')

let tablet4_1 = document.querySelector('#pc4-1')
let tablet4_2 = document.querySelector('#pc4-2')

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    // Text Parralax
    about.style.marginLeft = value * 2 - 1000 + 'px';
    skillso.style.marginLeft = value * 2 - 9200 + 'px';
    contacto.style.marginLeft = value * 2 - 10750 + 'px';

    // Projet 1 parralax
    mobile1.style.bottom = value * 1.2 - 2000 + 'px';
    mobile2.style.bottom = value * 0.8 - 1000 + 'px';
    mobile3.style.bottom = value * 0.9 + - 1600 + 'px';

    // Projet 2 Parralax
    tablet2_1.style.bottom = value * 0.5 - 700 + 'px';
    // tablet2_2.style.bottom = value * 0.4 - 800 + 'px';
    mobile2_1.style.bottom = value * 1 - 2400 + 'px';
    mobile2_2.style.bottom = value * 0.6 - 1400 + 'px';


    // Projet 3 Parralax 
    mobile3_1.style.bottom = value * 0.5 - 1150 + 'px';
    mobile3_2.style.bottom = value * 0.7 - 1900 + 'px';
    mobile3_3.style.bottom = value * 0.3 + - 950 + 'px';

    // Projet 4 Parralax
    tablet4_1.style.bottom = value * 0.5 - 1500 + 'px'
    tablet4_2.style.bottom = value * 0.35 - 1300 + 'px'
})

gsap.from('.nom svg text, .libelle svg text', {
    yPercent: 100,
    stagger: 0.1,
    duration: 1,
})

gsap.to(".numero1", {
    scrollTrigger: {
    trigger: ".numero1 .gauche",
    start: "center center",
    end: "+=2000",
    pin: ".numero1 .gauche",
    scrub: 1,
},
});

gsap.to('.numero2', {
    scrollTrigger: {
        trigger: ".numero2 .gauche",
        start:" top center",
        end: "+=2000",
        pin: ".numero2 .gauche",
        scrub: 1,
    }
})
gsap.to('.numero3', {
    scrollTrigger: {
        trigger: ".numero3 .gauche",
        start:" top top",
        end: "+=2000",
        pin: ".numero3 .gauche",
        scrub: 1,
    }
})
gsap.to('.numero4', {
    scrollTrigger: {
        trigger: ".numero4 .gauche",
        start:" top top",
        end: "+=1800",
        pin: ".numero4 .gauche",
        scrub: 1,
    }
})

gsap.from('.div_numero,.div_titre, .div_desc, .div_skills, .div_type', {
    opacity: 0,
    yPercent: 100,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".numero1 .gauche",
        start: "center center",
        end: "+=1000",
        onLeave: () => {
            gsap.to('.div_numero,.div_titre, .div_desc, .div_skills, .div_type', {
                yPercent: -100,
                duration: 0.5,
            })
        },
        onEnterBack: () => {
            gsap.to('.div_numero,.div_titre, .div_desc, .div_skills, .div_type', {
                yPercent: 0,
                duration: 0.5,
            })
        }
    }
})

gsap.from('.div_numero2,.div_titre2, .div_desc2, .div_skills2, .div_type2', {
    opacity: 0,
    yPercent: 100,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".numero2 .gauche",
        start: "top top",
        end: "+=800",
        onEnter: () => {
            gsap.to('.div_numero2,.div_titre2, .div_desc2, .div_skills2, .div_type2', {
                opacity: 1,
                yPercent: 0,
                duration: 0.5,
            })
        },
        onLeave: () => {
            gsap.to('.div_numero2,.div_titre2, .div_desc2, .div_skills2, .div_type2', {
                yPercent: -100,
                duration: 0.5,
            })
        },
        onLeaveBack: () => {
            gsap.to('.div_numero2,.div_titre2, .div_desc2, .div_skills2, .div_type2', {
                opacity: 0,
                yPercent: -100,
                duration: 0.5,
            })
        },
        onEnterBack: () => {
            gsap.to('.div_numero2,.div_titre2, .div_desc2, .div_skills2, .div_type2', {
                opacity: 1,
                yPercent: 0,
                duration: 0.5,
            })
        }
    }
})

gsap.from('.div_numero3,.div_titre3, .div_desc3, .div_skills3, .div_type3', {
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".numero3 .gauche",
        start: "center center",
        end: "+=600",
        onEnter: () => {
            gsap.to('.div_numero3,.div_titre3, .div_desc3, .div_skills3, .div_type3', {
                opacity: 1,
                yPercent: 0,
                duration: 0.5,
            })
        },
        onLeave: () => {
            gsap.to('.div_numero3,.div_titre3, .div_desc3, .div_skills3, .div_type3', {
                yPercent: -100,
                duration: 0.5,
            })
        },
        onLeaveBack: () => {
            gsap.to('.div_numero3,.div_titre3, .div_desc3, .div_skills3, .div_type3', {
                opacity: 0,
                yPercent: -100,
                duration: 0.5,
            })
        },
        onEnterBack: () => {
            gsap.to('.div_numero3,.div_titre3, .div_desc3, .div_skills3, .div_type3', {
                opacity: 1,
                yPercent: 0,
                duration: 0.5,
            })
        }
    }
})
gsap.from('.div_numero4,.div_titre4, .div_desc4, .div_skills4, .div_type4', {
    yPercent: 100,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".numero4 .gauche",
        start: "center center",
        end: "+=600",
        onEnter: () => {
            gsap.to('.div_numero4,.div_titre4, .div_desc4, .div_skills4, .div_type4', {
                opacity: 1,
                yPercent: 0,
                duration: 0.5,
            })
        },
        onLeave: () => {
            gsap.to('.div_numero4,.div_titre4, .div_desc4, .div_skills4, .div_type4', {
                yPercent: -100,
                duration: 0.5,
            })
        },
        onLeaveBack: () => {
            gsap.to('.div_numero4,.div_titre4, .div_desc4, .div_skills4, .div_type4', {
                opacity: 0,
                yPercent: -100,
                duration: 0.5,
            })
        },
        onEnterBack: () => {
            gsap.to('.div_numero4,.div_titre4, .div_desc4, .div_skills4, .div_type4', {
                opacity: 1,
                yPercent: 0,
                duration: 0.5,
            })
        }
    }
})
