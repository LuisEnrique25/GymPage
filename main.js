window.addEventListener("scroll", () =>{
    const s = document.documentElement.scrollTop;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    
    document.getElementById('progress').style.width = (s/h * 100) + '%';
});

window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll('section[id]').forEach(sec => {
        if(window.scrollY >= sec.offsetTop - 200) current = sec.id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if(a.getAttribute('href') === '#' + current || (current === 'home' && a.getAttribute('href') === '#')){
            a.classList.add('active');
        }
    })
})