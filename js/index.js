$(document).ready(function() {
    var currentPlayer = "o";
    var count = 0;
    var o_win = 0;
    var x_win = 0;
    var size = 3; // Default size of the board

    function checkWin(currentPlayer) {
        const winningCombinations = generateWinningCombinations(size);
        
        for (const combination of winningCombinations) {
            const hasWinningCombination = combination.every(cell => {
                const hasClass = $(`#${cell}`).hasClass(currentPlayer);
                console.log(`Cell ${cell} has class ${currentPlayer}: ${hasClass}`); 
                return hasClass;
            });
            if (hasWinningCombination) {
                return true;
            }
        }
        return false;
    }

    function resetGame() {
        $("#game li").text("+").removeClass('disable o x btn-primary btn-info');
        count = 0;
        currentPlayer = "o"; 
    }

    $('#game').on('click', 'li', function() {
        if ($(this).hasClass('disable')) {
            alert('Already selected');
            return;
        }
        $(this).text(currentPlayer).addClass(`disable ${currentPlayer} ${currentPlayer === "o" ? 'btn-primary' : 'btn-info'}`);
        count++;

        if (checkWin(currentPlayer)) {
            alert(`${currentPlayer.toUpperCase()} wins the game. Start a new game`);
            if (currentPlayer === "o") {
                o_win++;
                $('#o_win').text(o_win);
            } else {
                x_win++;
                $('#x_win').text(x_win);
            }
            resetGame();
            return;
        }

        if (count === size * size) {
            alert("It's a tie. Restarting the game.");
            resetGame();
            return;
        }

        currentPlayer = currentPlayer === "o" ? "x" : "o"; 
    });

    $("#apply-board-size").click(function() {
        size = parseInt($("#board-size").val());
        createBoardCells(size, "game"); 
        resetGame();  
    });

    $("#reset").click(function() {
        o_win = 0;
        x_win = 0;
        $('#o_win').text(o_win);
        $('#x_win').text(x_win);
        resetGame();
    });

    function createBoardCells(size, parentNodeId) {
        const game = document.getElementById(parentNodeId)
        game.innerHTML = '';
        let style = '';

        for (let i = 0; i < size; i++) {
            style = `${style} 1fr`
        }

        game.style.gridTemplateColumns = style

        let counter = 0
            for (let j = 0; j < size*size; j++) {
                let element = document.createElement('li'); 
                element.className = 'btn'; 
                element.textContent = '+';  
                element.id = '' + counter;
                counter++
                document.getElementById(parentNodeId).appendChild(element);
            }
        
    }
    
    function generateWinningCombinations(size) {
        const combinations = [];
        // Rows
        for (let i = 0; i < size; i++) {
            const row = [];
            for (let j = 0; j < size; j++) {
                row.push(i * size + j);
            }
            combinations.push(row);
        }
        // Columns
        for (let i = 0; i < size; i++) {
            const col = [];
            for (let j = 0; j < size; j++) {
                col.push(j * size + i);
            }
            combinations.push(col);
        }
        // Diagonals
        const diagonal1 = [];
        const diagonal2 = [];
        for (let i = 0; i < size; i++) {
            diagonal1.push(i * size + i);
            diagonal2.push((i + 1) * size - (i + 1));
        }
        combinations.push(diagonal1, diagonal2);
        return combinations;
    }
});
