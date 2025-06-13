const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight =document.querySelector('.imagen-light')
const menulist1 = document.querySelector('.menulist')

//console.log(imagenes)
//console.log(imagenesLight)
//console.log(contenedorLight)

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=> {
        aparecerImagen(imagen.getAttribute('src'))
    })
});

contenedorLight.addEventListener('click', (e)=>{
    if(e.target != imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        menulist1.style.opacity = '1'
    }
})

/*imagenes.forEach(imagen => {
    console.log(imagen.getAttribute('src'))
});*/

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menulist1.style.opacity = '0'
}
