const bg = document.querySelectorAll('.bg')
const btn = document.querySelector('#btn')
btn.addEventListener('click',function(){
	window.scrollBy({left:0, top:800})
})
// for(let i=0; i<bg.length; i++){
//     btn[i].addEventListener('click',()=>{
//     window.scrollTo({left:0,top:bg[i].offsetTop})
//     })
// }