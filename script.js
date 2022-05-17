


//MADA LA MAS LINDA DE TODAS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


const tabla = document.querySelector('.canciones');

/*function traerMusica() {
    fetch('music.json')
    .then(response => response.json())
    .then ((music) => {
        const title = document.getElementById('title')
        title.innerHTML += `
        ////Overview`
        music.map((music) => {
        const row = document.createElement('tr');
        row.innerHTML += `
        <td><a href="${music.url}" target="_blank"><img src="./images/icon.png" alt="song" height="35" width="35"></a></td>
        <td>${music.artist.name}</td>
        <td>${music.name}</td>
        <td>${music.listeners}</td>
        `;
        tabla.appendChild(row);    });
})
}


traerMusica();*/

/*const top10Button = document.getElementById('top10');
top10Button.onclick = traerTop10;
                  
function traerTop10(){
    
    tabla.innerHTML="";

    fetch('music.json')
    .then (resp => resp.json())
    .then((music) => {
        const title = document.getElementById('title')
        title.innerHTML = `
        ////top10`
        //const top10 = music.listeners.sort(function (a, b) { return b - a; }).slice(0, 9);
        top10.map((cancion) => {
            const top10 = document.createElement('tr');
          top10.innerHTML = `
            <td><a href="${cancion.url}" target="_blank"><img src="./images/icon.png" alt="song" height="35" width="35"></a></td>
            <td><a href="${cancion.artist.url}" target="_blank">${cancion.artist.name}</a></td>
            <td><a href="${cancion.url}" target="_blank">${cancion.name}</a></td>
            <td>${cancion.listeners}</td>`;
            top10.appendChild(top10);
        })
    })
} */

const top10Button = document.getElementById('top10');
// aqui hacemos click en el button, y el click llama a la funcion traerTop10
top10Button.onclick = traerTop10;
                  
