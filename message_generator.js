//Message arrays:

const messages = {
  youAre: ["enough", "strong", "wise", "capable", "resilient", "beautiful"],
  youCan: ["handle this", "acheive your goals", "pick yourself up", "take up space", "forgive them", "choose to see the good"],
  youWill: ["make great contributions", "create the life you desire", "let go of what does not serve you", "not compare your journey to other's", "create change", "succeed today"]
}; 

//Message structure: `You are ${youAre}. You can ${youCan}. You will ${youWill}.`

const randomAffirmation = function(messages) {
  const randomAre = messages.youAre[Math.floor(Math.random() * messages.youAre.length)];
  const randomCan = messages.youCan[Math.floor(Math.random() * messages.youCan.length)]; 
  const randomWill = messages.youWill[Math.floor(Math.random() * messages.youWill.length)];

  let affirmation = `You are ${randomAre}. You can ${randomCan}. You will ${randomWill}.`
  console.log(affirmation);
};

randomAffirmation(messages);

