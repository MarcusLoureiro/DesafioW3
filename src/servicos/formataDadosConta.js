export default function formataConta(valor ='') {
    while (valor.length < 8){
        valor = '0'+valor
    }
    return valor
  }