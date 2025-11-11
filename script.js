// Elementos do DOM
const playerAudio = document.getElementById('playerAudio');
const botaoPlayPause = document.getElementById('botaoPlayPause');
const iconePlay = document.getElementById('iconePlay');
const botaoAnterior = document.getElementById('botaoAnterior');
const botaoProximo = document.getElementById('botaoProximo');
const progresso = document.getElementById('progresso');
const barraProgresso = document.getElementById('barraProgresso');
const tempoAtual = document.getElementById('tempoAtual');
const duracao = document.getElementById('duracao');
const tituloMusica = document.getElementById('tituloMusica');
const artistaNome = document.getElementById('artistaNome');
const deslizanteVolume = document.getElementById('deslizanteVolume');
const iconeVolume = document.getElementById('iconeVolume');
const botaoTema = document.getElementById('botaoTema');
const botaoLista = document.getElementById('botaoLista');
const listaMusicas = document.getElementById('listaMusicas');
const fecharLista = document.getElementById('fecharLista');
const itensLista = document.getElementById('itensLista');
const visualizador = document.getElementById('visualizador');

// Estado do player
let estaTocando = false;
let indiceMusicaAtual = 0;
let intervaloVisualizador;
let musicas = [];

// Lista de músicas
const musicasData = [
    {
        titulo: "Março E Junho",
        artista: "Bogdan Ioan",
        capa: "capa/i.jpg",
        audio: "musica/Bogdan Ioan  March and June - Do It Like Jackson _ Official Video.mp3"
    },
    {
        titulo: "ZOMBIES",
        artista: "BAD WOLVES",
        capa: "capa/bad.webp",
        audio: "musica/Bad Wolves - Zombie (Official Video).mp3"
    },
    {
        titulo: "Child Of God", 
        artista: "Dax",
        capa: "capa/DaX.jpg",
        audio: "musica/Dax -  Child Of God.mp3"
    },

    {
        titulo: "Lonely Dirt Road", 
        artista: "Dax",
        capa: "capa/dax3.jpg",
        audio: "musica/Dax -  Lonely Dirt Road.mp3"
    },
    {
        titulo: "Dax-God s Eyes", 
        artista: "Dax",
        capa: "capa/Dax1.jpg",
        audio: "musica/Dax -  God s Eyes.mp3"
    },
    {
        titulo: "To Be A Man", 
        artista: "Dax",
        capa: "capa/dax4.jpg",
        audio: "musica/Dax -  To Be A Man.mp3"
    },
     {
        titulo: "Dream on - Aerosmith", 
        artista: "VoicePlay",
        capa: "capa/voice.jpg",
        audio: "musica/Dream on - Aerosmith Feat. Omar Cardona VoicePlay A Cappella.mp3"
    },

     {
        titulo: "Monsters", 
        artista: "James Blunt",
        capa: "capa/james.jpg",
        audio: "musica/James Blunt - Monsters (Official Music Video).mp3"
    },

        {
        titulo: "Riding With The Kings", 
        artista: "Joe Bonamassa",
        capa: "capa/joe.jpg",
        audio: "musica/Joe Bonamassa - Riding With The Kings - From Live At The Greek Theatre [Bonus Feature].mp3"
    },

      {
        titulo: "Four Day Creep", 
        artista: "Joe Bonamassa",
        capa: "capa/joe1.jpg",
        audio: "musica/Joe Bonamassa & Peter Frampton -  Four Day Creep  - Official Music Video.mp3"
    },
     {
        titulo: "Cadillac Assembly Line", 
        artista: "Joe Bonamassa",
        capa: "capa/joe2.jpg",
        audio: "musica/Joe Bonamassa Official -  Cadillac Assembly Line  - Live At The Greek Theatre.mp3"
    },

     {
        titulo: " Midnight Blues", 
        artista: "Joe Bonamassa",
        capa: "capa/joe3.webp",
        audio: "musica/Joe Bonamassa Official -  Midnight Blues  - Beacon Theatre Live From New York.mp3"
    },

    {
        titulo: " Waves in the Sky", 
        artista: "Post Malone ft. Wiz khalifa",
        capa: "capa/post.jpg",
        audio: "musica/Post Malone ft. Wiz khalifa inspired_ Waves in the Sky (Heartfelt Lyric Video).mp3"
    },
    {
        titulo: "The Heart That Never Waits", 
        artista: "Joe Bonamassa",
        capa: "capa/joe4.jpeg",
        audio: "musica/Joe Bonamassa -  The Heart That Never Waits  (Live) - Tales of Time.mp3"
    },

     {
        titulo: "Driving Towards The Daylight", 
        artista: "Joe Bonamassa",
        capa: "capa/joe5.jpg",
        audio: "musica/Joe Bonamassa -  Driving Towards The Daylight  - Official Music Video.mp3"
    },
    {
        titulo: "Soul Blues Ballad", 
        artista: "Sons of Ashes",
        capa: "capa/sons.jpg",
        audio: "musica/Peace in the Fire - Soul Blues Ballad _ Sons of ashes.mp3"
    },
     {
        titulo: "Broken Record", 
        artista: "Joe Bonamassa",
        capa: "capa/joe6.jpg",
        audio: "musica/Joe Bonamassa “Broken Record” - Official Music Video.mp3"
    },
     {
        titulo: "Prisoner", 
        artista: "Joe Bonamassa",
        capa: "capa/joe7.jpg",
        audio: "musica/Joe Bonamassa -  Prisoner  - Live At The Hollywood Bowl With Orchestra.mp3"
    },
    {
        titulo: "Loving You Was Losing Me", 
        artista: "Sons of Ashes",
        capa: "capa/romantic.webp",
        audio: "musica/Loving You Was Losing Me - Soul Blues Ballad _ Sons of ashes.mp3"
    },
    {
        titulo: "In The Air Tonight", 
        artista: "Sons of Legion",
        capa: "capa/in.jpg",
        audio: "musica/Sons of Legion - In The Air Tonight (Official Music Video).mp3"
    },
    {
        titulo: "Shadow of a Man ", 
        artista: "Bogdan Ioan",
        capa: "capa/shadow.jpg",
        audio: "musica/Bogdan Ioan - Shadow of a Man by Lady Gaga (Michael Jackson Cover Version).mp3"
    },
    {
        titulo: "I d Rather Go Blind  ", 
        artista: "Bert Hart",
        capa: "capa/beth.jpg",
        audio: "musica/I d Rather Go Blind - Beth Hart.mp3"
    },
     {
        titulo: "Money On You", 
        artista: "Bogdan Ioan",
        capa: "capa/bog.webp",
        audio: "musica/Bogdan Ioan - Money On You _ Official Video.mp3"
    },

     {
        titulo: "Adore",
        artista: "Prince",
        capa: "capa/prince.jpg",
        audio: "musica/Adore.mp3"
    },
    //Segunda parte das Músicas

    { 
        titulo: "Don't Matter To Me", 
        artista: "Drake ft. Michael Jackson", 
        capa: 'capa/drake.gif', 
        audio: 'musica/Drake Michael Jackson.mp3' 
    },
    { 
        titulo: "Sacrifice", 
        artista: "The Weeknd", 
        capa: 'capa/sacrifice.webp', 
        audio: 'musica/The Weeknd, Swedish House Mafia - Sacrifice.mp3' 
    },
    { 
        titulo: "Cold", 
        artista: "Chris Stapleton", 
        capa: 'capa/cold.jpg', 
        audio: 'musica/Chris Stapleton - Cold (CMA Awards 2021).mp3' 
    },
    { 
        titulo: "The Hills", 
        artista: "The Weeknd", 
        capa: 'capa/hils.gif', 
        audio: 'musica/The Weeknd - The Hills.mp3' 
    },
    { 
        titulo: "In The Night", 
        artista: "The Weeknd", 
        capa: 'capa/car.gif', 
        audio: 'musica/The Weeknd - In The Night.mp3' 
    },
    { 
        titulo: "Billie Jean", 
        artista: "Michael Jackson", 
        capa: 'capa/bilie.jpg', 
        audio: 'musica/BILLIE JEAN.mp3' 
    },
    { 
        titulo: "Take My Breath", 
        artista: "The Weeknd", 
        capa: 'capa/breat.gif', 
        audio: 'musica/The Weeknd - Take My Breath.mp3' 
    },
    { 
        titulo: "Ayo Technology", 
        artista: "50 Cent feat. Justin Timberlake", 
        capa: 'capa/50.gif', 
        audio: 'musica/50 Cent feat. Justin Timberlake - Ayo Technology.mp3' 
    },
    { 
        titulo: "In The Air Tonight", 
        artista: "Phil Collins", 
        capa: 'capa/phil.jpeg', 
        audio: 'musica/Phil Collins - In The Air Tonight.mp3' 
    },
    { 
        titulo: "Mannish Boy", 
        artista: "Muddy Waters", 
        capa: 'capa/muddy.jpg', 
        audio: 'musica/Muddy Waters - Mannish Boy.mp3' 
    },
    { 
        titulo: "Hotel California", 
        artista: "Eagles", 
        capa: 'capa/eagles.png', 
        audio: 'musica/Eagles - Hotel California.mp3' 
    },
    { 
        titulo: "Celebration", 
        artista: "Kool & The Gang", 
        capa: 'capa/celebra.jpg', 
        audio: 'musica/Kool & The Gang - Celebration.mp3' 
    },
    { 
        titulo: "Get Down On It", 
        artista: "Kool & The Gang", 
        capa: 'capa/get.jpg', 
        audio: 'musica/Kool & The Gang - Get Down On It.mp3' 
    },
    { 
        titulo: "It's A Man's Man's Man's World", 
        artista: "James Brown", 
        capa: 'capa/soul.jpg', 
        audio: 'musica/James Brown.mp3' 
    },
    { 
        titulo: "It Not Right But Its Okay", 
        artista: "Whitney Houston", 
        capa: 'capa/but.gif', 
        audio: 'musica/Whitney Houston - It Not Right But Its Okay.mp3' 
    },
    { 
        titulo: "September", 
        artista: "Earth, Wind & Fire", 
        capa: 'capa/fire.jpg', 
        audio: 'musica/Earth, Wind & Fire - September.mp3' 
    },
    { 
        titulo: "Hold The Line", 
        artista: "Toto", 
        capa: 'capa/toto.jpg', 
        audio: 'musica/Toto - Hold The Line.mp3' 
    },
    { 
        titulo: "Everybody Wants To Rule The World", 
        artista: "Tears for Fears", 
        capa: 'capa/tears.jpg', 
        audio: 'musica/Everybody Wants To Rule The World.mp3' 
    },
  
    { 
        titulo: "Careless Whisper", 
        artista: "George Michael", 
        capa: 'capa/george.webp', 
        audio: 'musica/George Michael - Careless Whisper.mp3' 
    },
    { 
        titulo: "Your Love", 
        artista: "The Outfield", 
        capa: 'capa/love.jpg', 
        audio: 'musica/The Outfield - Your Love.mp3' 
    },
    { 
        titulo: "Stayin Alive", 
        artista: "Bee Gees", 
        capa: 'capa/bee gees.avif', 
        audio: 'musica/Bee Gees - Stayin Alive.mp3' 
    },
    { 
        titulo: "Blame It On the Boogie", 
        artista: "The Jacksons", 
        capa: 'capa/bogie.jpg', 
        audio: 'musica/The Jacksons - Blame It On the Boogie.mp3' 
    },
    { 
        titulo: "Ain't No Mountain High Enough", 
        artista: "Marvin Gaye & Tammi Terrell", 
        capa: 'capa/marvin.jpg', 
        audio: 'musica/Aint No Mountain High Enough.mp3' 
    },
   
    { 
        titulo: "Rasputin", 
        artista: "Boney M.", 
        capa: 'capa/rasputin.jpg', 
        audio: 'musica/Boney M. - Rasputin.mp3' 
    },
    { 
        titulo: "Underneath the Stars", 
        artista: "Wendel Gama", 
        capa: 'capa/sacada.gif', 
        audio: 'musica/Wendel Gama - Underneath the Stars.mp3' 
    },
    { 
        titulo: "Kiss and Say Goodbye", 
        artista: "The Manhattans", 
        capa: 'capa/kiss.jpg', 
        audio: 'musica/The Manhattans - Kiss and Say Goodbye.mp3' 
    },
    { 
        titulo: "What Kind", 
        artista: "Mint Condition", 
        capa: 'capa/fundo2.gif', 
        audio: 'musica/Mint Condition - What Kind.mp3' 
    },
    { 
        titulo: "End Of The Road", 
        artista: "Boyz II Men", 
        capa: 'capa/boys.jpeg', 
        audio: 'musica/Boyz II Men - End Of The Road.mp3' 
    },
    { 
        titulo: "Don't Take It Personal", 
        artista: "Jermaine Jackson", 
        capa: 'capa/jermaine.jpg', 
        audio: 'musica/Jermaine Jackson - Dont Take It Personal.mp3' 
    },
    { 
        titulo: "We Belong Together", 
        artista: "Mariah Carey", 
        capa: 'capa/marie.jpg', 
        audio: 'musica/Mariah Carey - We Belong Together.mp3' 
    },
    { 
        titulo: "Run To You", 
        artista: "Whitney Houston", 
        capa: 'capa/run.jpg', 
        audio: 'musica/Whitney Houston - Run To You.mp3' 
    },
    { 
        titulo: "Back At One", 
        artista: "Brian McKnight", 
        capa: 'capa/brian.jpg', 
        audio: 'musica/Brian McKnight - Back At One.mp3' 
    },
    { 
        titulo: "I Have Nothing", 
        artista: "Whitney Houston", 
        capa: 'capa/w.avif', 
        audio: 'musica/Whitney Houston - I Have Nothing.mp3' 
    },
    { 
        titulo: "In The End", 
        artista: "Linkin Park", 
        capa: 'capa/nd.jpg', 
        audio: 'musica/In The EndLinkin Park.mp3' 
    },
    { 
        titulo: "Don't Walk Away", 
        artista: "Michael Jackson", 
        capa: 'capa/dont.jpg', 
        audio: 'musica/(A.I) Michael Jackson - Dont Walk Away.mp3' 
    },
    { 
        titulo: "I Don't Want to Miss a Thing", 
        artista: "Aerosmith", 
        capa: 'capa/aero.avif', 
        audio: 'musica/Aerosmith - I Dont Want to Miss a Thing.mp3' 
    },
    { 
        titulo: "More Than Words", 
        artista: "Extreme", 
        capa: 'capa/more.jpg', 
        audio: 'musica/Extreme - More Than Words.mp3' 
    },
    { 
        titulo: "Bring Me To Life", 
        artista: "Evanescence", 
        capa: 'capa/bring.jpg', 
        audio: 'musica/Evanescence - Bring Me To Life.mp3' 
    },
    { 
        titulo: "In Your Eyes", 
        artista: "George Benson", 
        capa: 'capa/g.webp', 
        audio: 'musica/In Your Eyes.mp3' 
    },
    { 
        titulo: "Would I Lie To You", 
        artista: "Charles & Eddie", 
        capa: 'capa/eddie.avif', 
        audio: 'musica/Charles  Eddie - Would I Lie To You.mp3' 
    },
    { 
        titulo: "I Will Always Love You", 
        artista: "Whitney Houston", 
        capa: 'capa/w.avif', 
        audio: 'musica/y2meta.com - whiteney).mp3' 
    },
    { 
        titulo: "How Deep Is Your Love", 
        artista: "Bee Gees", 
        capa: 'capa/bee gees1.jpg', 
        audio: 'musica/Bee Gees - How Deep Is Your Love (Official Video).mp3' 
    },
    { 
        titulo: "We Are The World", 
        artista: "USA for Africa", 
        capa: 'capa/world.jpg', 
        audio: 'musica/We Are The World.mp3' 
    },
    { 
        titulo: "Oh Girl", 
        artista: "Paul Young", 
        capa: 'capa/paul.jpg', 
        audio: 'musica/Paul Young - Oh Girl (UK Version) [Official Video].mp3' 
    },
    { 
        titulo: "Popular", 
        artista: "The Weeknd, Madonna, Playboi Carti", 
        capa: 'capa/popular.gif', 
        audio: 'musica/The Weeknd, Madonna, Playboi Carti - Popular (Official Music Video).mp3' 
    },
   
    { 
        titulo: "Musicology", 
        artista: "Prince", 
        capa: 'capa/prince1.jpg', 
        audio: 'musica/Prince - Musicology (Official Music Video).mp3' 
    },
    { 
        titulo: "Immortality", 
        artista: "Céline Dion ft. Bee Gees", 
        capa: 'capa/celine.jpg', 
        audio: 'musica/Céline Dion - Immortality (Official HD Video) ft. Bee Gees.mp3'
    },

    { 
        titulo: "Creepin", 
        artista: "The Weeknd", 
        capa: 'capa/crepin.jpg', 
        audio: 'musica/Creepin.mp3'
    
    },

    // terceira parte

     { 
        titulo: "Human", 
        artista: "RagnBone", 
        capa: 'capa/rag.webp',
        audio: 'musica/Human - Rag n Bone Man (Lyrics).mp3'
    
    },
     { 
        titulo: " Who Is It", 
        artista: "Michael Jackson", 
        capa: 'capa/mj.webp',
        audio: 'musica/Michael Jackson - Who Is It (Official Video).mp3'
    
    },
     { 
        titulo: " Impossible ", 
        artista: "James Arthur", 
        capa: 'capa/james_arthur.webp',
        audio: 'musica/James Arthur - Impossible (Official Video).mp3'
    
    },
     { 
        titulo: " How Do I Breathe ", 
        artista: "Mario", 
        capa: 'capa/mario.webp',
        audio: 'musica/Mario - How Do I Breathe (Official Video).mp3'
    
    },
   
    {
        titulo: "Call My Name",
        artista: "Prince", 
        capa: "capas/Prince1.webp",
        audio: "song/05  Call My Name.mp3"
    },
    {
        titulo: "The Question",
        artista: "Prince",
        capa: "capas/prince3.jpg",
        audio: "song/14  The One - The Question Of U - Fallin'.mp3"
    },
    {
        titulo: "All the Critics",
        artista: "Prince",
        capa: "capas/29961031[1].jpg",
        audio: "song/15  All The Critics Love U In London.mp3"
    },
    {
        titulo: "Illusion, Coma, Pimp & Circumstance",
        artista: "Prince",
        capa: "capas/2.jpg",
        audio: "song/02  Illusion, Coma, Pimp.mp3"
    },
 {
        titulo: "Cinnamon Girl",
        artista: "Prince",
        capa: "capas/5.avif",
        audio: "song/06  Cinnamon Girl.mp3"
    },
    {
        titulo: "Avalanche",
        artista: "Prince",
        capa: "capas/3.jpg",
        audio: "song/07  Avalanche.mp3"
    },
     {
        titulo: "On The Couch",
        artista: "Prince",
        capa: "capas/6.jpg",
        audio: "song/10  On The Couch.mp3"
    },
     {
        titulo: "Dear Mr. Man",
        artista: "Prince",
        capa: "capas/8.jpg",
        audio: "song/11  Dear Mr. Man.mp3"
    },
    

 {
        titulo: "Starboy (Feat. Daft Punk)",
        artista: "The Weeknd",
        capa: "capa/star.jpg",
        audio: "song/01.- Starboy (Feat. Daft Punk).flac"
    },
     {
        titulo: "Party Monster",
        artista: "The Weeknd",
        capa: "capa/monster.jpg",
        audio: "song/02.- Party Monster.flac"
    },
     {
        titulo: "Rockin",
        artista: "The Weeknd",
        capa: "capa/rock.jpg",
        audio: "song/05.- Rockin'.flac"
    },
      {
        titulo: "Bleeding Love",
        artista: "Leona Lewis",
        capa: "capa/leona.jpg",
        audio: "musica/Leona Lewis - Bleeding Love (US Version - Official Video).mp3"
    },
       {
        titulo: "Bust Your Windows",
        artista: "Jazmine Sullivan",
        capa: "capa/jaz.jpg",
        audio: "musica/Jazmine Sullivan - Bust Your Windows.mp3"
    },
      {
        titulo: "No Sleeep",
        artista: "Janet Jackson",
        capa: "capa/janet.gif",
        audio: "musica/Janet Jackson -  No Sleeep  Feat. J. Cole (Music Video).mp3"
    },










];

