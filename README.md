# Random-Password-Generator-Script

A Random Password Generator script to generate random passwords of a specified length and strength, containing a mix of uppercase letters, lowercase letters, numbers, and special characters. This project includes writing at least six (6) test cases.

## Technical Stack

- Node.js
- Typescript
- Jest

## Install & Run

- Clone this repo: git clone [Random-Password-Generator-Script repo URL](https://github.com/deedee-code/Random-Password-Generator-Script.git)
- Change Directory to the repo: cd Random-Password-Generaor-Script
- Install dependencies: npm install
- Run tests: npm run test

## Test Cases

The test cases check if the password generator works correctly by verifying different aspects of the generated password.

- Check Password Length: Ensure the generated password has the specified length.
- Minimum Length Error: Ensure an error is thrown if the length is less than 6.
- Contains Uppercase Letter: Ensure the password contains at least one uppercase letter.
- Contains Lowercase Letter: Ensure the password contains at least one lowercase letter.
- Contains Number: Ensure the password contains at least one number.
- Contains Special Character: Ensure the password contains at least one special character.
- Different Passwords: Ensure the generator creates different passwords each time.
