window.onload=function(){
    const noBtn = document.querySelector('.noBtn');

    noBtn.addEventListener("mouseover", () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;
    
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
    
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });
}