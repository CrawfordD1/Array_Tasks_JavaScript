var arrayTasks = {

	concat: function (arr1, arr2) {
      return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
       arr.splice(index, 0, itemToAdd);
       return arr;
	},

	square: function (arr) {
        return arr.map(function(number){
           return Math.pow(number, 2)
        });
	},

	sum: function (arr) {
       return arr.reduce(function(a, b) {
           return a + b;
       }, 0);
	},

	findDuplicates: function (arr) {
        return arr.sort(function(a, b) {return a - b;}).filter(function(number, index, passedArray) {
            return number === passedArray[index - 1] && number !== passedArray[index - 2];
        });
	},

	removeAndClone: function (arr, valueToRemove) {
		return arr.filter(function(number){
		    return number !== valueToRemove;
        })
	},

	findIndexesOf: function (arr, itemToFind) {
		return arr.map(function(number, index){
		    if(number === itemToFind) {
                return index;
            }
		}).filter(function(number){
            return number !== undefined;
        })
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		return this.sum(this.square(arr.filter(function(number){
		    if(number % 2 === 0){
		        return number;
            }
        })))
	}

};

module.exports = arrayTasks;
