function convert() {
  const binary = document.getElementById('b-input').value;
  if (binary === '') return alert('Please enter a valid binary number');
  binary.split('').map((char) => {
    if (char !== '0' && char !== '1') return alert('Please enter a valid binary number');
  });
  const decimal = parseInt(binary, 2);
  document.getElementById('d-input').value = decimal;
  return true;
}