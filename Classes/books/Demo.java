import java.io.IOException;


public class demo {
    public static void main(String[] args) throws IOException {
        BookRepo repo = new BookRepo("bookdata.csv");
        repo.printTitlesOFAllbooks();
    }
    
}