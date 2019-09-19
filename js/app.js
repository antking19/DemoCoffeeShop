eventListener();

function eventListener(){
    let ui = new UI;

    window.addEventListener('load', function(){
        ui.hidePreloader()
    })
    
    document.querySelector('.navBtn').addEventListener('click', function(){
        ui.showNav()
    })

    document.querySelector('.video__switch').addEventListener('click', function(){
        ui.videoControls()
    })
}

function UI(){}

UI.prototype.hidePreloader = function(){
    document.querySelector('.preloader').style.display = "none";
}

UI.prototype.showNav = function(){
    document.querySelector('.nav').classList.toggle('nav--show')
}

UI.prototype.videoControls = function(){
    let btn = document.querySelector('.video__switch-btn');
    if(!btn.classList.contains('btnSlide')){
        btn.classList.add('btnSlide');
        document.querySelector('.video__item').pause();
    }else{
        // btn.classList.remove('btnSlide');
        // document.querySelector('.video__item').play();
    }
}