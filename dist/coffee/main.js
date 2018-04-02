(function() {
  var fib, i, println, x;

  println = function(text) {
    return document.write(text + '<br>');
  };

  fib = function(n) {
    if (n === 1 || n === 2) {
      return 1;
    } else {
      return fib(n - 2) + fib(n - 1);
    }
  };

  for (x = i = 1; i <= 10; x = ++i) {
    println(fib(x));
  }

}).call(this);
