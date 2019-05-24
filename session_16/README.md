### Array Methods

##### Add/remove items

1. arr.push(...items) – adds items to the end,
2. arr.pop() – extracts an item from the end,
3. arr.shift() – extracts an item from the beginning,
4. arr.unshift(...items) – adds items to the beginning.

##### splice()

1. The arr.splice(str) method is a swiss army knife for arrays. It can do everything: insert, remove and replace elements.
2. Here and in other array methods, negative indexes are allowed. They specify the position from the end of array.

##### slice()

1. It returns a new array containing all items from index "start" to "end" (not including "end"). Both start and end can be negative, in that case position from array end is assumed.

##### concat()

1. It accepts any number of arguments – either arrays or values.
2. If an argument is an array or has Symbol.isConcatSpreadable property, then all its elements are copied. Otherwise, the argument itself is copied.

##### Iterate: forEach

1. The arr.forEach method allows to run a function for every element of the array.
2. The result of the function (if it returns any) is thrown away and ignored.

### Searching in array


1. indexOf/lastIndexOf and includes
    * The methods arr.indexOf, arr.lastIndexOf and arr.includes have the same syntax and do essentially the same as their string counterparts, but operate on items instead of characters.
    * arr.indexOf(item, from) looks for item starting from index from, and returns the index where it was found, otherwise -1.
    * arr.lastIndexOf(item, from) – same, but looks for from right to left.
    * arr.includes(item, from) – looks for item starting from index from, returns true if found.
    * Note that the methods use === comparison. So, if we look for false, it finds exactly false and not the zero.

2. find and findIndex
    * Imagine we have an array of objects. How do we find an object with the specific condition? Here the arr.find method comes in handy.
    * The arr.findIndex method is essentially the same, but it returns the index where the element was found instead of the element itself and -1 is returned when nothing is found.
    * Do not return false. Method automatically consider the false condition if it does not find the true constion.
    
3. filter
    * The find method looks for a single (first) element that makes the function return true.
    * The syntax is similar to find, but filter continues to iterate for all array elements even if true is already returned.
    * Do not return false. Method automatically consider the false condition if it does not find the true constion.

### Transform an array

1. map
    * It returns array of new values instead of items. It depends on method defination actually.

2. sort(fn)
    * The items are sorted as strings by default. Literally, all elements are converted to strings and then compared. So, the lexicographic ordering is applied and indeed "2" > "15".
    * To use our own sorting order, we need to supply a function of two arguments as the argument of arr.sort(). +ve number to represent greater, -ve for lesser and 0 for equal values.
    
3. reverse
    * The method arr.reverse reverses the order of elements in arr.

4. reduce
    * let value = arr.reduce(function(previousValue, item, index, array) {.....}, initial);

5. Array.isArray
    * Arrays do not form a separate language type. They are based on objects.So typeof does not help to distinguish a plain object from an array.
    * But arrays are used so often that there’s a special method for that: Array.isArray(value). It returns true if the value is an array, and false otherwise.

### Summary

##### A cheatsheet of array methods:

1. To **add/remove** elements:
    * push(...items) – adds items to the end,
    * pop() – extracts an item from the end,
    * shift() – extracts an item from the beginning,
    * unshift(...items) – adds items to the beginning.
2. **splice(pos, deleteCount, ...items)** – at index pos delete deleteCount elements and insert items.
3. **slice(start, end)** – creates a new array, copies elements from position start till end **(not inclusive)** into it.
4. **concat(...items)** – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
5. To **search** among elements:
    * **indexOf/lastIndexOf(item, pos)** – look for item starting from position pos, return the index or -1 if not found.
    * **includes(value)** – returns true if the array has value, otherwise false.
    * **find/filter(func)** – filter elements through the function, return first/all values that make it return true.
    * **findIndex** is like find, but returns the index instead of a value.
6. **To iterate over elements:**
    * **forEach(func)** – calls func for every element, does not return anything.
7. **To transform the array:**
    * **map(func)** – creates a new array from results of calling func for every element.
    * **sort(func)** – sorts the array in-place, then returns it.
    * **reverse()** – reverses the array in-place, then returns it.
    * **split/join** – convert a string to array and back.
    * **reduce(func, initial)** – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
8. **Additionally:**
    * **Array.isArray(arr)** checks arr for being an array.
    * Please note that methods sort, reverse and splice modify the array itself.
    * These methods are the most used ones, they cover 99% of use cases. But there are few others:arr.some(fn)/arr.every(fn) checks the array.
    * The **function fn** is called on each element of the array similar to map. If any/all results are true, returns true, otherwise false.
    * **arr.fill(value, start, end)** – fills the array with repeating value from index start to end.
    * **arr.copyWithin(target, start, end)** – copies its elements from position start till position end into itself, at position target (overwrites existing).

For the full list, see the [manual](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

