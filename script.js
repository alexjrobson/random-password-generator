// Get DOM elements
const lengthInput = document.getElementById('length');
const includeUppercase = document.getElementById('includeUppercase');
const includeLowercase = document.getElementById('includeLowercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const generateBtn = document.getElementById('generateBtn');
const passwordOutput = document.getElementById('passwordOutput');

// Character sets
const UPPERCASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE_CHARS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBER_CHARS = '0123456789';
const SYMBOL_CHARS = '!@#$%^&*()_+[]{}|;:,.<>?';

// Generate password function
function generatePassword() {
  const length = parseInt(lengthInput.value);
  let charSet = '';

  if (includeUppercase.checked) charSet += UPPERCASE_CHARS;
  if (includeLowercase.checked) charSet += LOWERCASE_CHARS;
  if (includeNumbers.checked) charSet += NUMBER_CHARS;
  if (includeSymbols.checked) charSet += SYMBOL_CHARS;

  if (!charSet) {
    passwordOutput.textContent = 'Please select at least one character type!';
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  passwordOutput.textContent = password;
}

// Event listener for button
generateBtn.addEventListener('click', generatePassword);
