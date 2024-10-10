class Empleado {
    calcularSalario() {
        throw new Error("Método 'calcularSalario()' debe ser implementado.");
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, salarioMensual) {
        super();
        this.nombre = nombre;
        this.salarioMensual = salarioMensual;
    }
    
    calcularSalario() {
        return this.salarioMensual;
    }
}

class EmpleadoPorHoras extends Empleado {
    constructor(nombre, salarioporHora, horasTrabajadas) {
        super();
        this.nombre = nombre;
        this.salarioporHora = salarioporHora;
        this.horasTrabajadas = horasTrabajadas;
    }
    
    calcularSalario() {
        return this.salarioporHora * this.horasTrabajadas;
    }
}

const empleado1 = new EmpleadoTiempoCompleto("Samuel", 1500000);
document.getElementById("nombreTiempoCompleto").textContent = empleado1.nombre;
document.getElementById("salarioTiempoCompleto").textContent = empleado1.calcularSalario();

const empleado2 = new EmpleadoPorHoras("Daniel", 4900, 40);  // 40 horas trabajadas
document.getElementById("nombrePorHoras").textContent = empleado2.nombre;
document.getElementById("salarioPorHora").textContent = empleado2.salarioporHora;
document.getElementById("horasTrabajadas").textContent = empleado2.horasTrabajadas;
document.getElementById("salarioPorHorasTotal").textContent = empleado2.calcularSalario();