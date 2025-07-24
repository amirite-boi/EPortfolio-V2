// template_72kfvk9
//service_f1ad2xi
//TkuBd0reV6YN7nVRl

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