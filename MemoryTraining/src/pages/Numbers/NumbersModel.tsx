export default class MemorizeNumbersModel {
    private numbersToMemorize: number[] = [];
    private score: number = 0;
    private groupBy: number = 1
  
    public startGame(numberCount: number): void {
      // Reset the state for a new game
      this.numbersToMemorize = [];
      this.score = 0;
      this.groupBy = 1
  
      // Generate a sequence of random digits
      for (let i = 0; i < numberCount; i++) {
        this.numbersToMemorize.push(Math.floor(Math.random() * 10));
      }

    }
  
    public checkAnswer(userInput: string): number {
      const userAnswers = userInput.split('').map(Number);
  
      // Reset score for each attempt
      this.score = 0;
  
      // Increment score for each correctly memorized digit
      userAnswers.forEach((num, index) => {
        if (num === this.numbersToMemorize[index]) {
          this.score += 1;
        }
      });
      console.log("User Answers:", userAnswers);
        console.log("Numbers to Memorize:", this.numbersToMemorize);

  
      return this.score;
    }
  
    public getNumbersToMemorize(): string {
        let result = '';
        for (let i = 0; i < this.numbersToMemorize.length; i += this.groupBy) {
            if (i > 0) result += ' '; // Add a space before each group after the first
            result += this.numbersToMemorize.slice(i, i + this.groupBy).join('');
        }
        return result;
    }
      
    public getScore(): number {
      return this.score;
    }
    public setScore(newScore: number): void {
        this.score = newScore;
      }
    public setGroupBy(groupBy: number): void {
        this.groupBy = Math.max(1, groupBy); // Ensure grouping size is at least 1
      }
      

      
  }
  