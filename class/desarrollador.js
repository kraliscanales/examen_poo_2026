import Empleado from "./empleado.js";

class Desarrollador extends Empleado {

    constructor(nombre, cedula, salarioBase, lenguajeProgramacion) {

        super(nombre, cedula, salarioBase);

        this.lenguajeProgramacion = lenguajeProgramacion;

    }

    calcularSalarioNeto() {

        return this.salario + 1500;

    }

    mostrarDetalles() {

        console.log(
            `Desarrollador de ${this.lenguajeProgramacion}: ${this.nombre}, Cédula: ${this.cedula}, Salario Neto: C$${this.calcularSalarioNeto()}`
        );

    }

}

export default Desarrollador;