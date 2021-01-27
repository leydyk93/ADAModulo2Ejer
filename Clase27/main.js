const esContraseniaValida = (password) =>{
    if(password.length >= 8){
        console.log("Soy true")
        return true
    }
    console.log("Soy false")
    return false
}

esContraseniaValida('HolaEjemplo')
esContraseniaValida('Hola')


const ocultarContrasenia = (contrasenia) =>{
   let encrip = ''
   for(i=0;i<contrasenia.toString().length;i++){
    encrip += '*'
   }
   console.log(encrip)
   return encrip;
}
ocultarContrasenia(122324)
ocultarContrasenia(122)


const obtenerPrimeraOracion = (value)=>{
    const result = value.split('.')
    if(!result){
        console.log(value)
    }else{
        console.log(result[0])
    }
}

obtenerPrimeraOracion('A mí no me preguntes, sólo soy una oración')
obtenerPrimeraOracion('Tengo varias oraciones. Esta es la segunda. Y esta es la tercera.')

const esAnioNuevo = (fecha)=>{
  const fechaDiv = fecha.split('/')
  if(fechaDiv[0] === fechaDiv[1] && fechaDiv[1] === '01'){
    console.log("Es año nuevo")
    return "Es año nuevo"
  }
  console.log("No es año nuevo")
  return "No es año nuevo"
}

esAnioNuevo('12/02/2020')
esAnioNuevo('01/02/2020')
esAnioNuevo('01/01/2021')

const aprueba = (nota)=>{
    const notaDefinitiva = Math.round(nota)
    if(notaDefinitiva >= 6){
        console.log(`Aprobado: ${nota} ~ ${notaDefinitiva}`)
        return true
    }
    console.log(`Reprobado: ${nota}  ~ ${notaDefinitiva}`)
    return false 
}

aprueba(5.5)
aprueba(5.4)