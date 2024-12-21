require ('@jest/globals');
const { getUserChoice, getComputerChoice, playRound } = require('./external');

const { describe, it, expect } = require('jest');

describe('getUserChoice', () => {
  it('should return "rock" when the user inputs "rock"', async () => {
    const mockInput = 'rock';
    const userChoice = await getUserChoice(() => mockInput);
    expect(userChoice).toBe('rock');
  });

  it('should return "paper" when the user inputs "paper"', async () => {
    const mockInput = 'paper';
    const userChoice = await getUserChoice(() => mockInput);
    expect(userChoice).toBe('paper');
  });

  it('should return "scissors" when the user inputs "scissors"', async () => {
    const mockInput = 'scissors';
    const userChoice = await getUserChoice(() => mockInput);
    expect(userChoice).toBe('scissors');
  });

  it('should prompt for a valid input when the user input is invalid', async () => {
    const mockInput = 'invalid';
    const userChoice = await getUserChoice(() => mockInput);
    expect(userChoice).not.toBe('invalid');
  });
});

describe('getComputerChoice', () => {
  it('should return a valid choice', () => {
    const computerChoice = getComputerChoice();
    expect(['rock', 'paper', 'scissor']).toContain(computerChoice);
  });
});

describe('playRound', () => {
  it('should handle a tie correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    playRound('rock', 'rock');
    expect(consoleSpy).toHaveBeenCalledWith("It's a tie!");
    consoleSpy.mockRestore();
  });

  it('should handle a win correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    playRound('rock', 'scissor');
    expect(consoleSpy).toHaveBeenCalledWith("You win! scissor beats rock");
    consoleSpy.mockRestore();
  });

  it('should handle a loss correctly', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    playRound('rock', 'paper');
    expect(consoleSpy).toHaveBeenCalledWith("You lose! rock beats paper");
    consoleSpy.mockRestore();
  });
});
