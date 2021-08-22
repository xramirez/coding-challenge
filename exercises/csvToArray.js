module.exports.run = function (csv) {
	/*
		A stringified CSV file will be passed into this function.
		Parse the string so it is an array of objects and return the array.
		The object properties are the header of the csv file, and the very first row of the csv file are the headers.
	
		Example
	
		function ('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13') =>
			[
				{FirstName: Dan, LastName: Tran, Age: 29},
				{FirstName: Don, LastName: Tran, Age: 25},
				{FirstName: Jasmine, LastName: Tran, Age: 13},
			]
	
		Write your code below the comment.
	*/

	//Let's assume that the first line will always be the properties, and this could likely range anywhere from one property to 100.
	//Every line after that is going to be the inputs for the object array. This is an array of objects. 
	//How do we take the first x inputs and declare those as properties?
	//We'll need to use JSON.stringify


	//these first lines before the for loop set up the basic properties required
	//We will run through each line after the first, split up the data and assign them to their respective properties
	//The first line itself will always contain the properties, so we have to separate it out from the rest
	//After that, we will declare our array of objects that we will eventually stringify
	let lines = csv.split('\n');
	//console.log("Lines after first split:\n", lines);
	let variableNames = lines[0].split(',');
	//console.log("Variable names: ", variableNames);
	let objectArray = [];


	//For each of the lines after the first, they are split by their delimiter, in this case a comma.
	//A new object is declared, one that will fit each of the pieces of data and assign them to their respective property name
	//At the end, once all the data is stored in that new object it is appended to the array of objects
	try {
		for (let i = 1; i < lines.length; i++) {
			let lineData = lines[i].split(',');
			//console.log("Line data: ", lineData);
			let newObject = {};

			for (let j = 0; j < variableNames.length; j++) {
				newObject[variableNames[j].trim()] = lineData[j].trim();
			}

			objectArray.push(newObject);
		}
	}
	catch (err) {
		throw (err);
	}

	//At the end of it all, there should be a full array of objects, each of them with x number of properties, and data from the lines following assigned
	//To their respective properties. This array is then stringified, and printed to console. I will also pass it as a return statement, in case that needs to be done. 
	//console.log(JSON.stringify(objectArray));
	return JSON.stringify(objectArray);
};

//module.exports.run('FirstName,LastName,Age\nDan,Tran,29\nDon,Tran,25\nJasmine,Tran,13');