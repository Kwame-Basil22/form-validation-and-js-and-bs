function loop() {
  let looping = prompt("hello there");
  var count = 0;
  document.write("looping");

  while (count < 101) {
    document.write("figaro " + count + "<br>");
    count++;
  }
  document.write("the end");
}
