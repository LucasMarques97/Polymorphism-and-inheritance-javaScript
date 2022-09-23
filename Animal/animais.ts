/* import { cac } from "./cachorro"
import { pre } from "./preguica"
import { cav } from "./cavalo" */

export{animal}
export class animais {
    nome: string
    idade: number
    emitirSom: string
    corre: string

    constructor(nome: string, idade: number, emitirSom: string, corre: string){
        this.nome = nome
        this.idade = idade
        this.emitirSom = emitirSom
        this.corre = corre
    }
       mostrarChachorro(){
            console.log(`O cachorro de nome ${this.nome}, possui ${this.idade} anos de idade, quando avistou o carteiro passando na rua de bicicleta logo rosnou e começou a latir "${this.emitirSom}", e começou a perseguir o carteiro até ${this.corre}\n`)
    }
    
    mostrarPreguica(){
            console.log(`A preguiça de nome ${this.nome}, possui ${this.idade} anos de idade, ao subir uma árvore emitiu um som "${this.emitirSom}", se assustou mas ${this.corre} para correr\n`)
    }
    
    mostrarCavalo(){
           console.log(`O cavalo de nome ${this.nome}, possui ${this.idade} anos, emitiu som equivalente a "${this.emitirSom}" , pois corria ${this.corre}\n`)
    }
  
}

export var animal1 = new animais ("Felipe Mello", 30, "kraus,kraus", "cansar...., deitar.., e dormir no meio da rua")
// animal1.mostrarChachorro()

export var animal2 = new animais ("Vitinho", 200, "Pum Pum Pum", "não possui energia")
//animal2.mostrarPreguica()

export var animal3 = new animais ("Arrascaeta", 30, "Vrum Vrum", "Veloz como foguete")
// animal3.mostrarCavalo()




