//MADA LA MAS LINDA DE TODAS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// --------------------- Vinculación de la tabla con el div canciones ----------------

const tabla = document.querySelector('.canciones');

// ---------------------- Cargar todas las canciones - Overview ---------------------- 

function traerMusica() {
       
    tabla.innerHTML="";
    fetch('music.json')
    .then(response => response.json())
    .then ((music) => {
        const title = document.getElementById('title');
        title.innerHTML = `
        ////Overview`
        music.map((cancion) => {
        const row = document.createElement('tr');
        row.innerHTML += `
        <td><img src="./images/icon.png" alt="song" height="35" width="35"></td>
            <td><a href="${cancion.artist.url}" target="_blank">${cancion.artist.name}</a></td>
            <td><a href="${cancion.url}" target="_blank">${cancion.name}</a></td>
            <td>${cancion.listeners}</td>`;
        tabla.appendChild(row);    });
})
}

// Vinculación y llamada al boton Overview
const overviewButton = document.getElementById('overview');
overviewButton.onclick = traerMusica; 

// ---------------------- Sección TOP 10 ---------------------- 

const top10Button = document.getElementById('top10');
top10Button.onclick = traerTop10;
                  
function traerTop10(){
    tabla.innerHTML="";
    fetch('music.json')
    .then (resp => resp.json())
    .then((music) => {
        const title = document.getElementById('title')
        title.innerHTML = `
        ////Top10`
        //const top10 = music.listeners.sort(function (a, b) { return b - a; }).slice(0, 9);
        const orden = music.sort(function (a, b) {
            if (Number(a.listeners) < Number(b.listeners)) {
              return 1;
            }
            if (Number(a.listeners) > Number(b.listeners)) {
              return -1;
            }
            return 0;
          });
        const top10songs = orden.slice(0, 9)
        for (let i = 0; i < 9; i++) {
            const top10 = document.createElement('tr');
            const cancion = top10songs[i]
          top10.innerHTML = `
            <td><img src="./images/icon.png" alt="song" height="35" width="35"></td>
            <td><a href="${cancion.artist.url}" target="_blank">${cancion.artist.name}</a></td>
            <td><a href="${cancion.url}" target="_blank">${cancion.name}</a></td>
            <td>${cancion.listeners}</td>`;
            tabla.appendChild(top10);
          }

        orden.slice(0, 9).map((cancion) => {
            const top10 = document.createElement('tr');
          top10.innerHTML = `
            <td><img src="./images/icon.png" alt="song" height="35" width="35"></td>
            <td><a href="${cancion.artist.url}" target="_blank">${cancion.artist.name}</a></td>
            <td><a href="${cancion.url}" target="_blank">${cancion.name}</a></td>
            <td>${cancion.listeners}</td>`;
            tabla.appendChild(top10);
        })
    })
} 

// ---------------------- Sección ROCK ---------------------- 

// Llamada al botón y cargar función
const rockButton = document.getElementById('rock');
rockButton.onclick = traerRock;

function traerRock(){
    
    tabla.innerHTML="";
fetch('music.json')
.then (resp => resp.json())
.then((music) => {
    const title = document.getElementById('title')
    title.innerHTML = `
    ////Rock`
    const rockMusic = music.filter (item => item.genres.includes("rock"))
    rockMusic.map((cancion) => {
        const rock = document.createElement('tr');
        rock.innerHTML = `
        <td><img src="./images/icon.png" alt="song" height="35" width="35"></td>
        <td><a href="${cancion.artist.url}" target="_blank">${cancion.artist.name}</a></td>
        <td><a href="${cancion.url}" target="_blank">${cancion.name}</a></td>
        <td>${cancion.listeners}</td>`;
        tabla.appendChild(rock);
    })
})
}

// ---------------------- Sección HipHop ---------------------- 

const hiphopButton = document.getElementById('hiphop');
hiphopButton.onclick = traerHiphop;

