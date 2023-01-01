window.onload=function(){
    const btnHamburger = document.querySelector('#btnhamburger')
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const overlay = document.querySelector('.overlay');
    const fadeElems = document.querySelectorAll('.has-fade');
    

    function togglemenu() {
        if(header.classList.contains('open')){
            body.classList.remove('noscroll');
            header.classList.remove('open');
            fadeElems.forEach(function(element){
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            });
        
        }

        else{ // opens hamburger toggle
            body.classList.add('noscroll');
            header.classList.add('open');
            fadeElems.forEach(function(element){
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            });
        }
        
    };


    btnHamburger.addEventListener("click",togglemenu);
}

