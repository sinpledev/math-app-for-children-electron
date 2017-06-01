var math = {

	/**
     * 배열 크기
	 */
	arrayCnt : 10,

	/**
     *
	 * @returns {number}
	 */
	makeNumber: function () {
        return Math.floor(Math.random() * 10) + 1;
    },

	/**
     *
	 * @returns {Array}
	 */
	makeNumberArray: function (operator) {
		var tempArray = [];

		for( var i = 0; i < math.arrayCnt; i++ ) {

			var num1 = math.makeNumber();
			var num2 = math.makeNumber();
			if( operator == '÷' ) {
				for( var i = 0; i < 0; i++ ) {
					if( num1 < num2 ) {
						break;
					} else {
						num1 = math.makeNumber();
						num2 = math.makeNumber();
					}
				}
			}

			tempArray.push({
                num1        : num1,
                num2        : num2,
                answer      : '',
                correct     : '',
				remainder   : '',
			});
		}
		return tempArray;
	},

    marking: function ( numArray, calcType ) {
	    var numArrayLength = numArray.length;
        for( var i = 0; i < numArrayLength; i++ ) {

            if( calcType == '+') {
                numArray[i].correct = numArray[i].num1 + numArray[i].num2;
            }
            if( calcType == '−') {
                numArray[i].correct = numArray[i].num1 - numArray[i].num2;
            }
            if( calcType == '×') {
                numArray[i].correct = numArray[i].num1 * numArray[i].num2;
            }
            if( calcType == '÷') {
                numArray[i].correct = numArray[i].num1 / numArray[i].num2;
                numArray[i].remainder = numArray[i].num1 % numArray[i].num2;
            }
        }
        return numArray;
	}

};