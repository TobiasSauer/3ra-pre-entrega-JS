const usuarios =
    [
        {
            nombre: "Esteban",
            edad: 16,
            DNI: 4444444
        },
        {
            nombre: "Franco",
            edad: 18,
            DNI: 5555555
        },
        {
            nombre: "Gimena",
            edad: 38,
            DNI: 6666666
        },
        {
            nombre: "Cristian",
            edad: 50,
            DNI: 7777777
        }
    ];


const formValid= document.getElementById("formValid");

class persona{
    constructor(nombre,edad,DNI){
        this.nombre= nombre;
        this.edad= edad;
        this.DNI= DNI;
    }
}

formValid.addEventListener("submit", (event) => {

    const nombre= document.getElementById("nombreValid");
    const edad= document.getElementById("edadValid");
    const DNI= document.getElementById("dniValid");


    if(DNI.value && edad.value && nombre.value !== "" || undefined || NaN){

        if(edad.value < 18){
            alert("tenes que ser mayor a 18 para pedir un prestamo")
        }else{
            const personaUSer= new persona(nombre.value, parseInt(edad.value) ,parseInt(DNI.value))
            
            usuarios.push(personaUSer);
            
            const personaJSON = JSON.stringify(personaUSer);
            
            localStorage.setItem("usuario", personaJSON);
            
            window.location.href= "./pages/simulador.html"
        }    
    }else{
        alert("los datos estan mal")
    }
    event.preventDefault();
});

