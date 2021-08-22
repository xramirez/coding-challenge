
module.exports.run = function (x, y) {
	/*
		You are given a 2D array. Using the x and y co-ordinates, find the sum of all the numbers from (0, 0) to (x, y)
	
		Example:
	
		-1  1  5        function(1, 1) => 12
		 9  3  7		function(1, 0) => 0
		 2  8  4		function(0, 1) => 8
	
		 Write your code below the comment.
	*/
	const twoDArray = [[0, 4, 2, 1],
	[3, -1, 1, 0],
	[0, 0, 2, 3],
	[1, 3, -3, 0]];

	//The x and y coordinates are somewhat misleading in that they show how far over in a literal x and y motion you should be moving
	//In this case, when x is a certain number, that is how many columns from 0 you will be summing up from 0
	//For y, it is the opposite, it determines how many rows you are summing up from 0
	//Essentially, x and y are the markers for making a smaller array out of the original.

	//in the example array above, (1,1) resulted in 12, meaning you don't go from (0,0), (0,1), and (0,2), into (1,0) and finally (1,1)
	//Instead, you would go (0,0), (0,1) onto (1,0)  and (1,1), skipping the (0,2) column altogether.
	//x and y are the constraints. Not only that, but they are flipped, where x determines the column constraint and y determines the row constraint.

	//Before anything, we will be setting an if statement making sure that valid coordinates are given. Otherwise, null is returned

	let arraySum = 0;

	if (x < 4 && y < 4) {
		for (let i = 0; i <= y; i++) {
			for (let j = 0; j <= x; j++) {
				//console.log("adding ", twoDArray[i][j], " to the sum");
				arraySum += twoDArray[i][j];
				//console.log("new sum: ", arraySum);
			}
		}
		return arraySum;
	}
	else {
		return null;
		//console.log("Invalid coordinates were submitted!");
	}
};

module.exports.run(2, 2);


