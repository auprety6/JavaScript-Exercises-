// Declare and initialize a sample 2-D array
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

// Iterate through each row in the 2-D array
for (var i in a) {
   // Output the current row index
   console.log("row " + i);
   
   // Iterate through each element in the current row
   for (var j in a[i]) {
      // Output the current element value
      console.log(" " + a[i][j]);
   }
}

// I ran this in vs code. first step even though it is a basic one for personal projects- please make sure node.js is installed. upon installation navigate to terminal and run 'node TEST.JS' replace test with any file variable name
//output below 

PS C:\Users\oakto> cd OneDrive\Documents\PyGuy 
PS C:\Users\oakto\OneDrive\Documents\PyGuy> node test.js
row 0
 1
 2
 1
 24
row 1
 8
 11
 9
 4
row 2
 7
 0
 7
 27
row 3
 7
 4
 28
 14
row 4
 3
 10
 26
 7
PS C:\Users\oakto\OneDrive\Documents\PyGuy> 
