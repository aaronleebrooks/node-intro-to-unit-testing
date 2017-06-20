const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

	it('should determine if a number is divisible by 5, 3, or both', function(){
		const normalCases = [
		{num: 3, expected: 'fizz'},
		{num: 5, expected: 'buzz'},
		{num: 15, expected: 'fizz-buzz'}
	];
	normalCases.forEach(function(input){
		const answer = fizzBuzzer(input.num);
		answer.should.equal(input.expected);
	});
	});
	it('should throw an error if arguments are not numbers', function(){
		const wrongCases = [false, '2', 'fifteen'];
		wrongCases.forEach(function(input){
			(function(){
				fizzBuzzer(input)
			}).should.throw(Error);
		});
	});
});