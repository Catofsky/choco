
println = (text) ->
  document.write text + '<br>'


fib = (n) ->
  if n in [1, 2] then 1 else fib(n - 2) + fib(n - 1)


println fib x for x in [1..10]
