var math = {

	/**
	 * 배열 크기
	 */
	arrayCnt : 10,

	/**
	 *
	 * @returns {number}
	 */
	makeNumber: function ( digit ) {

		var num = 1;
		for( var i = 0; i < digit; i++ ) {
			num = num * 10;
		}

		return Math.floor(Math.random() * num) + 1;
	},

	/**
	 *
	 * @returns {Array}
	 */
	makeNumberArray: function (operator, digit1, digit2) {
		var tempArray = [];

		for( var i = 0; i < math.arrayCnt; i++ ) {

			var num1 = math.makeNumber(digit1);
			var num2 = math.makeNumber(digit2);
			if( operator === '÷' || operator === '-' ) {
				while(true) {
					if( num1 > num2 ) {
						break;
					} else {
						num1 = math.makeNumber(digit1);
						num2 = math.makeNumber(digit2);
					}


				}
			}

			tempArray.push({
				num1        : num1,
				num2        : num2,
				answer      : null,
				correct     : null,
				remainder   : null,
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
			if( calcType == '-') {
				numArray[i].correct = numArray[i].num1 - numArray[i].num2;
			}
			if( calcType == '×') {
				numArray[i].correct = numArray[i].num1 * numArray[i].num2;
			}
			if( calcType == '÷') {
				numArray[i].correct = parseInt(numArray[i].num1 / numArray[i].num2);
				numArray[i].remainder = parseInt(numArray[i].num1 % numArray[i].num2);
			}
		}
		return numArray;
	}

};