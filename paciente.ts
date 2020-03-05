namespace hospital{
    export class Paciente extends Pessoa{
        codPaciente:number|undefined;

        getCodPaciente():number|undefined{
            return this.codPaciente;
        }

        setCodPaciente(nome:number):void{
            this.codPaciente = nome;
        }
    }
}