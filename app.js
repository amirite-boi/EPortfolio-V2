// template_72kfvk9
//service_f1ad2xi
//TkuBd0reV6YN7nVRl
let isDark = false;
let isModalOpen = false;
const scaleFactor = 1 / 20;

function toggleContrast() {
    console.log("works")
    if (isDark) {
        isDark = !isDark;
        return document.body.classList.remove("contrast__on")
    }
    isDark = !isDark;
    document.body.classList += " contrast__on";
}

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i=0; i<shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const oddInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x *oddInt}px, ${y * oddInt}px)`;
    }
}

function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
    .sendForm(
        'service_f1ad2xi',
        'template_72kfvk9',
        event.target,
        'TkuBd0reV6YN7nVRl'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible")
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me directly via ams.artstudios@gmail.com"
            )
        })
}

function toggleModal() {
    console.log("works")
    if (isModalOpen) {
        isModalOpen = !isModalOpen;
        return document.body.classList.remove("modal__open")   
    }
    isModalOpen = !isModalOpen;
    document.body.classList += " modal__open"   
}