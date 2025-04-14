import java.util.*;

public class TicTacToe {
    public static void main(String[] args) {
        Game game = new Game(3);
        game.launch();
    }
}

class Game {
    Board board;
    Player player1;
    Player player2;

    Game(int size) {
        this.board = new Board(size);
        this.player1 = new Player('X');
        this.player2 = new Player('O');
    }

    public void launch() {
        int n = this.board.size;
        int turn = n * n;
        board.print();
        while (turn > 0) {
            player1.makeMove(this.board);
            turn--;
            board.print();
            if (board.isWinner(player1.Symbol)) {
                System.out.println("Player 1 wins!");
                break;
            }
            if (turn <= 0) {
                System.out.println("Draw!");
                break;
            }
            player2.makeMove(this.board);
            turn--;
            board.print();
            if (board.isWinner(player2.Symbol)) {
                System.out.println("Player 2 wins!");
                break;
            }
        }
    }

}

class Player {
    char Symbol;

    Player(char Symbol) {
        this.Symbol = Symbol;
    }

    public void makeMove(Board board) {
        int n = board.size;
        Scanner sc = new Scanner(System.in);
        System.out.println("Player " + this.Symbol + " to make a move: ");
        while (true) {
            int i = sc.nextInt();
            int j = sc.nextInt();
            if (i >= 0 && i < n && j >= 0 && j < n && board.get(i, j) == '_') {
                board.set(i, j, this.Symbol);
                break;
            } else {
                System.out.println("Invalid move. Try again.");
            }
        }
    }
}

class Board {
    int size;
    char[][] board;

    public Board(int size) {
        this.size = size;
        this.board = new char[size][size];
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                this.board[i][j] = '_';
            }
        }
    }

    public char get(int i, int j) {
        return this.board[i][j];
    }

    public char set(int i, int j, char symbol) {
        this.board[i][j] = symbol;
        return this.board[i][j];
    }

    public boolean isWinner(char symbol) {
        return checkRow(symbol) || checkColumn(symbol) || checkDiagonal(symbol);
    }

    public boolean checkRow(char symbol) {
        for (int i = 0; i < size; i++) {
            if (this.board[i][0] == symbol && this.board[i][1] == symbol && this.board[i][2] == symbol) {
                return true;
            }
        }
        return false;
    }

    public boolean checkColumn(char symbol) {
        for (int i = 0; i < size; i++) {
            if (this.board[0][i] == symbol && this.board[1][i] == symbol && this.board[2][i] == symbol) {
                return true;
            }
        }
        return false;
    }

    public boolean checkDiagonal(char symbol) {
        boolean mainDiagonal = true;
        boolean antiDiagonal = true;
        for (int i = 0; i < size; i++) {
            if (this.board[i][i] != symbol)
                mainDiagonal = false;
            if (this.board[i][size - 1 - i] != symbol)
                antiDiagonal = false;
        }
        return mainDiagonal || antiDiagonal;
    }

    public void print() {
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                System.out.print(this.board[i][j] + " ");
            }
            System.out.println();
        }
    }

}

