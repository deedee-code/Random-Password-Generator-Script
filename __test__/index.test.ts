import { generatePassword } from "../src/index";

describe("Password Generator", () => {
  test("should generate a password of specified length", () => {
    const length = 10;
    const password = generatePassword(length);
    expect(password).toHaveLength(length);
  });

  test("should throw an error if length is less than 6", () => {
    expect(() => generatePassword(3)).toThrow(
      "Password length must be at least six(6) characters"
    );
  });

  test("should contain at least one uppercase letter", () => {
    const password = generatePassword(10);
    expect(password).toMatch(/[A-Z]/);
  });

  test("should contain at least one lowercase letter", () => {
    const password = generatePassword(10);
    expect(password).toMatch(/[a-z]/);
  });

  test("should contain at least one number", () => {
    const password = generatePassword(10);
    expect(password).toMatch(/[0-9]/);
  });

  test("should contain at least one special character", () => {
    const password = generatePassword(10);
    expect(password).toMatch(/[!@#$%^&*()_+\[\]{}|;:,.<>?]/);
  });

  test("should generate different passwords each time", () => {
    const password1 = generatePassword(10);
    const password2 = generatePassword(10);
    expect(password1).not.toEqual(password2);
  });
});
