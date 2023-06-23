const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

/*for (let i = 0; i < filmes.length; i++) {
  const filme = filmes[i]
  const elenco = filme.elenco

  const frase = `${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor}.`

  console.log(frase)

  for (let j = 0; j < elenco.length; j++) {
    const fraseElenco = `Atriz/Ator ${j + 1}: ${elenco[j]}`

    console.log(fraseElenco)
  }
}
*/

for (let indice in filmes) {
  const filme = filmes[indice]
  const titulo = filme.titulo
  const ano = filme.ano
  const diretor = filme.diretor
  const elenco = filme.elenco

  const frase = `${titulo}, de ${ano}, dirigido por ${diretor}.`
  console.log(frase)

  for (let artista of elenco) {
    const indiceArtista = elenco.indexOf(artista)

    const fraseElenco = `Atriz/Ator ${indiceArtista + 1}: ${artista}`

    console.log(fraseElenco)
  }
}
   
 

// escreva seu código abaixo 👇🏻
/*
const bimestre1 = [10, 10, 10, 10] // soma = 40 ; média = 10
const bimestre2 = [8, 5, 7.50, 3]
const bimestre3 = [6, 7, 8.50, 10]
const bimestre4 = [3, 5, 2, 0]



const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]
/*
// construindo o laço para percorrer cada andar do prédio
for ( let i = 0; i < notasDoAno.length; i++){
  const bimestre = notasDoAno[i] // guarda a lista de notas de cada bimestre
  //console.log(bimestre)

  let soma = 0
  let media = 0


  // construindo laço para percorrer cada apartamento do andar
  for(let j = 0; j < bimestre.length ; j++){
   // console.log(bimestre[j])
soma = soma + bimestre[j]

  }

  media = soma / bimestre.length

console.log(`A soma das notas do bimestre ${i + 1} é ${soma}
\nA média das notas do bimestre é ${i + 1} é ${media}`)
}
*/

// for in => variavel guarda o ÍNDICE
// for of => variável guarda o ELEMENTO
/*
for (let index in notasDoAno){
 indice = Number(index)


  let soma = 0
  let media = 0

  for (let elemento of notasDoAno[index]){
    soma = soma + elemento


  }
  media = soma / notasDoAno[index].length

  console.log(`A soma das notas do bimestre ${index = 1} é ${soma}
\nA média das notas do bimestre é ${index+ 1} é ${media}`)
}
*/