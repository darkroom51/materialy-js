document.addEventListener('keydown', function (event) {
    //console.log(event.key)

    switch (event.key){
        case 'ArrowUp':
            console.log('Strzalka w gore')
            break
        case 'ArrowDown':
            console.log('Strzalka w dol')
            break
        case 'ArrowLeft':
            console.log('Strzalka w lewo')
            break
        case 'ArrowRight':
            console.log('Strzalka w prawo')
            break
        default:
            console.log('Inny klawisz')
            break
    }

})

function makeGameBoard(container) {
    var board = document.createElement('div')
    board.style.border = '2px solid black'

    board.style.width = '80vw'
    board.style.height = '80vw'

    board.style.position = 'fixed'
    board.style.left = '50%'
    board.style.top = '50%'
    board.style.transform = "translate(-50%,-50%)"

    container = container || document.body
    container.appendChild(board)
    //;(container || document.body).appendChild(board)

}

functionction makePlayer(board){
   var player = document.createElement('div')
    player.style.backgroundColor = 'red'
    player.style.position = 'absolute'
    player.style.left = '0%'
    player.style.top = '0%'
    player.style.height = 20px;

    board.appendChild(player)

}

