


const gameBorder = document.getElementsByClassName('gameBorder')[0]; 
console.log(gameBorder);
let toolSelected; 

const toffeeTool = document.querySelector('.toffeeTool');
const candyTool = document.querySelector('.candyTool');
const MarshTool = document.querySelector('.MarshTool');

toffeeTool.addEventListener('click',function(){
    toolSelected = 'toffee'; 
})

candyTool.addEventListener('click', function(){
    toolSelected = 'candy';
})


MarshTool.addEventListener('click', function(){
    toolSelected = 'marshmallow';
})




function createTile(classAdder){

    const tile = document.createElement('div');
    tile.classList.add('tile-element', classAdder);

    tile.addEventListener('click',function(){
        if(toolSelected === classAdder){
            replaseTile(tile);
        }
    })

   

    return tile; 
}


function createWorld(){
    gameBorder.innerHTML = ''; 

    for(let j=0; j<10;j++){
        for(let i=0; i<30; i++){
            gameBorder.appendChild(createTile('sky')); 
        }
    }

    for(let j=10; j<11;j++){
        for(let i=0; i<30; i++){
            gameBorder.appendChild(createTile('toffee')); 
        }
    }

    for(let j=10; j<28;j++){
        for(let i=0; i<30; i++){
            gameBorder.appendChild(createTile('candy')); 
        }
    }

    for(let j=28; j<29;j++){
        for(let i=0; i<30; i++){
            gameBorder.appendChild(createTile('marshmallow')); 
        }
    }

    
    
    

}




createWorld();


function replaseTile(tile){
    tile.classList.remove('toffee', 'candy', 'marshmallow');
    tile.classList.add('sky');
}