const fs = require("fs");

const alphabet = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "1234567890";

function getRandomInt(start, end) {
  return Math.floor(Math.random() * (end - start + 1)) + start;
}
function makeUpperCase(letter) {
  const choose = getRandomInt(1, 2);
  if (choose === 1) {
    return letter.toUpperCase();
  } else {
    return letter;
  }
}

function generatePassword(passwordLength) {
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    const chooseSymbol = getRandomInt(1, 3);

    switch (chooseSymbol) {
      case 1:
        const symbolAlpabet = getRandomInt(0, alphabet.length - 1);
        password += makeUpperCase(alphabet[symbolAlpabet]);
        break;
      case 2:
        const symbolNumbers = getRandomInt(0, numbers.length - 1);
        password += numbers[symbolNumbers];
        break;
      case 3:
        password += "_";
        break;
    }
  }

  return password;
}

// Запись пароля в файл
const filePath = "passwords.txt";
fs.writeFileSync(filePath, generatePassword(15), (err) => {
  if (err) {
    console.log("File write error: ", err);
  }
});
