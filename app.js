class App {
    // TODO: Create data and view model layers :D
    start() {
        this.#printAsterixTriangle();
        this.#printMostFrequentLetter();
    }

    #printAsterixTriangle() {
        const triangle = StringProcessing.asterixTriangle(5);
        triangle.forEach(row => console.log(row));
    }

    #printMostFrequentLetter() {
        // change the tested string here
        const text = 'szxzspphpswspaaaa';

        const mostFrequentCount = StringProcessing.mostFrequentLetter(text);

        const letters = mostFrequentCount.Letters.join();
        const count = mostFrequentCount.Count;

        const plural = letters.length > 1 ? 's' : '';
        const pluralArticle = letters.length > 1 ? 'are' : 'is';

        console.log(`The most frequent letter${plural} in ${text} ${pluralArticle}:`);
        console.log(`${letters} - ${count} times.`);
    }
}