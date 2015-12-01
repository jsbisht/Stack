function Stack () {
	var stack = [];

	this.push = function(value) {
		stack.push(value);
	}

	this.pop = function() {
		stack.splice(stack.length - 1, 1);
	}

	this.peek = function() {
		return stack[stack.length - 1];
	}

	this.print = function() {
		console.log(stack);
	}

	this.size = function() {
		return stack.length;
	}
}

function main() {
	var stack = new Stack();
	stack.push(1);
	stack.push(2);
	stack.push(3);
	console.log(stack.size());
	stack.print();

	stack.pop();
	console.log(stack.size());
	stack.print();

	console.log('Topmost: ' + stack.peek());
}

main();