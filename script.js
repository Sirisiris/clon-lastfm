


//MADA LA MAS LINDA DE TODAS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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

const tabla = document.querySelector('.canciones');

function traerMusica() {
    fetch('music.json')
    .then(response => response.json())
    .then ((music) => {
    music.map((music) => {
        const row = document.createElement('tr');
        row.innerHTML += `
        <td>${music.artist.name}</td>
        <td>${music.name}</td>
        <td>${music.listeners}</td>
        <td><a href="${music.url}" target="_blank"><img src="images/song.svg" alt="song" height="35" width="35"></a></td>`;
        tabla.appendChild(row);    });
})
}

traerMusica();

/*
{artista: music.artist.name,
    songname: music.name,
    listeners: music.listeners
    }
    */