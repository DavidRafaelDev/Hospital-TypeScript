namespace hospital{
    export class Funcionario extends Pessoa{
        private codFuncionario:number|undefined;

         getCodFuncionario():number|undefined{
            return this.codFuncionario;
        }

        setCodFuncionario(nome:number):void{
            this.codFuncionario = nome;
        }
    }
}