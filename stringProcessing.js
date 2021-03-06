// TODO: move it to a separate file
class LetterCount {
    constructor(letters, count) {
        this.Letters = letters;
        this.Count = count;
    }
}

class StringProcessing {

    static asterixTriangle(n) {
        const result = [];
        for (let spaceCounter=n, asterixCounter=1; spaceCounter>0; spaceCounter--, asterixCounter += 2){
            const blanks = ' '.repeat(spaceCounter-1);
            const stars = '*'.repeat(asterixCounter);

            const currentRow = `${blanks}${stars}`;

            result.push(currentRow);
        }

        return result;
    }

    static mostFrequentLetter(input) {
        const result = [];

        let buffer = input;
        let mostFrequent = [];
        let mostFrequentCount = 0;

        while (buffer.length >= mostFrequentCount) {
            const firstLetter = buffer.substr(0, 1);

            const regexFirstLetter = new RegExp(firstLetter, 'g');

            const count = buffer.match(regexFirstLetter).length;

            if (count > mostFrequentCount) {
                mostFrequent = [];
                mostFrequentCount = count;
                mostFrequent.push(firstLetter);
            }
            else if (count === mostFrequentCount) {
                mostFrequent.push(firstLetter);
            }

            buffer = buffer.replace(regexFirstLetter, '');
        }

        return new LetterCount(mostFrequent, mostFrequentCount);
    }
}