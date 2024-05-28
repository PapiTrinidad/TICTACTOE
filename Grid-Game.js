

// Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.
// Create a Tic-Tac-Toe game grid using your HTML element of choice.
// When a cell in the grid is clicked, an X or O should appear in that spot depending on whose turn it is.
// A heading should say whether it is X's or O's turn and change with each move made.
// A button should be available to clear the grid and restart the game.
// When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or 
// similar Bootstrap component should appear across the screen announcing the winner.

let currentPlayer = 'X' //  starting player, I chose "X" but it is all the same. 
let board = ['', '', '', '', '', '', '', '', ''] // setting up my board

$(document).ready(function() { // need this to run my jquery function

    $('.tile').click(function() {
        
        let index = $(this).data('index'); // data-index attribute is easiest for me to be able to manipulate with 
        // Jquery, needed it to be declared to so it would be easier to manage
        if(board[index] === '') { // starts the game off when a '.tile' is .click() 
            board[index] = currentPlayer; // whatever # of index is clicked on then that number will be 
        //given the value of the currentPlayer
            $(this).text(currentPlayer); // In doing so that certain tile will now be filled with the value on what is rendered. 
            currentPlayer = currentPlayer === 'X' ?  'O' : 'X'; // here is the transition from "X" to "O"  or "O" to "X"
            $('h3').text(`Player ${currentPlayer} turn`); // Here I used DOM transversal to change the .text() with backticks
            // right under the title of the game
            checkWinner(); // initiates the function checkWinner() 
        }
    })
})



    $('button').click(function() { // reset button function
        board = ['', '', '', '', '', '', '', '', '']; // when the button is clicked it will cause for all the values in the board
        // to be blank so when the button is reset it will go back to a blank board for the next game
        $('.tile').text(''); // change what you see when the button is clicked
        currentPlayer = 'X'; // returns the currentPlayer variable back to its old value of when the game was first started.
        $('h3').text(`Player ${currentPlayer} turn`) //same as to whos turn is it now.
        console.log("Reset") // just checking to see if it work
    })

    
    let possibilities = [ // created a board for what could be done for up/down, diagonal, and left/right.
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    
    function checkWinner() { 
        console.log("Check Winner Ran") // checking to see if it works
        for(let i = 0; i < possibilities.length; i++) { //running through each data-index array of array
            let [a, b, c] = possibilities[i]; // deconstructed to be able check for the next part
           
            if((board[b] === board[c] && board[a] === board[b] && board[a] === board[c]) && board[a] === "X" || board[a] === "O") { 
                $("#alert").text(`The winner is Player ${board[a]}`);  // line 55 - checking to see if there is a match in the possibilities 
                // for the data-index to be able to declare if either "X" or "O" has won and give out an alert after.
              return; // escape so the game does not keep on checking for other winners. 
            }
        }
        // If no winner, check if the board is full (tie)
        if(!board.includes('')) { 
            $("#showAlert").text("It's a tie!"); // connected to the alert and supposed to show
            console.log("The alert should have shown") // checking to see if it works
            return; // exit out of here
        }
    }


// Now I need to console.log an alert when a winner equals "X", "X", "X" 
// or the same for "O"s. Also for the text for h3 to change to whoever is 
// currently playing

// I also need for the reset button to clear the board when pressed. 