// Inicialização
function inicializar() {
    musicas = musicasData;
    configurarAudio();
    carregarMusica(indiceMusicaAtual);
    criarBarrasVisualizador();
    criarListaMusicas();
    configurarEventos();
    configurarTemas();
}

function configurarAudio() {
    playerAudio.volume = 0.7;
    deslizanteVolume.value = 70;
}

function carregarMusica(indice) {
    const musica = musicas[indice];
    tituloMusica.textContent = musica.titulo;
    artistaNome.textContent = musica.artista;
    document.getElementById('capaAlbum').src = musica.capa;
    playerAudio.src = musica.audio;
    
    progresso.style.width = "0%";
    tempoAtual.textContent = "0:00";
    duracao.textContent = "0:00";
    
    atualizarListaMusicas();
    
    playerAudio.onloadedmetadata = function() {
        duracao.textContent = formatarTempo(playerAudio.duration);
    };
}

function criarBarrasVisualizador() {
    visualizador.innerHTML = '';
    for (let i = 0; i < 40; i++) {
        const barra = document.createElement('div');
        barra.className = 'barra';
        barra.style.height = `${Math.random() * 20 + 5}%`;
        visualizador.appendChild(barra);
    }
}

function atualizarVisualizador() {
    const barras = document.querySelectorAll('.barra');
    barras.forEach(barra => {
        if (estaTocando && !playerAudio.paused) {
            barra.style.height = `${Math.random() * 60 + 10}%`;
        } else {
            barra.style.height = `${Math.random() * 20 + 5}%`;
        }
    });
}

