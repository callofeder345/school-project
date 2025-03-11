  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[getRandomInt(16)];
    }
    return color;
  };

  const getRandomItem = (arr) => {
    return arr[getRandomInt(arr.length)];
  };

  const getRandomBoolean = () => {
    return Math.random() >= 0.5;
  };

  const getRandomWord = () => {
    let words = ["apple", "banana", "cherry", "date", "elderberry"];
    return getRandomItem(words);
  };

  const getRandomWords = (n) => {
    let words = ["apple", "banana", "cherry", "date", "elderberry"];
    let result = [];
    for (let i = 0; i < n; i++) {
      result.push(getRandomItem(words));
    }
    return result;
  };

  const getRandomSentence = () => {
    let words = ["apple", "banana", "cherry", "date", "elderberry"];
    let sentence = "";
    for (let i = 0; i < 5; i++) {
      sentence += `${getRandomItem(words)} `;
    }
    return sentence + getRandomBoolean();
  };

  const getRandomSentences = (n) => {
    let sentences = [];
    for (let i = 0; i < n; i++) {
      sentences.push(getRandomSentence());
    }
    return sentences;
  };