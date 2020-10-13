class Dado {
    constructor() {}

    roll() {
        let random = Math.round(Math.random() * (100 - 1) + 1);

        return random;
    }
}



class Corredor {
    constructor(id) {
        this._id = id;
        this._avance = new Dado();
        this._posicion = 0;
    }

    get id() {
        return this._id;
    }

    get posicion() {
        return this._posicion;
    }

    run(number) {
        if (number === 1) {
          this._posicion += 3;
    
          return;
        } else if (number <= 3) {
          this._posicion += 1;
    
          return;
        } else {
          this._posicion += 2;
    
          return;
        }
      }
};

class Tortuga extends Corredor {

    constructor(id, nombre) {
        super({id});
        this._nombre = nombre;
    }

    get nombre() {
        return this._nombre;
    }


    pasoRapido() {
        this._posicion += 3;
    }

    resbalon() {
        this._posicion -= 6;
    }

    pasoLento() {
        this._posicion += 1;
    }

    run(number) {
        if (number <= 50) {
          this.pasoRapido();
    
          return;
        } else if (number <= 70) {
          this.resbalon()
    
          return;
        } else {
          this.pasoLento();
    
          return;
        }
    }
}

class Liebre extends Corredor {

    constructor(id, nombre) {
        super({id});
        this._nombre = nombre
    }


    get nombre() {
        return this._nombre;
    }

    dormir() {
        this._posicion += 0;

        return;
    }

    saltoGrande() {
        this._posicion += 9;
    }

    resbalonGrande() {
        this._posicion -= 12;
    }

    saltoPequeno() { 
        this._posicion +=   1;
    }

    resbalonPequeno() {
        this._posicion -= 2;
    }

    run(number) {
        if (number <= 20) {
          this.dormir();
    
          return;
        } else if (number <= 40) {
          this.saltoGrande();
    
          return;
        } else if(number < 50) {
          this.resbalonGrande();
    
          return;
        } else if(number < 85) {
            this.saltoPequeno();
        } else {
            this.resbalonPequeno();

            return;
        }
    }
}



class Carrera {
    constructor() {
        this._corredores = [];
    }

    inscripcion(corredor) {
        this._corredores.push(corredor)
    }

    descripcion() {
        console.log(`La liebre esta en la posicion ${this.corredores[0].posicion}, mientras que la tortuga esta en la posicion ${this.corredores[1].posicion}`)
    }

    get corredores() {
        return this._corredores;
    };

    iniciar() {

        if(this.corredores.length < 2) {
            console.log('Para poder iniciar la carrera se necesitan al menos 2 corredores');
        } else {
            
            while(this.corredores[0].posicion <= 90 && this.corredores[1].posicion <= 90) {
                
                this.corredores[0].run(this.corredores[0]._avance.roll());
                this.corredores[1].run(this.corredores[0]._avance.roll());

                this.descripcion()

            }
        }

        if(this.corredores[0].posicion === 90 && this.corredores[1].posicion === 90) {
            console.log('Fue un empate!')
        } else if(this.corredores[0].posicion > 90) {
            console.log('Gano la liebre!');
        } else {
            console.log('Gano la tortuga!')
        }
    };




}

let corredor1 = new Liebre(1, 'Liebre');
let corredor2 = new Tortuga(2, 'Tortuga');
let carrera1 = new Carrera();
carrera1.inscripcion(corredor1);
carrera1.inscripcion(corredor2);
carrera1.iniciar();