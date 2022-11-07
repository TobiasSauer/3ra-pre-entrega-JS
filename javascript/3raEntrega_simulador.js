const formSimulador = document.getElementById("formSimulador");
const montoPrestamo = document.getElementById("montoPrestar")
const cuotasCantidad = document.getElementById("cuotasCantidad")

formSimulador.addEventListener("submit", (e) => {
    
    e.preventDefault();
   
    if(montoPrestamo.value > 100000 || montoPrestamo.value < 5000){
        
        return alert("monto invalido, tiene que ser mayor a $5000 y menor a $100000")
    
    }else if(cuotasCantidad.value > 12){

        return alert("solamente se puede hacer hasta en 12 cuotas")

    }else if(parseInt(cuotasCantidad.value)  === Infinity || undefined){
        
        alert("cantidad de cuotas aun no definida")

    }else{

        const intereses = (montoPrestamo.value * 15) / 100;
        const totalPrestamo = (intereses + parseInt(montoPrestamo.value));
        const cuotas = totalPrestamo / cuotasCantidad.value;
        return alert(`el monto con intereses es de ${totalPrestamo} y las cuotas van a ser de ${cuotas} cada una`)

    }
})