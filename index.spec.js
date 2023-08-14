import { retornaNueve } from "./index";
import { dosNombresIguales } from "./index";
import {definido} from "./index"



describe("probando matchers", () => {
    describe("toBe", () => {
        test("debe entregar 9", ()=>{
            //ajusta
            let numero;
            //actua
            numero= retornaNueve()
            //afirma 
            expect(numero).toBe(9);
        }
        )
    }
    )
    describe("toEqual", () => {
        test("debe indicar tienen el mismo nombre", ()=>
        {
            //ajusta
            let persona_1;
            let persona_2;
            let nombres;
            //actua
            nombres= dosNombresIguales()
            persona_1=nombres.nombre_1
            persona_2=nombres.nombre_2
            //afirma
            expect(persona_1).toEqual(persona_2)
        }
        )
    }
    )
    describe("toBeDefined", ()=>{
        describe("verifica si esta funcion esta definida",()=>{
            //ajusta
            let valor
            //actua
            valor= definido()
            //afirma 
            expect(valor).toBeDefined();

        }
        )


    }
    )
}
)