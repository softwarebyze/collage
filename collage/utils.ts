export const randBetween = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const randomChoice = <T>(choices: T[]): T => {
  return choices[Math.floor(Math.random() * choices.length)];
};

export const randomChoiceWithoutRepeats = <T>(choices: T[]): (() => T) => {
  let remainingChoices = [...choices];

  return () => {
    if (remainingChoices.length === 0) {
      remainingChoices = [...choices]; // Reset the array when it runs out
    }

    const choice = randomChoice(remainingChoices);
    remainingChoices = remainingChoices.filter((item) => item !== choice);
    return choice;
  };
};