function traerTop10(){
    // caja donde vamos a meter las canciones
    tabla.innerHTML="";

    // pasamos al fetch donde tiene que buscar la informacion
    fetch('music.json')
    // formatear la respuesta a json
    .then (resp => resp.json())
    .then((music) => {
        // music -> todas las canciones
        const title = document.getElementById('title')
        title.innerHTML = `
        ////top10`
        //const top10 = music.listeners.sort(function (a, b) { return b - a; }).slice(0, 9);
        const rockMusic = music.filter (item => item.genres.includes("rock"))
        const orden = rockMusic.sort(function (a, b) {
            if (Number(a.listeners) < Number(b.listeners)) {
              return 1;
            }
            if (Number(a.listeners) > Number(b.listeners)) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
        const top10songs = orden.slice(0, 9)
        for (let i = 0; i < 9; i++) {
            const top10 = document.createElement('tr');
            cancion = top10songs[i]
          top10.innerHTML = `
            <td><a href="${cancion.url}" target="_blank"><img src="./images/icon.png" alt="song" height="35" width="35"></a></td>
            <td><a href="${cancion.artist.url}" target="_blank">${cancion.artist.name}</a></td>
            <td><a href="${cancion.url}" target="_blank">${cancion.name}</a></td>
            <td>${cancion.listeners}</td>`;
            tabla.appendChild(top10);
          }

        orden.slice(0, 9).map((cancion) => {
            const top10 = document.createElement('tr');
          top10.innerHTML = `
            <td><a href="${cancion.url}" target="_blank"><img src="./images/icon.png" alt="song" height="35" width="35"></a></td>
            <td><a href="${cancion.artist.url}" target="_blank">${cancion.artist.name}</a></td>
            <td><a href="${cancion.url}" target="_blank">${cancion.name}</a></td>
            <td>${cancion.listeners}</td>`;
            top10.appendChild(top10);
        })
    })
} 


// const hiphopButton = document.getElementById('hiphop');
// hiphopButton.onclick = traerHiphop;
                  





//const valoraciones = [1, 25, 52, 151, 121, 51, 12, 515, 77, 211, 997, 62, 1216, 11, 921];



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
        <td><a href="${cancion.url}" target="_blank"><img src="./images/icon.png" alt="song" height="35" width="35"></a></td>
        <td><a href="${cancion.artist.url}" target="_blank">${cancion.artist.name}</a></td>
        <td><a href="${cancion.url}" target="_blank">${cancion.name}</a></td>
     
        <td>${cancion.listeners}</td>`;
        tabla.appendChild(rock);
    })
})
} 





//const hiphopButton = document.getElementById('hiphop');
//hiphopButton.onclick = traerHiphop;

// function traerHiphop(){
    
//     tabla.innerHTML="";

//     fetch('music.json')
//     .then (resp => resp.json())
//     .then((music) => {
//         const title = document.getElementById('title')
//         title.innerHTML = `
//         ////Hip-Hop`
//         const hiphopMusic = music.filter (item => item.genres.includes("Hip-Hop"))
//         hiphopMusic.map((cancion) => {
//             const hiphop = document.createElement('tr');
//             hiphop.innerHTML += `
//             <td>${cancion.artist.name}</td>
//             <td>${cancion.name}</td>
//             <td>${cancion.listeners}</td>
//             <td><a href="${cancion.url}" target="_blank"><img src="images/song.svg" alt="song" height="35" width="35"></a></td>`;
//             tabla.appendChild(Hip-Hop);
//         })
//     })
// } 


// const indieButton = document.getElementById('indie');
// indieButton.onclick = traerIndie;

// function traerIndie(){

//     tabla.innerHTML="";

//     fetch('music.json')
//     .then (resp => resp.json())
//     .then((music) => {
//         const title = document.getElementById('title')
//         title.innerHTML = `
//         ////Indie`
//         const indieMusic = music.filter (item => item.genres.includes("indie"))
//         indieMusic.map((cancion) => {
//             const indie = document.createElement('tr');
//             indie.innerHTML += `
//             <td>${cancion.artist.name}</td>
//             <td>${cancion.name}</td>
//             <td>${cancion.listeners}</td>
//             <td><a href="${cancion.url}" target="_blank"><img src="images/song.svg" alt="song" height="35" width="35"></a></td>`;
//             tabla.appendChild(indie);
//         })
//     })
// }

// const jazzButton = document.getElementById('jazz');
// jazzButton.onclick = traerJazz;

// function traerJazz(){

//     tabla.innerHTML="";

//     fetch('music.json')
//     .then (resp => resp.json())
//     .then((music) => {
//         const title = document.getElementById('title')
//         title.innerHTML = `
//         ////Jazz`
//         const jazzMusic = music.filter (item => item.genres.includes("jazz"))
//         jazzMusic.map((cancion) => {
//             const jazz = document.createElement('tr');
//             indie.innerHTML += `
//             <td>${cancion.artist.name}</td>
//             <td>${cancion.name}</td>
//             <td>${cancion.listeners}</td>
//             <td><a href="${cancion.url}" target="_blank"><img src="images/song.svg" alt="song" height="35" width="35"></a></td>`;
//             tabla.appendChild(jazz);
//         })
//     })
// }

// const reggaeButton = document.getElementById('reggae');
// reggaeButton.onclick = traerReggae;

// function traerReggae(){

//     tabla.innerHTML="";

//     fetch('music.json')
//     .then (resp => resp.json())
//     .then((music) => {
//         const title = document.getElementById('title')
//         title.innerHTML = `
//         ////Reggae`
//         const reggaeMusic = music.filter (item => item.genres.includes("reggae"))
//         reggaeMusic.map((cancion) => {
//             const reggae = document.createElement('tr');
//             reggae.innerHTML += `
//             <td>${cancion.artist.name}</td>
//             <td>${cancion.name}</td>
//             <td>${cancion.listeners}</td>
//             <td><a href="${cancion.url}" target="_blank"><img src="images/song.svg" alt="song" height="35" width="35"></a></td>`;
//             tabla.appendChild(reggae);
//         })
//     })
// }





//let arrayRock = music.filter(item => item.genres.includes("rock"));

  //      function filtrarPorGenero()

  
/*class Song {
    constructor(){
    }

    setItemLi(){
    }
    setItemGroupName(group,url){
    }
    setItemSongTitle(title){
    }
    setListeners(listeners){
    }
    getNewElement(group,url,title,listeners){
    }

}
initSongArray = async () => {
    const {tracks} = await getTopTracks();

    const arrayTracks = tracks.track.map(async (track) =>{
       const info = await  getInfoTrack(track.name,track.artist.name)
    //  console.log(info.track.toptags.tag)
       track.genres = info.track.toptags.tag.map(e => e.name);
       console.log(track);
       return track;
    })

    const fullTracks = await Promise.all(arrayTracks)

    return fullTracks;
}
const loadSongs = (tracks)=>{
    // const ul = document.querySelector('ul');
    // tracks.forEach(track => {
    //     const li = document.createElement('li');
    //     li.innerHTML=
    //     `<span>${track.name}</span>
    //     <a class="group-name" title="Play song" href=${track.url} target=_blank>play</a>
    //     <span>${track.listeners}</span><span>${JSON.stringify(track.genres)}</span>`

    //     ul.appendChild(li);
    document.write(JSON.stringify(tracks))

    // });

}
const loadOverview = () =>{
}

const loadTenListened = ()=>{

}

const loadBiggest = (e)=>{

}

const init = async ()=>{


    // const {tracks} = await getTopTracks();
    const tracks = await initSongArray();
    console.log(tracks);
    loadSongs(tracks);
    // console.log(tracks.track);

    }
window.onload = init;*/

/*const musicContainer = document.querySelector('.canciones')
function fetch(name){
    fetch(./music.json${name})
    .then(response => response.json())
    .then(data => imprimirData(data));
}
function fetchCancion(name) {
    for (let i = 1; i <= name; i++) {
        fetch(i);
    }
}
function imprimirData(name){
    const card = document.createElement('p');
card.classList.add('name');

}
/*const url ='./music.json/'
fetch(url)
.then(Response => Response.json())
.then(data => {
let element = document.getElementById('canciones')
element .innerHTML= `
<p>${data.name}</p>`;
console.log(data)
})*/

/* Lo que consume la API*/
/*
const canciones = document.querySelector('.canciones');

fetch('music.json')
.then(Response => Response.json())
.then(data => console.log(data))
*/

/*Story 4 cuando clico*/

/*let rock = document.querySelector(".rock")
rock.addEventListener("click",listaRock); 

function listaRock (){
    fetch("music.json")
    .then (res => res.json())
    .then (function(data){
     let html ="";
     let rockArray = data.filter(song => song.genders.incl)
     rockArray.forEach(song => {
     html += <li><img src="./"</li>   
    });
    document.querySelector(".songs").innerHTML=html;
    });   
};*/

/*
function cargarLista(){
    fetch('music.json')
     .then(res => res.json())
     .then(function(data){
         //Aqui dentro tienes que hacer un for y decirle que tiene que hacer con cada uno de los objetos del array. Tienes que hacer que cree un <li> dentro de una <ol> por cada uo de los objetos del array( el array es data) 
    for (let i = 0; i < array.length; i++) {
         data.map ((data)=> ({name:data.name, duration: data.duration}));
        
        
    }     
     })}
     
     */
