//FUNÇÃO RECURSIVA p/ calcular fatorial

function fatorial(n) {
  if (n == 1) {
    return 1
  } else {
    return n * fatorial(n - 1)
  }
}

/*
5! = 4 x 3 x 2 x 1
é mesma coisa que
5! = 5 X 4!
ou seja
n! = n x (n-1)!
exceto 1! = 1
*/
