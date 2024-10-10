
    class TareaEmpleado {
        realizarTarea() {
            throw new Error("Método 'realizarTarea()' debe ser implementado.");
        }
    }

    class Ingeniero extends TareaEmpleado {
        constructor(nombre, tarea) {
            super();
            this.nombre = nombre;
            this.tarea = tarea;
        }
        
        realizarTarea() {
            return this.tarea;
        }
    }

    class Doctor extends TareaEmpleado {
        constructor(nombre, tarea) {
            super();
            this.nombre = nombre;
            this.tarea = tarea;
        }
        
        realizarTarea() {
            return this.tarea;
        }
    }

    const empleado1 = new Ingeniero("Samuel", "arreglar máquinas (3)");
    document.getElementById("nombreIngeniero").textContent = empleado1.nombre;
    document.getElementById("tareaIngeniero").textContent = empleado1.tarea;
    document.getElementById("resultadoIngeniero").textContent = `La tarea fue resuelta con éxito: ${empleado1.realizarTarea()}`;

    const empleado2 = new Doctor("Daniel", "5 cirugías pendientes");
    document.getElementById("nombreDoctor").textContent = empleado2.nombre;
    document.getElementById("tareaDoctor").textContent = empleado2.tarea;
    document.getElementById("resultadoDoctor").textContent = `La tarea fue resuelta con éxito: ${empleado2.realizarTarea()}`;
