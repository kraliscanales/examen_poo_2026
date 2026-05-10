import Desarrollador from "./class/desarrollador.js";
import Gerente from "./class/gerente.js";

const desarrollador = new Desarrollador(
    "Carlos",
    "001",
    10000,
    "JavaScript"
);

const gerente = new Gerente(
    "Ana",
    "002",
    15000,
    "IT"
);

// Error de salario
desarrollador.salario = -5000;

// Cambio correcto
gerente.salario = 18000;

// Mostrar información
desarrollador.mostrarDetalles();

gerente.mostrarDetalles();