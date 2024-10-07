/* Does a branchless version of fizzbuzz outperforms a regular one? The Magic 8ball says "Outlook not so good"...
*
* Both executions are roughly equivalent, maybe because the branch prediction is smoothing any gains that hand rolling the loop might gain?
* Also, I am computing a couple more values on the branchless fizzbuzz due to not checking if I'm over 100
/*

function benchmark(fn, durationMs) {
	const startTime = performance.now();
	let count = 0;

	while (performance.now() - startTime < durationMs) {
		fn();
		count++;
	}

	return count;
}

console.log('Branching');
const fizzbuzz_branching = benchmark(() => {
	for (let i = 1; i < 100; i++) {
		if (i % 5 === 0 && i % 3 === 0) {
			console.log('Fizzbuzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else {
			console.log(i);
		}
	}
}, 1000);

const fizzbuzz_branchless = benchmark(() => {
	for (let i = 1; i < 100; i++) {
		console.log(i++)
		console.log(i++)
		console.log('Fizz'); i++;
		console.log(i++)
		console.log('Buzz'); i++;
		console.log('Fizz'); i++;
		console.log(i++)
		console.log(i++)
		console.log('Fizz'); i++;
		console.log('Buzz'); i++;
		console.log(i++)
		console.log('Fizz'); i++;
		console.log(i++)
		console.log(i++)
		console.log('Fizbuzz'); i++
	}
}, 1000);

console.log(`Function was called ${fizzbuzz_branching} times in 1 second.`);
console.log(`Function was called ${fizzbuzz_branchless} times in 1 second.`);
