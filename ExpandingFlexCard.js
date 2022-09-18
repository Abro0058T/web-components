console.log('this is working');


const option=document.querySelectorAll('.option');
option.forEach(element => {
    element.addEventListener('click',(e)=>{
    for (let index = 0; index < 5; index++) {
        option[index].classList.remove('active');
        
    }
        element.classList.add('active');
    })
    
});
const face=document.getElementsByClassName('face0');
let index=1;

setInterval(() => {
    if (index<5) {
            face[0].classList.remove(`face${index}`);
            face[0].classList.add(`face${index+1}`);
            face[1].classList.remove(`face${index}`);
            face[1].classList.add(`face${index+1}`);
            console.log(face[0]);
            index=index+1;
    }
    else{
        face[0].classList.remove(`face${5}`);
        face[1].classList.remove(`face${5}`);
        index=1;
    }
}, 3000);
