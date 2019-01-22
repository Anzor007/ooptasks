

function myRandOneDay (myMax, myMin) {
	return Math.floor(Math.random() * (myMax - myMin))+myMin;
}

module.exports = myRandOneDay;