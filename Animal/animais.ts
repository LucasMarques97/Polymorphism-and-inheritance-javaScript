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
            //console.log(`O cachorro de nome ${this.nome} e idade ${this.idade} latiu: ${this.emitirSom} , e depois ${this.corre}`)
    }
    mostrarPreguica(){
            //console.log(`A preguiça de nome ${this.nome} e idade ${this.idade} emitiu som equivalente a ${this.emitirSom}, e para correr ${this.corre}`)
    }
    mostrarCavalo(){
           // console.log(`O cavalo de nome ${this.nome} e idade ${this.idade} emitiu som equivalente a${this.emitirSom} , e corre ${this.corre}`)
           console.log(`O cavalo de nome ${this.nome} e idade ${this.idade} emitiu som equivalente a${this.emitirSom} , e corre ${this.corre}`)
    }
  
}

var animal1 = new animais ("Felipe Mello", 30, "kraus,kraus", "correndo..., cansou...., parou..., deitou.. e dormiu no meio da rua")
animal1.mostrarChachorro()

var animal2 = new animais ("Jão", 20, "tata", "paum")
animal2.mostrarPreguica()

var animal3 = new animais ("pao", 30, "jajajaj", "tuabjd")
animal3.mostrarCavalo()




