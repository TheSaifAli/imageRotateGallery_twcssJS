const imgContainerEl= document.querySelector('.imgContainer');

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');

let x=0;
let timer;
const updateGallery=(
    )=>{
        imgContainerEl.style.transform=`perspective(1000px) rotateY(${x}deg)`;
        timer = setTimeout(() => {
            x=x-45;
            updateGallery();
        }, 3000);
}
prevBtn.addEventListener('click',()=>
{
    x = x+45;
    clearTimeout(timer);
    updateGallery();
})
nextBtn.addEventListener('click',()=>
{
    x = x-45;
    clearTimeout(timer)
    updateGallery();
})
updateGallery();