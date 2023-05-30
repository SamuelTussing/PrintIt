const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//on change la src de l'image
const image = document.querySelector('.banner-img')
image.src = slides[0].image




let position=0;
document.body.onload=function(){

//nbrPhoto= nbr photo dans le tableau
 nbrPhoto=slides.length;
console.log(nbrPhoto)
const photo = slides[0]

    //CREATION DES BALISES DOT//

    let containerDots = document.querySelector(".dots")
    

//tant que i< au nombre de photos dans tableau, on ajoute + à i et on créé une div
//on créé autant de div que de photos dans le tableau
for(i=0; i<slides.length; i++){
	//création de la div puis on associe une class puis un parent
        if(i===0){
            divDot=document.createElement("div")
            divDot.className = "dot dot_selected"
            divDot.setAttribute("id",i)
            containerDots.appendChild(divDot)
        }else{
            divDot=document.createElement("div")
            divDot.className = "dot"
            divDot.setAttribute("id",i)
            containerDots.appendChild(divDot)
        }
}



//GESTION DES CLICS//
//fonction sur le clic gauche les images changent
g.onclick=function(){
    if(position >0){
        DivSelected=document.getElementById(position)
        //enlever class a id=0
        DivSelected.classList.remove("dot_selected")

        position --
        image.src = slides[position].image
        document.getElementById("a").innerHTML = slides[position].tagLine

        DivSelected=document.getElementById(position)
        DivSelected.classList.add("dot_selected") 

    }else{
        DivSelected=document.getElementById(position)
        //enlever class a id=0
        DivSelected.classList.remove("dot_selected")

        position = 3
        image.src = slides[position].image
        document.getElementById("a").innerHTML = slides[position].tagLine

        DivSelected=document.getElementById(position)
        DivSelected.classList.add("dot_selected") 
    }
}


//fonction sur le clic droit les images changent
d.onclick=function(){
    if(position <nbrPhoto-1){

        DivSelected=document.getElementById(position)
        //enlever class a id=0
        DivSelected.classList.remove("dot_selected")

        position ++
        image.src = slides[position].image
        document.getElementById("a").innerHTML = slides[position].tagLine

        DivSelected=document.getElementById(position)
        DivSelected.classList.add("dot_selected")    
    }else{
        DivSelected=document.getElementById(position)
        //enlever class a id=0
        DivSelected.classList.remove("dot_selected")

        position = 0
        image.src = slides[position].image
        document.getElementById("a").innerHTML = slides[position].tagLine

        DivSelected=document.getElementById(position)
        DivSelected.classList.add("dot_selected")
    }
}

    //CREATION DES DIVS IMAGES//
    //on récupère les éléments html (le container (parent) qui contient les images) et les flèches
    container=document.getElementById("banner")
    g=document.getElementById("g")
    d=document.getElementById("d")




}