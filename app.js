
let btn = document.querySelectorAll('span');
let body = document.querySelector('body');
let input = document.getElementById('input');
let btns = document.querySelectorAll('.btns');
let darkMode = document.querySelector('.change');
console.log(darkMode);
for ( let i=0 ; i<btn.length;i++){
    btn[i].addEventListener('click',function(){
        if(this.innerHTML == '='){
            input.innerHTML = eval(input.innerHTML);
        }

        else {
            if (this.innerHTML == 'AC'){
            input.innerHTML = '';
            }

    
            else{
                input.innerHTML += this.innerHTML
            }
            
        }

      

        
    })
}

darkMode.addEventListener('click', function(){
  body.classList.toggle('dark');
  

})




