// iD Element
const imgCardElm = document.getElementById('img-gallery');
const titleElm = document.getElementById("title");

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
                        <p class="card-titleElm text-center">${img.title}</p>
                    </div>
                </div>
                `;

                imgCardElm.appendChild(col);
            });
        });
};



// Generazione delle card
imgGenerator(); 