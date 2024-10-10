class FormaGeometrica {
    calcularArea() {
        throw new Error("Método 'calcularArea()' debe ser implementado.");
    }
}

class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    
    calcularArea() {
        return this.lado ** 2;
    }
}

class Circulo extends FormaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    
    calcularArea() {
        return Math.PI * (this.radio ** 2);
    }
}

const cuadrado = new Cuadrado(5);
document.getElementById("areaCuadrado").textContent = cuadrado.calcularArea().toFixed(2);

const circulo = new Circulo(4);
document.getElementById("areaCirculo").textContent = circulo.calcularArea().toFixed(2);