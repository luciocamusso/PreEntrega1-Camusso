function montoSolicitado() {
    let montoSolicitado = Number(prompt("Ingrese el monto del crédito a solicitar."))
    alert("El monto solicitado es " + montoSolicitado)
    return montoSolicitado
}

function cantidadCuotas() {
    let cantidadCuotas = Number(prompt("Indique en cuántas cuotas desea cancelar el crédito."))
    alert("Desea cancelar el credito solicitado en " + cantidadCuotas + " cuotas.")
    return cantidadCuotas
}

function valorCuota(dato1, dato2) {
    let resultado = dato1 / dato2
    return resultado
}

let montoCredito = montoSolicitado()
let cuotas = cantidadCuotas()
let importeCuota = valorCuota (montoCredito, cuotas)

if ((montoCredito > 0) && (cuotas > 0)) {
    alert("Usted deberá pagar " + cuotas + " cuotas de " + importeCuota + " cada una.")
} else {
    alert("Error: el valor ingresado debe ser mayor a 0. Intente nuevamente.")
    let montoCredito = montoSolicitado()
    let cuotas = cantidadCuotas()
    let importeCuota = valorCuota (montoCredito, cuotas)
    alert("Usted deberá pagar " + cuotas + " cuotas de " + importeCuota + " cada una.")
}