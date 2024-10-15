document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -0.009}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -0.015}deg;
        `
    })
})