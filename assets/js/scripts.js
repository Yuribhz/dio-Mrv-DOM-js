

const btn = document.getElementById('mode-selector');
btn.addEventListener('click', changeMode);

const h1 = document.getElementById('page-title');

const body = document.getElementsByTagName('body')[0];

const footer = document.getElementsByTagName('footer')[0];



function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    btn.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    
}

function changeText(){

    if(body.classList.contains('dark-mode')){
        btn.innerHTML = "Light Mode";
        h1.innerHTML = "Dark Mode" + ' On';
        return;
    }
    
    btn.innerHTML = "Dark Mode";
    h1.innerHTML ="Light Mode" + ' On';
}