namespace hospital{
    export class Enfermeiro extends Funcionario{
        private coren : number|undefined;

        getcoren(){
           return this.coren;
        }

        setcoren(coren:number){
            this.coren = coren;
        }
    }
}