function traerHiphop(){
    
    tabla.innerHTML="";

    fetch('music.json')
    .then (resp => resp.json())
    .then((music) => {
        const title = document.getElementById('title')
        title.innerHTML = `
        ////Hip-Hop`
        const hiphopMusic = music.filter (item => item.genres.includes("Hip-Hop"))
        hiphopMusic.map((cancion) => {
            const hiphop = document.createElement('tr');
            hiphop.innerHTML += `
            <td><img src="./images/icon.png" alt="song" height="35" width="35"></td>
        <td><a href="${cancion.artist.url}" target="_blank">${cancion.artist.name}</a></td>
        <td><a href="${cancion.url}" target="_blank">${cancion.name}</a></td>
        <td>${cancion.listeners}</td>`;
            tabla.appendChild(hiphop);
        })
    })
} 

//---------------------- Sección Indie ---------------------- 

const indieButton = document.getElementById('indie');
indieButton.onclick = traerIndie;

function traerIndie(){

    tabla.innerHTML="";

    fetch('music.json')
    .then (resp => resp.json())
    .then((music) => {
        const title = document.getElementById('title')
        title.innerHTML = `
        ////Indie`
        const indieMusic = music.filter (item => item.genres.includes("indie"))
        indieMusic.map((cancion) => {
         const indie = document.createElement('tr');
         indie.innerHTML += `
         <td><img src="./images/icon.png" alt="song" height="35" width="35"></td>
         <td><a href="${cancion.artist.url}" target="_blank">${cancion.artist.name}</a></td>
         <td><a href="${cancion.url}" target="_blank">${cancion.name}</a></td>
         <td>${cancion.listeners}</td>`;
         tabla.appendChild(indie);
         })
    })
}


//---------------------- Sección Biggest ---------------------- 

const biggestButton = document.getElementById('biggest');
biggestButton.onclick = traerBiggest;

function traerBiggest(){

    tabla.innerHTML="";

    fetch('music.json')
    .then (resp => resp.json())
    .then((music) => {
        const title = document.getElementById('title')
        title.innerHTML = `
        ////The Biggest`
        const biggestMusic = music.filter (item => item.artist.name.includes("Radiohead"))
        biggestMusic.map((cancion) => {
        const biggest = document.createElement('tr');
        biggest.innerHTML += `
        <td><img src="./images/icon.png" alt="song" height="35" width="35"></td>
        <td><a href="${cancion.artist.url}" target="_blank">${cancion.artist.name}</a></td>
        <td><a href="${cancion.url}" target="_blank">${cancion.name}</a></td>
        <td>${cancion.listeners}</td>`;
        tabla.appendChild(biggest);
        })
     })
}

//---------------------- Sección JAZZ ---------------------- 

const jazzButton = document.getElementById('jazz');
jazzButton.onclick = traerJazz;

function traerJazz(){
    
    tabla.innerHTML="";

    fetch('music.json')
    .then (resp => resp.json())
    .then((music) => {
        const title = document.getElementById('title')
        title.innerHTML = `
        ////Jazz`
        const jazzMusic = music.filter (item => item.genres.includes("jazz"))
        jazzMusic.map((cancion) => {
        const jazz = document.createElement('tr');
        jazz.innerHTML += `
        <td><img src="./images/icon.png" alt="song" height="35" width="35"></td>
        <td><a href="${cancion.artist.url}" target="_blank">${cancion.artist.name}</a></td>
        <td><a href="${cancion.url}" target="_blank">${cancion.name}</a></td>
        <td>${cancion.listeners}</td>`;
        tabla.appendChild(jazz);
        })
    })
}

//---------------------- Sección Reggae ---------------------- 

const reggaeButton = document.getElementById('reggae');
reggaeButton.onclick = traerReggae;

function traerReggae(){

    tabla.innerHTML="";

    fetch('music.json')
    .then (resp => resp.json())
    .then((music) => {
        const title = document.getElementById('title')
        title.innerHTML = `
        ////Reggae`
        const reggaeMusic = music.filter (item => item.genres.includes("reggae"))
        reggaeMusic.map((cancion) => {
        const reggae = document.createElement('tr');
        reggae.innerHTML += `
        <td><img src="./images/icon.png" alt="song" height="35" width="35"></td>
        <td><a href="${cancion.artist.url}" target="_blank">${cancion.artist.name}</a></td>
        <td><a href="${cancion.url}" target="_blank">${cancion.name}</a></td>
        <td>${cancion.listeners}</td>`;
        tabla.appendChild(reggae);
        })
     })
}


// ---------------------- Cargar Overview al iniciar la página ---------------------- 

window.onload = function(e){ 
    traerMusica();
}
