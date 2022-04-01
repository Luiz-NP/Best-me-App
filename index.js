const questions = [
  'O que aprendi hoje?',
  'O que me deixou aborrecido? E o que eu poderia fazer para melhorar?',
  'O que me deixou feliz hoje?',
  'Quantas pessoas ajudei hoje?'
]

//Função que irá perguntar
const ask = (index = 0) => {
  process.stdout.write('\n' + questions[index] + '\n\n')
}

ask()
