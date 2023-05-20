class MemorizeNumbersModel {
    private numbersToMemorize: number[] = [];
    private score: number = 0;
    private groupBy: number = 1;

    public startGame(numberCount: number, groupBy: number): void {
        this.numbersToMemorize = Array.from({ length: numberCount }, () =>
            Math.floor(Math.random() * 10)
        );
        this.groupBy = groupBy;
        this.score = 0;
    }

    public checkAnswer(userInput: string): number {
        const userAnswers: number[] = userInput
            .split(',')
            .map((str) => Number(str.trim()));

        let correctCount = 0;
        this.numbersToMemorize.forEach((num, index) => {
            if (userAnswers[index] === num) {
                correctCount++;
            }
        });
        this.score = correctCount;
        return correctCount;
    }

    public getNumbersToMemorize(): number[] {
        return this.numbersToMemorize;
    }

    public getGroupBy(): number {
        return this.groupBy;
    }

    public setGroupBy(groupBy: number): number {
        return this.groupBy = groupBy;
    }

    public getScore(): number {
        return this.score;
    }
}

export default MemorizeNumbersModel;
