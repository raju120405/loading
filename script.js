function startLoading(){
const doteNode = document.getElementById('dots');
let dotText =doteNode.innerText;
if(dotText.length === 5){
    dotText = '.';
}
else{
    dotText += '.';
}
doteNode.innerText= dotText;
}

// console.log(dotText);

setInterval(() => {
    startLoading();
}, 500);