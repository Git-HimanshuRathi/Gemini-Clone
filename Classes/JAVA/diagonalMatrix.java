import java.util.*;

public class diagonalMatrix {
  public static void main(String[] args) {
    int[][] matrix={{1,2,3,4},
                    {5,6,7,8},
                    {9,10,11,12},
                    {13,14,15,16}};
    ArrayList<Integer> ans=diagonal(matrix);
    System.out.println(ans);
  }

  static ArrayList<Integer> diagonal(int[][] A){
    ArrayList<Integer> list=new ArrayList<Integer>();

    for(int i=0; i<=A.length ; i++){
      int a=0;
      int b=0;
      while(a<A.length){
        list.add(A[a][b]);
        a--;
        b++;
      }
    }
    return list;
  }
}
