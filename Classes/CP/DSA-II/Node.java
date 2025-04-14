public class Node {
    int val;
    Node next;
    public Node(int val) {
        this.val = val;
        this.next = null;
    }    
    
    // (1) Return the length of the linked list
    public static int getLength(Node head) {
        int length = 0;
        Node temp = head;
        while(temp != null) {
            temp = temp.next;
            length++; 
        }
        return length;
    }
    
    
    // (2) Print LL
    public static void print(Node head) {
        Node temp = head;
        while(temp != null) {
            System.out.print(temp.val + " -> ");
            temp = temp.next;
        }
    }
    
    // (3) Insert a node at the start
    // TC: O(1)
    public static Node insertAtStart(Node head, int val) {
        Node NewNode = new Node(val);
        NewNode.next = head;
        head = NewNode;
        return head;
    }


    // (4) Delete a Node at the start
    public static Node deleteFromStart(Node head) {
        if(head == null) return null;
        return head.next;
    }


    // (5) Given a LL. Return the mid node.
    // TC: O(N)    SC: O(1)
    public static Node midNode(Node head) {
        Node slow = head, fast = head;
        while(fast != null && fast.next != null) { 
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }


    // (6) Given a LL. Reverse it.
    // TC: O(N)    SC: O(1)
    public static Node reverseList(Node head) {
        Node h2 = null, curr = head;

        while(curr != null) {
            Node next = curr.next;
            curr.next = h2;
            h2 = curr;
            curr = next;
        }

        return h2;
    }


    // (7) Given a LL. Reverse the first k nodes of the LL.
    public static Node reverse_k(Node head, int k) {
        Node h2 = null, curr = head, next = curr.next;

        while(curr != null && k > 0) {
            next = curr.next;
            curr.next = h2;
            h2 = curr;
            curr = next;
            k--;
        }

        if(head != null) head.next = curr; 
        return h2;
    }


    // (8) Given 2 sorted LL. Merge them into a single sorted LL. 
    // TC: O(N+M)    SC: O(1)
    public static Node mergeSortedLL(Node h1, Node h2) {
        if(h1 == null) return h2;
        if(h2 == null) return h1;

        Node ans = null;
        if(h1.val < h2.val) {
            ans = h1;
            h1 = h1.next;
        } else {
            ans = h2;
            h2 = h2.next;
        }

        Node temp = ans;
        while(h1 != null && h2 != null) {
            if(h1.val < h2.val) {
                temp.next = h1;
                temp = h1;
                h1 = h1.next;
            } else {
                temp.next = h2;
                temp = h2;
                h2 = h2.next;
            }
        }

        if(h1 != null) temp.next = h1;
        if(h2 != null) temp.next = h2;
        
        return ans;
    }

    
    // (9) MERGE SORT IN LL
    public static Node getMid(Node head) {
        Node slow = head, fast = head.next;
        while(fast != null && fast.next != null) { 
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }

    public static Node mergeSort(Node head) {
        if(head == null || head.next == null) return head;

        Node m = getMid(head);

        Node head2 = m.next;
        m.next = null;

        head = mergeSort(head);
        head2 = mergeSort(head2);
        return mergeSortedLL(head, head2);
    }



    // (10) Detect if there is a cycle in the LL.
    // TC: O(N)    SC: O(1)
    public static boolean checkCycle(Node head) {
        Node slow = head, fast = head;

        while(fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if(slow == fast) {
                return true;
            }
        }

        return false;
    }


    // (11) Given a node of LL. Delete this node. 
    public static void deleteNode(Node node) {
        node.val = node.next.val;
        node.next = node.next.next;
    }
    
    public static void main(String[] args) {
        // Node head = new Node(3);
        // head.next = new Node(12);
        // head.next.next = new Node(10);


        Node n1 = new Node(1);
        n1.next = new Node(2);
        n1.next.next = new Node(3);
        n1.next.next.next = new Node(2);
        n1.next.next.next.next = new Node(1);
        print(n1);
    }
}