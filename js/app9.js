let galerija = document.querySelector('.galerija');
let btnVienas = document.querySelector('.one');
let btnDu = document.querySelector ('.two');
let nuotraukos =['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'];
let nuotraukosUL = document.querySelector ('.galerija ul');
const path = 'img/';

btnVienas.addEventListener('click',parodyk)
btnDu.addEventListener('click',maisyti)

function parodyk (){
    for (i=0; i<nuotraukos.length;i++){
        let li =document.createElement('li');
        li.className="col-3 crop";
        nuotraukosUL.appendChild(li);
        let imgE =document.createElement('img');
        li.appendChild(imgE);
        imgE.src=path+nuotraukos[i];
        btnVienas.style.display="none";

    }
    let imgE = document.querySelectorAll('.galerija ul li img');
    for(p=0;p<imgE.length;p++){
        imgE[p].ondblclick =function (e){
            e.target.src = path + '1.jpg';
        }
    }
}
function maisyti(){
    nuotraukos.sort(function (){return 0.5 - Math.random()});
    console.log(nuotraukos)
    let imgE = document.querySelectorAll('.galerija img');
    for (i=0; i<nuotraukos.length; i++){
        imgE[i].src=path+nuotraukos[i];
    }
}