
import java.io.IOException;

public class BookDataProject {
    public static void main(String[] args) throws IOException {
        BookRepo repo = new BookRepo("D:\\apna folder\\code\\year 1 tri2\\DSA\\oops\\class 5\\book infos\\bookdata.csv");
        repo.printTitlesOfAllBooks();
    }
}
