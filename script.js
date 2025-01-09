
const imgCard = document.getElementById('img-gallery');

// Funzione per generare immagini
const imgGenerator = () => {
    axios
        .get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then((res) => {
            
            imgCard.innerHTML = "";

            res.data.forEach((img) => {
                
                const col = document.createElement('div');
                col.className = 'col-sm-12 col-md-6 col-lg-4 ';

                col.innerHTML = `
                <img src="img/pin.svg" class="move-pin " style="top: 5%; left: 45%;  height:10%" ">
                <div class="card custom-card position-relative">             
                            <img src="${img.url}" class="card-img-top" ">
                            <div class="card-body custom-card-body">
                                <p>Lorem ipsum</p>
                        </div>
                    </div>
                `;
                imgCard.appendChild(col);
            });
        })
        
};


imgGenerator();