function criarListaMusicas() {
    itensLista.innerHTML = '';
    musicas.forEach((musica, index) => {
        const item = document.createElement('li');
        item.textContent = `${musica.titulo} - ${musica.artista}`;
        item.addEventListener('click', () => {
            indiceMusicaAtual = index;
            carregarMusica(indiceMusicaAtual);
            if (estaTocando) {
                playerAudio.play();
            }
            listaMusicas.classList.remove('mostrar');
        });
        itensLista.appendChild(item);
    });
}

function atualizarListaMusicas() {
    const itens = itensLista.querySelectorAll('li');
    itens.forEach((item, index) => {
        item.classList.toggle('tocando', index === indiceMusicaAtual);
    });
}

function formatarTempo(segundos) {
    if (isNaN(segundos)) return "0:00";
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min}:${seg < 10 ? '0' : ''}${seg}`;
}

function atualizarProgresso() {
    if (playerAudio.duration) {
        const percentual = (playerAudio.currentTime / playerAudio.duration) * 100;
        progresso.style.width = `${percentual}%`;
        tempoAtual.textContent = formatarTempo(playerAudio.currentTime);
    }
}

function configurarEventos() {
    botaoPlayPause.addEventListener('click', alternarPlayPause);
    
    deslizanteVolume.addEventListener('input', function(e) {
        const novoVolume = parseInt(e.target.value) / 100;
        playerAudio.volume = novoVolume;
        atualizarIconeVolume(novoVolume);
    });
    
    botaoAnterior.addEventListener('click', () => {
        indiceMusicaAtual = (indiceMusicaAtual - 1 + musicas.length) % musicas.length;
        carregarMusica(indiceMusicaAtual);
        if (estaTocando) {
            playerAudio.play();
        }
    });
    
    botaoProximo.addEventListener('click', () => {
        indiceMusicaAtual = (indiceMusicaAtual + 1) % musicas.length;
        carregarMusica(indiceMusicaAtual);
        if (estaTocando) {
            playerAudio.play();
        }
    });
    
    barraProgresso.addEventListener('click', (e) => {
        if (playerAudio.duration) {
            const rect = barraProgresso.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            playerAudio.currentTime = percent * playerAudio.duration;
        }
    });
    
    botaoLista.addEventListener('click', () => {
        listaMusicas.classList.add('mostrar');
    });
    
    fecharLista.addEventListener('click', () => {
        listaMusicas.classList.remove('mostrar');
    });
    
    playerAudio.addEventListener('timeupdate', atualizarProgresso);
    playerAudio.addEventListener('ended', () => botaoProximo.click());
}

function atualizarIconeVolume(volume) {
    if (volume === 0) {
        iconeVolume.className = 'fas fa-volume-mute';
    } else if (volume < 0.5) {
        iconeVolume.className = 'fas fa-volume-down';
    } else {
        iconeVolume.className = 'fas fa-volume-up';
    }
}

function alternarPlayPause() {
    if (!estaTocando) {
        playerAudio.play().then(() => {
            estaTocando = true;
            iconePlay.className = 'fas fa-pause';
            iniciarAnimacoes();
        }).catch(error => {
            console.error("Erro ao reproduzir:", error);
        });
    } else {
        playerAudio.pause();
        estaTocando = false;
        iconePlay.className = 'fas fa-play';
        pararAnimacoes();
    }
}

function iniciarAnimacoes() {
    if (intervaloVisualizador) clearInterval(intervaloVisualizador);
    intervaloVisualizador = setInterval(atualizarVisualizador, 150);
}

function pararAnimacoes() {
    if (intervaloVisualizador) {
        clearInterval(intervaloVisualizador);
    }
    const barras = document.querySelectorAll('.barra');
    barras.forEach(barra => {
        barra.style.height = `${Math.random() * 20 + 5}%`;
    });
}

function configurarTemas() {
    const botaoTema = document.getElementById('botaoTema');
    let temaAtual = 'dark';
    
    botaoTema.addEventListener('click', function() {
        document.body.classList.remove('tema-dark', 'tema-cinza');
        
        if (temaAtual === 'dark') {
            document.body.classList.add('tema-cinza');
            temaAtual = 'cinza';
            botaoTema.innerHTML = '<i class="fas fa-palette"></i>';
        } else {
            document.body.classList.add('tema-dark');
            temaAtual = 'dark';
            botaoTema.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', inicializar);