const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


currentSlide = document.querySelector("banner-img")
currentSlide = slides[0]


//on cherche le btn gauche et on ajoute un event listener au clic 
let LeftClick = document.querySelector(".arrow_left")
let RightClick = document.querySelector(".arrow_right")
LeftClick.addEventListener("click", ()=>{
	console.log("cliqué!")
	
})

//on cherche le btn droit et on ajoute un event listener au clic 
RightClick.addEventListener("click", ()=>{

currentSlide = slides[1]

	const resetActiveDot = () => {
		const activeDot = document.querySelector(".dot_selected")
		activeDot.classList.remove("dot_selected")
	}

})

//on défini une var pour nombre de photos et le parent des dots
nbrPhotos = slides.length
let containerDots = document.querySelector(".dots")

//tant que i< au nombre de photos dans tableau, on ajoute + à i et on créé une div
//on créé autant de div que de photos dans le tableau
for(i=0; i<slides.length; i++){
	//création de la div puis on associe une class puis un parent
	divDot=document.createElement("div")
	divDot.className = "dot"
	containerDots.appendChild(divDot)
}

//on récupère les dots dans le fichier html
const Dots = document.querySelectorAll('.dot')

const resetActiveDot = () => {
	const activeDot = document.querySelector(".dot_selected")
	activeDot.classList.remove("dot_selected")
}
