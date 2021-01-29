const categories = document.getElementsByTagName("input")
const imgs = document.getElementsByTagName("img")
const listArt = document.getElementsByTagName("article")

// console.log(listArt);
const categoriesSelect = []
const detectarCambios = () =>{
    for(let i=0;i<categories.length; i++){
        categories[i].addEventListener('click', event=>{
            console.log("category", event.target.value, categories[i].checked)
            if(categories[i].checked){
                categoriesSelect.push(event.target.value)
            }else{
                const pos = categoriesSelect.findIndex(e=> e === event.target.value)
                if(pos >= 0){
                    categoriesSelect.splice(pos,1)
                }
            }  
            showImgByCategory()   
        })
    }

}

detectarCambios()

const showImgByCategory = () =>{
    for(let i=0;i<imgs.length; i++){
        if(categoriesSelect.includes(imgs[i].getAttribute('data-category'))){
            listArt[i].classList.remove('hide')
        }else{
            listArt[i].classList.add('hide')
        }
        if(categoriesSelect.length === 0){
            listArt[i].classList.remove('hide')
        }
    }
}