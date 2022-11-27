function isCWin(board, c) {
    let win = new Array(new Array(0, 1, 2), // Check first row.
        new Array(3, 4, 5), // Check second Row
        new Array(6, 7, 8), // Check third Row
        new Array(0, 3, 6), // Check first column
        new Array(1, 4, 7), // Check second Column
        new Array(2, 5, 8), // Check third Column
        new Array(0, 4, 8), // Check first Diagonal
        new Array(2, 4, 6)); // Check second Diagonal

    // Check all possible winning combinations
    for (let i = 0; i < 8; i++)
        if (board[win[i][0]] == c &&
            board[win[i][1]] == c &&
            board[win[i][2]] == c)
            return true;
    return false;
}
[0]

function isValid(board) {
    // Count number of 'X' and 'O'
    // in the given board
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < 9; i++) {
        if (board[i] == 'X') xCount++;
        if (board[i] == 'O') oCount++;
    }

    // Board can be valid only if either
    // xCount and oCount is same or count
    // is one more than oCount 
    if (xCount == oCount || xCount == oCount + 1) {
        // Check if 'O' is winner
        if (isCWin(board, 'O')) {
            // Check if 'X' is also winner,
            // then return false
            if (isCWin(board, 'X'))
                return false;

            // Else return true xCount and
            // yCount are same
            return (xCount == oCount);
        }

        // If 'X' wins, then count of X
        // must be greater
        if (isCWin(board, 'X') &&
            xCount != oCount + 1)
            return false;

        // If 'O' is not winner, then
        // return true
        return true;
    }
    return false;
}






// let board = new Array('X', 'X', 'O', 'O',
//     'O', '', 'O', 'X', 'X');
// if (isValid(board))
//     console.log("Given board is valid");
// else
//     console.log("Given board is not valid");

// board = new Array('X', 'O', 'X', '')
// if (isValid(board))
//     console.log("Given board is valid");
// else
//     console.log("Given board is not valid");


function getWins(board, size) {
    let wins = {
        X: 0,
        O: 0
    };

    for (let i = 0; i < size; i++) {
        const row = [];
        for (let j = 0; j <= board[i].length; j++) {
            const val = board[i][j];
            row.push(val);
            if (val == 'X') {
                wins.X += 1;
            } else if (val == 'O') {
                wins.O += 1;
            }
        }
        if (wins.X == size || wins.O == size) {

            return wins;
        };
        console.log(row);
    }

    return wins;
}

function checkWin(board, size, char) {
    const wins = getWins(board, size);
    // if (wins.O == wins.X) {
    //     return false;
    // }
    const winCount = wins[char];
    if (winCount == size) return true;

    return false;
}

function getCounts(board, size) {
    let wins = {
        X: 0,
        O: 0
    };
    for (let i = 0; i < size; i++) {

        for (let j = 0; j < board[i].length; j++) {
            const val = board[i][j];
            if (val == 'X') {
                wins.X += 1;
            } else if (val == 'O') {
                wins.O += 1;
            }
        }

    }
    return wins;
}


function isValidv2(board, length) {
    // Count number of 'X' and 'O'
    // in the given board
    const count = getCounts(board, length);
    let xCount = count.X;
    let oCount = count.O;


    // Board can be valid only if either
    // xCount and oCount is same or count
    // is one more than oCount
    const xWins = checkWin(board, length, "X");
    const oWins = checkWin(board, length, "O");
    if (xCount == oCount || xCount == oCount + 1) {
        // Check if 'O' is winner
        if (oWins) {
            // Check if 'X' is also winner,
            // then return false
            if (xWins)
                return false;

            // Else return true xCount and
            // yCount are same
            return (xCount == oCount);
        }

        // If 'X' wins, then count of X
        // must be greater
        if (xWins &&
            xCount != oCount + 1)
            return false;

        // If 'O' is not winner, then
        // return true
        return true;
    }
    return false;
}


function isValidvO(board) {
    // Count number of 'X' and 'O'
    // in the given board
    let xCount = 0;
    let oCount = 0;
    for (let i = 0; i < 9; i++) {
        if (board[i] == 'X') xCount++;
        if (board[i] == 'O') oCount++;
    }

    // Board can be valid only if either
    // xCount and oCount is same or count
    // is one more than oCount 
    const oWin = isCWin(board, 'O')
    const xWin = isCWin(board, 'X')
    if (xCount == oCount || xCount == oCount + 1) {
        // Check if 'O' is winner
        if (oWin) {
            // Check if 'X' is also winner,
            // then return false
            if (xWin)
                return false;

            // Else return true xCount and
            // yCount are same
            return (xCount == oCount);
        }

        // If 'X' wins, then count of X
        // must be greater
        if (xWin &&
            xCount != oCount + 1)
            return false;

        // If 'O' is not winner, then
        // return true
        return true;
    }
    return false;
}

function getWinner(board, length) {
    let wins = {
        X: 0,
        O: 0,
        invalid: 0
    };
    const xWins = checkWin(board, length, "X");
    const oWins = checkWin(board, length, "O");
    const isvalid = isValidv2(board, length);
    if (!isvalid || (xWins && oWins)) {
        wins.invalid = 1;
        return wins
    }

    if (xWins) {
        wins.X = 1;
    } else if (oWins) {
        wins.O = 1;
    }
    return wins;
}

const board = [['X', 'X', 'O'], ['O', 'O', ''], ['O', 'X', 'X']];
// console.log();
getWins(board, 3)
// const board2 = [['X', 'X'], ['O', 'O']];
// console.log(getCounts(board, 3));
// console.log(getWins(board, 3));
// console.log(checkWin(board, 3, "X"));
// console.log(checkWin(board, 3, "O"));
// console.log(isValidv2(board, 3));
// console.log(getWinner(board, 3));
// console.log(isValidv2(board2, 2));

// let board2 = new Array('X', 'X', 'O', 'O',
//     'O', '', 'O', 'X', 'X');
// console.log(isValidvO(board2));

const data = `3x3 XXO OO- OOX
2x2 XO X-
`;

function readLine(str) {
    const input = str.trim().split('\n');
    const items = input.map(item => {
        const r = item.split(" ").slice(1);
        return r;
    })
    // console.log(items)
    let values = {
        x: 0,
        o: 0,
        invalid: 0
    };
    for (const item of items) {
        const length = item.length;
        const board = item.map(a => a.split(''))
        console.log(board);

        const winner = getWinner(board, length);
        values.x += winner.X;
        values.o += winner.O;
        values.invalid += winner.invalid
    }
    console.log(values)
}

// readLine(data);