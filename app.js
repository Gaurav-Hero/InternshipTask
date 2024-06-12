const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElement = document.querySelectorAll('.hdden');
hiddenElement.forEach((el) => {
    observer.observe(el)
})

const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show2')
        } else {
            entry.target.classList.remove('show2')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hdden2');
hiddenElement.forEach((el) => {
    observer.observe(el)
})