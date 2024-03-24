$(document).ready(function() {
    function generateWinningCombinations(size) {
        const combinations = [];
    
        // Rows
        for (let i = 0; i < size; i++) {
            const row = [];
            for (let j = 0; j < size; j++) {
                row.push(i * size + j + 1);
            }
            combinations.push(row);
        }
    
        // Columns
        for (let i = 0; i < size; i++) {
            const col = [];
            for (let j = 0; j < size; j++) {
                col.push(j * size + i + 1);
            }
            combinations.push(col);
        }
    
        // Diagonals
        const diagonal1 = [];
        const diagonal2 = [];
        for (let i = 0; i < size; i++) {
            diagonal1.push(i * size + i + 1);
            diagonal2.push((i + 1) * size - i);
        }
        combinations.push(diagonal1, diagonal2);
    
        return combinations;
    }
    
    
    var x = "x";
    var o = "o";
    var count = 0;
    var o_win = 0;
    var x_win = 0;

    $('#game li').click(function() {
        console.log("Clicked on a cell.");

        console.log("Checking for O win conditions...");
        console.log("Row 1:", $("#one").hasClass('o'), $("#two").hasClass('o'), $("#three").hasClass('o'));
        console.log("Row 2:", $("#four").hasClass('o'), $("#five").hasClass('o'), $("#six").hasClass('o'));
        console.log("Row 3:", $("#seven").hasClass('o'), $("#eight").hasClass('o'), $("#nine").hasClass('o'));
        console.log("Column 1:", $("#one").hasClass('o'), $("#four").hasClass('o'), $("#seven").hasClass('o'));
        console.log("Column 2:", $("#two").hasClass('o'), $("#five").hasClass('o'), $("#eight").hasClass('o'));
        console.log("Column 3:", $("#three").hasClass('o'), $("#six").hasClass('o'), $("#nine").hasClass('o'));
        console.log("Diagonal 1:", $("#one").hasClass('o'), $("#five").hasClass('o'), $("#nine").hasClass('o'));
        console.log("Diagonal 2:", $("#three").hasClass('o'), $("#five").hasClass('o'), $("#seven").hasClass('o'));

        if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o')) {
            console.log("O wins");
            alert('O has won the game. Start a new game')
            $("#game li").text("+");
            $("#game li").removeClass('disable')
            $("#game li").removeClass('o')
            $("#game li").removeClass('x')
            $("#game li").removeClass('btn-primary')
            $("#game li").removeClass('btn-info')
        } else if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x')) {
            console.log("X wins");
            alert('X wins has won the game. Start a new game')
            $("#game li").text("+");
            $("#game li").removeClass('disable')
            $("#game li").removeClass('o')
            $("#game li").removeClass('x')
            $("#game li").removeClass('btn-primary')
            $("#game li").removeClass('btn-info')
        } else if (count == 9) {
            console.log("It's a tie");
            alert('Its a tie. It will restart.')
            $("#game li").text("+");
            $("#game li").removeClass('disable')
            $("#game li").removeClass('o')
            $("#game li").removeClass('x')
            $("#game li").removeClass('btn-primary')
            $("#game li").removeClass('btn-info')
            count = 0
        } else if ($(this).hasClass('disable')) {
            console.log("Already selected");
            alert('Already selected')
        } else if (count % 2 == 0) {
            console.log("Player O's turn");
            count++
            $(this).text(o)
            $(this).addClass('disable o btn-primary')
            if ($("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') || $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') || $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') || $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') || $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') || $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o')) {
                console.log("O wins");
                alert('O wins')
                count = 0
                o_win++
                $('#o_win').text(o_win)
            }
        } else {
            console.log("Player X's turn");
            count++
            $(this).text(x)
            $(this).addClass('disable x btn-info')
            if ($("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') || $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') || $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') || $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') || $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') || $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') || $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x')) {
                console.log("X wins");
                alert('X wins')
                count = 0
                x_win++
                $('#x_win').text(x_win)
            }
        }
    });

    $("#reset").click(function() {
        console.log("Game reset.");
        $("#game li").text("+");
        $("#game li").removeClass('disable')
        $("#game li").removeClass('o')
        $("#game li").removeClass('x')
        $("#game li").removeClass('btn-primary')
        $("#game li").removeClass('btn-info')
        count = 0
    });
    $("#apply-board-size").click(function() {
        var size = parseInt($("#board-size").val());
        const winningCombinations = generateWinningCombinations(size);
        console.log(winningCombinations);
    });

});


