const axios = require('axios');
module.exports.run = function (url) {
	/*
		You are given a url. Make a GET call with axios using the given url.
		However, there is something wrong with the url, and it throws an error.
		This error will have a property 'message'. Properly return the message, adding 'Error: ' to the beginning of the message.
	
		You are welcome to change this function to an async/await.
	
		Write your code below the comment.
	*/
	//For this function, we'll make an async/await
	//This one's fairly simple, it'll just be a try/catch of the url, with the catch displaying the error message that was returned from the client
	const fetchURL = async () => {
		try {
			const res = await axios.get(url);
			//This is where the other stuff would happen, but this just needs to catch an error
		}
		catch (err) {
			//In this case, you can't just return err, you'd have to pull out the specific code, otherwise it'll return a completely different message
			//than the "404" or "406" messages you would usually receive from a browser.
			let errMessage = 'Error: ' + err.message;
			console.log(errMessage);
			return (errMessage);
		}
	}


};
