// Crie um algomrítmo que receba três notas de um aluno, calcule sua média e mostre as seguintes 
//mensagens de acordo com cada situação:
// - Se a media for igual ou maiorque 7 - aprovado
// - Se a medeia for maior e igual a cinco e menor que sete - recuperação
// - Se a media for menor que 5 - reprovado|

function calculaMedia(nota1,nota2,nota3) {
    let media = (nota1 + nota2 + nota3)/3

    if (media >= 7) {
        return 'Aprovado'
    }
    if (media >=5 && media <7) {
        return 'Recuperação'
    }
    if (media < 5) {
        return 'Reprovado'
            }
}

console.log(calculaMedia(8,5,8))