window.onload = function() {
    let nodeStart
    selectSide()
    nodeStart = document.querySelector( ".start" );
    nodeStart.onclick = start;
   
    
   
}

function selectSide(){
    let node = document.querySelector(".overlay")
    boton = document.querySelectorAll(".boton");
    node.classList.remove("hidden")
    boton[0].onclick=start
    boton[1].onclick=start
    node.className
  
}
function start() {
    let  titulo = document.querySelector(".titulo")
    let nodes;
    let noder = document.querySelector(".overlay")
    let mostrar = document.querySelector(".mostrar")
    rondasPorJugar =parseInt (document.querySelector(".ronda").value)
    if (rondasPorJugar > 1){
    mostrar.innerHTML = `Rondas restantes <span class="color">${rondasJugadas}/${rondasPorJugar}</span>`}
    console.log(rondasPorJugar)
    nodes = document.querySelectorAll( "div.box" );
    nodes.forEach(node => {
        node.classList.remove( "disabled","colorX", "colorO" );
        node.innerText = "";
        node.onclick = clicBox
        noder.classList.add( "hidden" );
        titulo.innerText = ""

    });
}

function clicBox() {

    let nodes, nodeMessage;
    const arItems = [ 
        [ "X", "colorX" ],
        [ "O", "colorO" ]
    ];
    let i;
    nodes = document.querySelectorAll( "div.box" );
    nodeMessage = document.querySelector( ".message" );
    
    // Recorrer y contar cuantos no estan vacios
    i = 0;
    nodes.forEach( node => {
        if ( node.innerText !== "" ) {
            i++;
        }
    });
   
    if ( this.innerText === "" ) {
        this.innerText = arItems[ i % 2 ][ 0 ];
        this.classList.add ( arItems[ i % 2 ][ 1 ] );
        
        nodeMessage.innerText = "";
    } else {
        nodeMessage.innerText = "Casilla ocupada";
    } checkWinner()
}

rondasJugadas = 0

 scorex = 0;
scoreo = 0
function checkWinner( ) {
    let nodes = document.querySelectorAll( "div.box" );
    let  titulo = document.querySelector(".titulo")
    

    const arLinesWinners = [ 
        [ 0, 3, 6 ],
        [ 1, 4, 7 ],
        [ 2, 4, 8 ], 
        [ 0, 1, 2 ],
        [ 3, 4, 5 ],
        [ 6, 7, 8 ],
        [ 0, 4, 8 ],
        [ 6, 4, 2 ],
    ]; 
    arLinesWinners.forEach(ganadores => {
        
        
        
    });
    ;
    arLinesWinners.forEach( arLinesWinners => {
        
        
        
        if ( nodes[ arLinesWinners[ 0 ] ].innerText === nodes[ arLinesWinners[ 1 ] ].innerText && nodes[ arLinesWinners[ 0 ] ].innerText === nodes[ arLinesWinners[ 2 ] ].innerText && nodes[ arLinesWinners[ 0 ] ].innerText !== "" ) {
            rondasJugadas++
            if (nodes[ arLinesWinners[ 0 ] ].innerText==="X"){
            titulo.innerText = "ha ganado jugador " +  nodes[ arLinesWinners[ 0 ] ].innerText
            scorex++
            nodes.forEach(node => {
                node.classList.add( "disabled" );
                node.onclick = "";
                showPlayers()
                if (rondasJugadas === rondasPorJugar){
                    rondas()
               } 
               
            })
        }else {
            titulo.innerText = "ha ganado jugador " +  nodes[ arLinesWinners[ 0 ] ].innerText
            scoreo++
            nodes.forEach(node => {
                node.classList.add( "disabled" );
                node.onclick = "";
                showPlayers()
                if (rondasJugadas === rondasPorJugar){
                    rondas()
               } 
               
               
            })
        }  
     
       console.log ( rondasJugadas)  }

    } );


}


function showPlayers(){
    
    let  next = document.querySelector(".continue")
    let node = document.querySelector(".jugadores")
    node.classList.remove("escondido")
    next.onclick = hiddenPlayer
    contador()
   
}

function hiddenPlayer(){
    let node = document.querySelector(".jugadores")
    node.classList.add("escondido")
    start()
    
}

function contador(){
    let jugadorX = document.querySelector(".jugadore-1")
    let jugadorO = document.querySelector(".jugadore-2")
    jugadorX.innerHTML= `Jugador X:  <span>${scorex}</span>`   
    jugadorO.innerHTML= `Jugador O:  <span>${scoreo}</span>`
}  

function rondas(){
    plays = document.querySelector(".plays")
    jugadoresss = document.querySelector(".jugadoress")
    titulos = document.querySelector(".titulos")
    if (scoreo > scorex){
        titulos.innerText = `EL JUGADOR O GANÓ EL JUEGO  `
    }   else if (scorex > scoreo) {
        titulos.innerText = `EL JUGADOR X GANÓ EL JUEGO  `
    } else {
        titulos.innerText = "EL JUEGO HA QUEDADO EMPATE"
    }
    jugadoresss.classList.remove("escondidos")

    plays.onclick = hiddenRondas

}

function hiddenRondas(){
    jugadoresss = document.querySelector(".jugadoress")
    jugadoresss.classList.add("escondidos")
    selectSide()
    scoreo = 0
    scorex = 0
    rondasPorJugar = 0
    rondasJugadas = 1
}