const menulist = document.querySelector('.menulist')
const menu = document.querySelector('.menu-navegacion')

console.log(menu)
console.log(menulist)

menulist.addEventListener('click', ()=>{ 
   menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != menulist ){
        menu.classList.toggle("spread")
    }
})