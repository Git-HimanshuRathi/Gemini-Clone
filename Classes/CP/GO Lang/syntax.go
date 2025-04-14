package main

import "fmt"

func main(){
	fmt.Println("Hello World")
}

// Declare a variable

var x int = 10
var y = 10
z := 10

// Data Types

// •	int, int8, int16, int32, int64
// •	uint, uintptr
// •	float32, float64
// •	complex64, complex128
// •	bool
// •	string
// •	rune (alias for int32, used for characters)
// •	byte (alias for uint8)

// Conditionals

if x > 5 {
    fmt.Println("Greater")
} else if x == 5 {
    fmt.Println("Equal")
} else {
    fmt.Println("Lesser")
}

// switch case

switch x {
case 1:
    fmt.Println("One")
case 2:
    fmt.Println("Two")
default:
    fmt.Println("Other")
}

// Loops

	// for loop
	for i := 0; i < 5; i++ {
		fmt.Println(i)
	}

	// while loop
	i := 0
	for i < 5 {
		fmt.Println(i)
		i++
	}

	// for range loop
	for i, v := range []int{1, 2, 3} {
		fmt.Println(i, v)
	}

	// infinite loop	
	for { 
		fmt.Println("Forever")
	}

// Arrays

var arr [5]int = [5]int{1, 2, 3, 4, 5}
arr := [5]int{1, 2, 3, 4, 5}
arr := make([]int, 5)

// Slices

nums := []int{1, 2, 3}
nums = append(nums, 4)

s := make([]int, 5)          // length = 5, capacity = 5
s := make([]int, 5, 10)      // length = 5, capacity = 10

// Maps

m := make(map[string]int)
m["a"] = 100
	
	// to iterate over a key and value 

	for key, value := range myMap {
		fmt.Println("Key:", key, "Value:", value)
	}

	// to iterate over a key only

	for key := range myMap {
		fmt.Println("Key:", key)
	}

	// iterate over a value only

	for _, value := range myMap {
		fmt.Println("Value:", value)
	}

// functions 

func add(a int, b int) int {
    return a + b
}

// Multiple return values

	func divide(a, b int) (int, bool) {
		if b == 0 {
			return 0, false
		}
		return a / b, true
	}
