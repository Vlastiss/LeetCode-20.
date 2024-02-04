var isValid = function (s) {
    const pairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    const brackets = [...s];
    var validator = true;
    const stack = [];

    for (let i = 0; i < brackets.length; i++) {
        const currentBracket = brackets[i];

        if (pairs.hasOwnProperty(currentBracket)) {
            stack.push(currentBracket);
        } else {
            const lastOpeningBracket = stack.pop();

            // Check if the current bracket matches the expected closing bracket
            if (pairs[lastOpeningBracket] !== currentBracket) {
                validator = false;
                break;
            }
        }
    }

    if (stack.length !== 0) {
        validator = false;
    }

    console.log(validator);
}

// Example usage:
isValid("({})"); // Should print false
