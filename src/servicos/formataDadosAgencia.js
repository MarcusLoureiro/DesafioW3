export default function formataAgencia(valor ='') {
    while (valor.length < 4){
        valor = '0'+valor
    }
    return valor
  }