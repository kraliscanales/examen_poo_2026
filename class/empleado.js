class Empleado {

    #salarioBase;

    constructor(nombre, cedula, salarioBase) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.#salarioBase = salarioBase;
    }

    set salario(monto) {

        if (monto <= 0) {
            console.log("Error: El salario no puede ser negativo o cero");
        } else {
            this.#salarioBase = monto;
        }

    }

    get salario() {
        return this.#salarioBase;
    }

    calcularSalarioNeto() {
        return this.#salarioBase;
    }

    mostrarDetalles() {

        console.log(
            `Empleado: ${this.nombre}, Cédula: ${this.cedula}, Salario Neto: C$${this.calcularSalarioNeto()}`
        );

    }

}

export default Empleado;