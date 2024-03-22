export default class MemorizeNumbersModel {
    private numbersToMemorize: number[] = [];
    private score: number = 0;
  
    public startGame(numberCount: number): void {
      // Reset the state for a new game
      this.numbersToMemorize = [];
      this.score = 0;
  
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
  
    public getNumbersToMemorize(): number[] {
      return this.numbersToMemorize;
    }
  
    public getScore(): number {
      return this.score;
    }
    public setScore(newScore: number): void {
        this.score = newScore;
      }
  }
  