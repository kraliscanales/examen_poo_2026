import Empleado from "./empleado.js";

class Gerente extends Empleado {

    constructor(nombre, cedula, salarioBase, departamento) {

        super(nombre, cedula, salarioBase);

        this.departamento = departamento;

    }

    calcularSalarioNeto() {

        return this.salario + (this.salario * 0.20);

    }

    mostrarDetalles() {

        console.log(
            `Gerente del departamento de ${this.departamento}: ${this.nombre}, Cédula: ${this.cedula}, Salario Neto: C$${this.calcularSalarioNeto()}`
        );

    }

}

export default Gerente;