import java.util.*;

// Given a stack class. Design a stack with getMin() function.
class MinStack {
    private Stack<Integer> mainSt;
    private Stack<Integer> minSt;

    public MinStack() {
        mainSt = new Stack<>();
        minSt = new Stack<>();
    }

    public void push(int x) {
        mainSt.push(x);
        if(minSt.isEmpty() || x <= minSt.peek()) {
            minSt.push(x);
        }
    }

    public void pop() {
        if(!mainSt.isEmpty()) {
            int topEl = mainSt.pop();
            if(!minSt.isEmpty() && minSt.peek() == topEl) {
                minSt.pop();
            }
        }
    }

    public int top() {
        return mainSt.isEmpty() ? -1 : mainSt.peek();
    }

    public int getMin() {
        return minSt.isEmpty() ? -1 : minSt.peek();
    }
}
