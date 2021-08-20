module.exports.run = function (str) {
	/*
	A lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right.
	Return true if all the g's in the given string are happy, otherwise return false.
	
		Example:
			function("xxggxx") => true
			function("xxgxx") => false
	
			Write your code below the comment.
	*/

	//Before anything, this function will check if the string even has g's
	//A string can't have happy g's if there's no g's

	//Rather than checking to make sure that every single instance of g has multiples next to it, why not check to see if there's just one g that is alone?
	//We can set up a regular expression that reads through a string and will simply return false if it detects a *single* g that is not repeating
	//Specifically, it matches the position in a string of a g that has no g  before it, and no repeating g's after it
	//If no pattern like that is found, it returns -1, meaning no position has a lone g, thus meaning the string is "happy"

	if (str.search("g") != -1) {
		let readThrough = str.search(/(?<!g)g(?!g+)/);
		//console.log(readThrough == -1);
		return (readThrough == -1);
	}
	else
		return false;
	//Alternatively, what if there are no g's?
};

module.exports.run("xxgxx");
