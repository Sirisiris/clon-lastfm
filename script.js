


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
    fetch(`./music.json${name}`)
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

const tracksContainer = document.querySelector('.track-container');

fetch('music.json')
.then(Response => Response.json())
.then(data => console.log(data))