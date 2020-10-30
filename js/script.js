    const timeStamp = '1603556148';
    const apiKey = '63768fc89581ab0c3457317b18e3570c';
    const md5 = 'cfaaee1e3c8ffa816f49136ce7342a5f';

    fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=100`
    ).then((response) => {
        return response.json();
    }).then((jsonParsed) => {
        const divHero = document.querySelector('#Heros');

        jsonParsed.data.results.forEach(element => {
            const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
            const nameHero = element.name
           
           createDivHero(srcImage, nameHero, divHero);
        });

        console.log(jsonParsed);
    })


   function createDivHero(srcImage, nameHero, divToAppend){ //Pega os componentes do documento e os trasforma em imagem, titulo...
       const divFather = document.createElement('div')
       const divChild = document.createElement('div')
       const textName = document.createElement('text')
       const img = document.createElement('img')

      textName.textContent = nameHero
      img.src = srcImage

      divChild.appendChild(img)
      divChild.appendChild(textName)
      divFather.appendChild(divChild)
      divToAppend.appendChild(divFather)

      divFather.classList.add("character");
    }
