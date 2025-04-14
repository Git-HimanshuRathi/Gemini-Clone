import java.util.*;

class Node {
    int val;
    Node next;

    public Node(int val) {
        this.val = val;
        this.next = null;
    }
}

class TreeData {
    int data;
    int height;

    TreeData(int data, int height) {
        this.data = data;
        this.height = height;
    }
}

class Pair {
    TreeNode node;
    int hd;

    Pair(TreeNode node, int hd) {
        this.node = node;
        this.hd = hd;
    }

}

public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    public TreeNode(int val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    // (1) Print the tree
    // TC: O(N) SC: O(N)
    public static void preOrder(TreeNode root) {
        if (root == null)
            return;
        System.out.println(root.val);
        preOrder(root.left);
        preOrder(root.right);
    }

    public static void postOrder(TreeNode root) {
        if (root == null)
            return;
        postOrder(root.left);
        System.out.println(root.val);
        postOrder(root.right);
    }

    public static void inOrder(TreeNode root) {
        if (root == null)
            return;
        inOrder(root.left);
        System.out.println(root.val);
        inOrder(root.right);
    }

    // (2) Given a BT. Find the height of the BT wrt nodes.
    public static int getHeight(TreeNode root) {
        if (root == null)
            return 0;
        int lht = getHeight(root.left);
        int rht = getHeight(root.right);
        return Math.max(lht, rht) + 1;
    }

    // (3) Given 2 BT. Check if they are identical or not.
    // TC: O(N) SC: O(N)
    public static boolean isIdentical(TreeNode r1, TreeNode r2) {
        if (r1 == null && r2 == null)
            return true;
        if (r1 == null || r2 == null)
            return false;
        if (r1.val != r2.val)
            return false;
        return isIdentical(r1.left, r2.left) && isIdentical(r1.right, r2.right);
    }

    // (4) Given 2 BT. Check if they are mirror images of each other.

    public static boolean isMirrorImg(TreeNode r1, TreeNode r2) {
        if (r1 == null && r2 == null)
            return true;
        if (r1 == null || r2 == null)
            return false;
        if (r1.val != r2.val)
            return false;
        return isMirrorImg(r1.left, r2.right) && isMirrorImg(r1.right, r2.left);
    }

    // (5) Given a BT, find the diameter based on the number of nodes.
    // i.e., length of the longest path
    // TC: O(N^2)

    public static int diameterOfBT(TreeNode A) {
        if (A == null)
            return 0;

        int leftHyt = getHeight(A.left);
        int rytHyt = getHeight(A.right);
        int diameter = leftHyt + rytHyt + 2;

        int leftDia = diameterOfBT(A.left);
        int rytDia = diameterOfBT(A.right);
        return Math.max(diameter, Math.max(leftDia, rytDia));
    }

    // TC: O(N)

    public static TreeData diaOfBT(TreeNode root) {
        if (root == null)
            return new TreeData(-1, -1);

        TreeData left = diaOfBT(root.left);
        TreeData right = diaOfBT(root.right);

        int rootDia = left.height + right.height + 2;
        int maxDia = Math.max(rootDia, Math.max(left.data, right.data));
        int currHeight = Math.max(left.height, right.height) + 1;

        return new TreeData(maxDia, currHeight);
    }

    // another approach

    public static int diameterOfBinaryTree(TreeNode root) {
        int[] diameter = new int[1];
        height(root, diameter);
        return diameter[0];
    }

    public static int height(TreeNode root, int[] diameter) {
        if (root == null)
            return 0;
        int left = height(root.left, diameter);
        int right = height(root.right, diameter);
        diameter[0] = Math.max(left + right, diameter[0]);
        return 1 + Math.max(left, right);
    }

    // (6) Print level order traversal (BFS)
    // TC: O(N) SC: O(N)

    public static List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null)
            return result;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(root);

        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            List<Integer> level = new ArrayList<>();

            for (int i = 0; i < levelSize; i++) {
                TreeNode temp = queue.poll();
                level.add(temp.val);

                if (temp.left != null)
                    queue.add(temp.left);
                if (temp.right != null)
                    queue.add(temp.right);
            }
            result.add(level);
        }

        return result;
    }

    // (7) given a BT . return the left view of the tree ??

    public ArrayList<Integer> leftProfile(TreeNode A) {
        ArrayList<Integer> result = new ArrayList<>();

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(A);

        while (!queue.isEmpty()) {
            int size = queue.size();
            result.add(queue.peek().val);

            for (int i = 0; i < size; i++) {
                TreeNode temp = queue.poll();

                if (temp.left != null) {
                    queue.add(temp.left);
                }
                if (temp.right != null) {
                    queue.add(temp.right);
                }
            }
        }
        return result;
    }

    // (8) given a BT . return the right view of the tree ??

    public ArrayList<Integer> rightProfile(TreeNode A) {

        ArrayList<Integer> result = new ArrayList<>();

        Queue<TreeNode> queue = new LinkedList<>();
        queue.add(A);

        while (!queue.isEmpty()) {
            int size = queue.size();
            TreeNode right = null;

            for (int i = 0; i < size; i++) {
                TreeNode temp = queue.poll();
                right = temp;

                if (temp.left != null) {
                    queue.add(temp.left);
                }
                if (temp.right != null) {
                    queue.add(temp.right);
                }
            }
            result.add(right.val);
        }
        return result;
    }

    // (9) given a BT . print it's top view ??

    public static void topView(TreeNode root) {
        if (root == null) return;

        TreeMap<Integer, Integer> map = new TreeMap<>();
        Queue<Pair> queue = new LinkedList<>();

        queue.add(new Pair(root, 0));

        while (!queue.isEmpty()) {
            Pair curr = queue.poll();
            int hd = curr.hd;
            TreeNode node = curr.node;

            // Only add the first node at each horizontal distance
            if (!map.containsKey(hd)) {
                map.put(hd, node.val);
            }

            if (node.left != null) queue.add(new Pair(node.left, hd - 1));
            if (node.right != null) queue.add(new Pair(node.right, hd + 1));
        }

        for (int val : map.values()) {
            System.out.print(val + " ");
        }
    }

    // (10) given a BT . print it's Bottom view ??

    public static void bottomView(TreeNode root) {
        if (root == null) return;

        TreeMap<Integer, Integer> map = new TreeMap<>();
        Queue<Pair> queue = new LinkedList<>();

        queue.add(new Pair(root, 0));

        while (!queue.isEmpty()) {
            Pair curr = queue.poll();
            int hd = curr.hd;
            TreeNode node = curr.node;

            map.put(hd, node.val);
            
            if (node.left != null) queue.add(new Pair(node.left, hd - 1));
            if (node.right != null) queue.add(new Pair(node.right, hd + 1));
        }

        for (int val : map.values()) {
            System.out.print(val + " ");
        }
    }

    // (11) given a binary tree . print it's vertical order traversal ??

    public static ArrayList<ArrayList<Integer>> verticalOrder(TreeNode root) {

        ArrayList<ArrayList<Integer>> result = new ArrayList<>();
        if (root == null)
            return result;

        TreeMap<Integer, ArrayList<Integer>> map = new TreeMap<>();

        Queue<Pair> queue = new LinkedList<>();
        queue.add(new Pair(root, 0));

        while (!queue.isEmpty()) {
            Pair temp = queue.poll();
            TreeNode node = temp.node;
            int hd = temp.hd;

            if (!map.containsKey(hd)) {
                map.put(hd, new ArrayList<>());
            }

            map.get(hd).add(node.val);

            if (node.left != null) {
                queue.add(new Pair(node.left, hd - 1));
            }
            if (node.right != null) {
                queue.add(new Pair(node.right, hd + 1));
            }
        }

        for (int key : map.keySet()) {
            result.add(map.get(key));
        }
        return result;
    }

    // (12) given a BT . print it's border ??

    private void leftMost(TreeNode root, List<TreeNode> list) {
        while (root != null) {
            list.add(root);
            if (root.left != null)
                root = root.left;
            else
                root = root.right;
        }
    }

    private void leaf(TreeNode root, List<TreeNode> list) {
        if (root != null) {
            if (root.left == null && root.right == null)
                list.add(root);
            if (root.left != null)
                leaf(root.left, list);
            if (root.right != null)
                leaf(root.right, list);
        }
    }

    private void rightMost(TreeNode root, List<TreeNode> list) {
        Stack<TreeNode> stack = new Stack<>();

        while (root != null) {
            stack.push(root);
            if (root.right != null)
                root = root.right;
            else
                root = root.left;
        }

        while (!stack.isEmpty()) {
            list.add(stack.peek());
            stack.pop();
        }
    }

    public int[] borderOfBinaryTree(TreeNode A) {
        
        List<Integer> ans = new ArrayList<>();
        if (A == null)
            return new int[0];
        
        List<TreeNode> tmp = new ArrayList<>();  
        Set<TreeNode> set = new HashSet<>();


        leftMost(A, tmp);
        leaf(A, tmp);
        rightMost(A, tmp);
        
        for (TreeNode p : tmp) {
            if (!set.contains(p)) {
                ans.add(p.val);
                set.add(p);
            }
        }

        int[] result = new int[ans.size()];
        for (int i = 0; i < ans.size(); i++) {
            result[i] = ans.get(i);
        }
        return result;
    }

    // (13) Given a value x and BST. find if there exist value equal to x ?

    public static boolean BST(TreeNode root , int x){
        if(root == null) return false ;

        if(x < root.val){
            return BST(root.left , x) ;
        }
        return BST(root.right, x);
    }

    //(14) Given a binary search tree . insert X at its correct position ??

    public static TreeNode insertX (TreeNode root , int x){
    
        if(root == null) return new TreeNode (x) ;

        if(x <= root.val){
            root.left = insertX(root.left, x) ;
        } else {
            root.right = insertX(root.right, x) ;
        }

        return root ;
    }

    //(15) remove the given value from BST ??

    public TreeNode deleteTreeNode(TreeNode A, int B) {
        if(A == null){
            return null ;
        }

        if(B < A.val){
            A.left = deleteTreeNode(A.left , B) ;
        } else if (B > A.val){
            A.right = deleteTreeNode(A.right , B) ;
        } else {

            if(A.left == null && A.right == null){
                return null ;
            } else if (A.left == null){
                return A.right ;
            } else if (A.right == null){
                return A.left ;
            } else {
                int max = getMax(A.left) ;
                A.val = max ;
                A.left = deleteTreeNode(A.left, max); 
            }
        }
        return A ;
    }

    public int getMax(TreeNode A){
        while(A.right != null){
            A = A.right ;
        }
        return A.val ;
    }
}
