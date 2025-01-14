// iD Element
const imgCardElm = document.getElementById('img-gallery');
const titleElm = document.getElementById("title");
const overlayElm = document.getElementById("overlay");
const overlayImageElm = document.getElementById("overlay-image");
const closeButtonElm = document.getElementById("close-btn");

// Funzione per generare immagini e titolo
const imgGenerator = () => {
    axios
        .get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then((res) => {
            
            imgCardElm.innerHTML = "";
            titleElm.innerHTML = "";

            res.data.forEach((img) => {
                // Funzione per creare la card completa con la responsive  
                const col = document.createElement('div');
                col.className = 'col-sm-12 col-md-6 col-lg-4';
                col.innerHTML = `
                <div class="card custom-card position-relative">             
                    <img src="${img.url}" class="card-img-top">
                    <div class="card-body custom-card-body">
                        <p class="text-center">${img.title}</p>
                    </div>
                </div>
                `;
            //Funzione per mostrare l'immagine 
                const cardImgTop = col.querySelector('.card-img-top');
                cardImgTop.addEventListener("click", () => {
                    showOverlay(img.url);
                }); //console.log(cardImgTop)
                

                imgCardElm.appendChild(col);
            });
        });
};

//Funzione per mostrare l'overlay
const showOverlay = (imageSrc) => {
    overlayImageElm.src = imageSrc;
    overlayElm.classList.remove("hidden"); 
};
//Funzione per nascondere l'overlay
const hideOverlay = () => {
    overlayElm.classList.add("hidden"); 
};

closeButtonElm.addEventListener("click", hideOverlay);



// Generazione delle card
imgGenerator(); 