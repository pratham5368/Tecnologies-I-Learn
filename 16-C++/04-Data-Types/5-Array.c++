//Loop Through an Array

//The following example outputs all elements in the cars array:
string cars[5] = {"Volvo", "BMW", "Ford", "Mazda", "Tesla"};
for (int i = 0; i < 5; i++) {
  cout << cars[i] << "\n";
}

//This example outputs the index of each element together with its value:
string cars[5] = {"Volvo", "BMW", "Ford", "Mazda", "Tesla"};
for (int i = 0; i < 5; i++) {
  cout << i << " = " << cars[i] << "\n";
}


//And this example shows how to loop through an array of integers:
int myNumbers[5] = {10, 20, 30, 40, 50};
for (int i = 0; i < 5; i++) {
  cout << myNumbers[i] << "\n";
}



//The foreach Loop
for (type variableName : arrayName) {
  // code block to be executed
}


//The following example outputs all elements in an array, using a "for-each loop":
int myNumbers[5] = {10, 20, 30, 40, 50};
for (int i : myNumbers) {
  cout << i << "\n";
}


//Omit Array Size
string cars[] = {"Volvo", "BMW", "Ford"}; // Three array elements
//The example above is equal to:
string cars[3] = {"Volvo", "BMW", "Ford"}; // Also three array elements



//Omit Elements on Declaration is also possible to declare an array without specifying the elements on declaration, and add them later:
string cars[5];
cars[0] = "Volvo";
cars[1] = "BMW";
...


//A multi-dimensional array is an array of arrays.

/*To declare a multi-dimensional array, define the variable type, specify the name of the array followed by square brackets which specify
how many elements the main array has, followed by another set of square brackets which indicates how many elements the sub-arrays have:

string letters[2][4];
As with ordinary arrays, you can insert values with an array literal - a comma-separated list inside curly braces. In a multi-dimensional 
array, each element in an array literal is another array literal.*/

string letters[2][4] = {
  { "A", "B", "C", "D" },
  { "E", "F", "G", "H" }
};

/*Each set of square brackets in an array declaration adds another dimension to an array. An array like the one above is said to have 
two dimensions.

Arrays can have any number of dimensions. The more dimensions an array has, the more complex the code becomes. The following array has 
three dimensions:*/

string letters[2][2][2] = {
  {
    { "A", "B" },
    { "C", "D" }
  },
  {
    { "E", "F" },
    { "G", "H" }
  }
};




//To access an element of a multi-dimensional array, specify an index number in each of the array's dimensions.
//This statement accesses the value of the element in the first row (0) and third column (2) of the letters array.

string letters[2][4] = {
  { "A", "B", "C", "D" },
  { "E", "F", "G", "H" }
};

cout << letters[0][2];  // Outputs "C"




//To change the value of an element, refer to the index number of the element in each of the dimensions:


string letters[2][4] = {
  { "A", "B", "C", "D" },
  { "E", "F", "G", "H" }
};
letters[0][0] = "Z";

cout << letters[0][0];  // Now outputs "Z" instead of "A"



//To loop through a multi-dimensional array, you need one loop for each of the array's dimensions.


string letters[2][4] = {
  { "A", "B", "C", "D" },
  { "E", "F", "G", "H" }
};

for (int i = 0; i < 2; i++) {
  for (int j = 0; j < 4; j++) {
    cout << letters[i][j] << "\n";
  }
}

This example shows how to loop through a three-dimensional array:
string letters[2][2][2] = {
  {
    { "A", "B" },
    { "C", "D" }
  },
  {
    { "E", "F" },
    { "G", "H" }
  }
};

for (int i = 0; i < 2; i++) {
  for (int j = 0; j < 2; j++) {
    for (int k = 0; k < 2; k++) {
      cout << letters[i][j][k] << "\n";
    }
  }
}


//Why Multi-Dimensional Arrays?
//Multi-dimensional arrays are great at representing grids. This example shows a practical use for them. 
// We put "1" to indicate there is a ship.
bool ships[4][4] = {
  { 0, 1, 1, 0 },
  { 0, 0, 0, 0 },
  { 0, 0, 1, 0 },
  { 0, 0, 1, 0 }
};

// Keep track of how many hits the player has and how many turns they have played in these variables
int hits = 0;
int numberOfTurns = 0;

// Allow the player to keep going until they have hit all four ships
while (hits < 4) {
  int row, column;

  cout << "Selecting coordinates\n";

  // Ask the player for a row
  cout << "Choose a row number between 0 and 3: ";
  cin >> row;

  // Ask the player for a column
  cout << "Choose a column number between 0 and 3: ";
  cin >> column;

  // Check if a ship exists in those coordinates
  if (ships[row][column]) {
    // If the player hit a ship, remove it by setting the value to zero.
    ships[row][column] = 0;

    // Increase the hit counter
    hits++;

    // Tell the player that they have hit a ship and how many ships are left
    cout << "Hit! " << (4-hits) << " left.\n\n";
  } else {
    // Tell the player that they missed
    cout << "Miss\n\n";
  }

  // Count how many turns the player has taken
  numberOfTurns++;
}

cout << "Victory!\n";
cout << "You won in " << numberOfTurns << " turns";