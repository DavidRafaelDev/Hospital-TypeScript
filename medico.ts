namespace hospital{
    export class Medico extends Funcionario{
        private crm:number|undefined;
        private especialidade:string|undefined;

        getCrm():number|undefined{
            return this.crm;
        }

        setCrm(nome:number):void{
            this.crm = nome;
        }

        getEspecialidade():string|undefined{
            return this.especialidade;
        }

        setespecialidade(nome:string):void{
            this.especialidade = nome;
        }
    }
}
