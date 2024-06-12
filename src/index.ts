const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";

function getRandomCharacter(characters: string): string {
  return characters[Math.floor(Math.random() * characters.length)];
}

export function generatePassword(length: number): string {
  if (length < 6) {
    throw new Error("Password length must be at least six(6) characters");
  }

  let password = "";
  password += getRandomCharacter(uppercaseLetters);
  password += getRandomCharacter(lowercaseLetters);
  password += getRandomCharacter(numbers);
  password += getRandomCharacter(specialCharacters);

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  for (let i = 4; i < length; i++) {
    password += getRandomCharacter(allCharacters);
  }

  return password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
}
