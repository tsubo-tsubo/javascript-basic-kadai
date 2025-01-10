const btnText = document.getElementById('text');
const outputBtn = document.getElementById('btn');

outputBtn.addEventListener('click', () => {
  // h2要素のテキストを変更
btnText.textContent = 'ボタンをクリックしました';
});