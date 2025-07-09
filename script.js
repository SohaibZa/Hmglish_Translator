const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const toHmglish = {};
const fromHmglish = {};

for (let i = 0; i < alphabet.length; i++) {
  let binary = i.toString(2).padStart(5, '0');
  let hm = binary.replace(/0/g, 'H').replace(/1/g, 'M');
  toHmglish[alphabet[i]] = hm;
  fromHmglish[hm] = alphabet[i];
}

function encodeHmglish() {
  const input = document.getElementById("inputText").value.toUpperCase();
  let result = "";

  for (let char of input) {
    if (alphabet.includes(char)) {
      result += toHmglish[char] + " ";
    } else if (char === " ") {
      result += "/ ";
    }
  }

  document.getElementById("outputText").value = result.trim();
}

function decodeHmglish() {
  const input = document.getElementById("inputText").value.trim();
  let parts = input.split(" ");
  let result = "";

  for (let part of parts) {
    if (part === "/") {
      result += " ";
    } else if (fromHmglish[part]) {
      result += fromHmglish[part];
    }
  }

  document.getElementById("outputText").value = result;
}
function clearText() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
}
function copyOutput() {
  const output = document.getElementById("outputText");
  output.select();
  output.setSelectionRange(0, 99999); // For mobile devices

  try {
    document.execCommand("copy");
    alert("Copied to clipboard! 🧠");
  } catch (err) {
    alert("Failed to copy 😓");
  }
}
