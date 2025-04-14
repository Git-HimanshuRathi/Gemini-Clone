// ARRAY
public class MyStack {
    int capacity;
    int[] arr;
    int top;

    public MyStack(int capacity) {
        this.capacity = capacity;
        this.arr = new int[capacity];
        this.top = -1;
    }

    public boolean isEmpty() {
        return top == -1;
    }

    public boolean isFull() {
        return top == capacity-1;
    }

    public void push(int x) {
        if(isFull()) return;

        this.top++;
        this.arr[top] = x;
    }

    public int pop() {
        if(isEmpty()) return -1;

        int ans = this.arr[top];
        top--;
        return ans;
    }

    public int peek() {
        if(isEmpty()) return -1;
        return arr[top];
    }
}



// // LINKED LIST
// // TC: O(1)
// class Node {
//     int val;
//     Node next;
//     public Node(int val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// public class MyStack {
//     Node top;

//     public MyStack() {
//         this.top = null;
//     }

//     public boolean isEmpty() {
//         return top == null;
//     }

//     public int peek() {
//         if(isEmpty()) return -1;
//         return top.val;
//     }

//     public void push(int x) {
//         Node newNode = new Node(x);
//         newNode.next = top;
//         top = newNode;
//     }

//     public int pop() {
//         if(isEmpty()) return -1;

//         int ans = top.val;
//         top = top.next;
//         return ans;
//     }
// }