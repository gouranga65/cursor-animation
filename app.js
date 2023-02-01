setInterval(() => {
  colorChange();
  hash = "";
}, 1000);
function colorChange() {
  let hash = "#";
  const number = "0123456789ABCDEF";
  for (let index = 0; index < 6; index++) {
    hash = hash + number[Math.floor(Math.random() * 16)];
    let text = document.getElementsByTagName("h1")[0];
    text.style.color = hash;
  }
  console.log(hash);
}
