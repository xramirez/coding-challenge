module.exports.run = function (a, b, c) {
	/*
	Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.
	
	Examples:
		function(1, 2, 3) => 6
		function(3, 2, 3) => 2
		function(3, 3, 3) => 0
	
	Write your code below the comment.
	
	*/
	//So we know for sure that at 3 values is what is *required* to make this run, if we were given just a and b, a and c, or maybe even just one of the 3 options, then this won't work.
	//Alternatively, if one of the values is null, we could replace it with 0? 
	//I'd rather make it so that it makes sure all 3 values aren't null in an if statement before anything is done. 

	//There's opportunities to throw and catch, but I'd rather first set up walls against any easy contingencies beforehand.
	//We also may have something other than integers thrown in, in which case we can just catch that error.

	//Anyways, onto the actual problem: how do we check to see if any of these 3 values are distinct?
	//I want to avoid having a long list of if statements, that could get messy real quick.

	//But, that would follow the idea, in essence
	try {
		if (a != null && b != null && c != null) {
			if (a != b && a != c && b != c) {
				return (a + b + c);
			}
			else if (a == b && a == c)
				return 0
			else if (a == b)
				return c
			else if (a == c)
				return b
			else if (b == c)
				return a
		}
		else
			return null;
	}

	catch (err) {
		console.log(err);
	}

	//^^^ That's what makes it messy, it's not that it wouldn't work, it's just ugly, and could be made more efficient.
	//But how?
	//In this case, since it's only going to be 3 values, we can keep it that way for now. If we knew there was a possibility there would be 4 or more values, 
	//then finding alternatives would become more of a necessity.
	//But for now, this works since we know for sure 3 values are going to be input.
};
