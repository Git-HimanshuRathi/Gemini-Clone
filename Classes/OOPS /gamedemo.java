import java.util.Scanner;

public class gamedemo {
    public static void main(String[] args) {
        Game game = new Game(3);
        game.launch();
    }
}

class Game {
    Player p1;
    Player p2;
    Board board;

    Game(int size) {
        this.board = new Board(size);
        this.p1 = new Player('X');
        this.p2 = new Player('O');
    }

    public void launch() {
        int n = this.board.size;
        int turn = n * n;
        board.print();
        while (turn > 0) {
            p1.makeMove(this.board);
            turn--;
            board.print();
            if (board.isWinner(p1.symbol)) {
                System.out.println("p1 is winner");
                break;
            }
            if (turn <= 0){
                System.out.println("DRAW !");
                break;
            }
            p2.makeMove(this.board);
            turn--;
            board.print();
            if (board.isWinner(p2.symbol)) {
                System.out.println("p2 is winner");
                break;
            }
        }
    }
}

class Player {
    char symbol;

    Player(char symbol) {
        this.symbol = symbol;
    }

    public void makeMove(Board board) {
        int n = board.size;
        Scanner sc = new Scanner(System.in);
        while (true) {
            int i = sc.nextInt();
            int j = sc.nextInt();
            if (i >= 0 && i < n && j >= 0 && j < n && board.get(i, j) == '_') {
                board.set(i, j, this.symbol);
                break;
            } else {
                System.out.println("Invalid Move !");
            }
        }

    }
}

class Board {
    int size;
    char[][] board;

    Board(int size) {
        this.size = size;
        this.board = new char[size][size];
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                board[i][j] = '_';
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