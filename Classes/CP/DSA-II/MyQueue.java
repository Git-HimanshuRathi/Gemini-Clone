import java.util.*;

// // LINKED LIST
// class Node {
//     int val;
//     Node next;
//     public Node(int val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// public class MyQueue {
//     int size;
//     Node start;
//     Node end;
//     public MyQueue() {
//         this.size = 0;
//         this.start = null;
//         this.end = null;
//     }

//     public void push(int x) {
//         Node node = new Node(x);
//         if(start == null) {
//             start = node;
//             end = node;
//         }
//         else {
//             end.next = node;
//             end = end.next;
//             size++;
//         }
//     }

//     public int pop() {
//         if(start == null) return -1;

//         Node temp = start;
//         start = start.next;
//         size--;
//         return temp.val;
//     }

//     public int top() {
//         if(start == null) return -1;
//         return start.val;
//     }

//     public int size() {
//         return size;
//     }
// }






// STACK
public class MyQueue {
    Stack<Integer> s1;
    Stack<Integer> s2;
    public MyQueue() {
        this.s1 = new Stack<>();
        this.s2 = new Stack<>();
    }

    public void push(int x) {
        s1.push(x);
    }

    public int pop() {
        if(!s2.isEmpty()) {
            return s2.pop();
        }
        else {
            while(!s1.isEmpty()) {
                s2.push(s1.pop());
            }
            return s2.pop();
        }
    }

    public int top() {
        if(!s2.isEmpty()) {
            return s2.peek();
        }
        else {
            while(!s1.isEmpty()) {
                s2.push(s1.pop());
            }
            return s2.peek();
        }
    }
}