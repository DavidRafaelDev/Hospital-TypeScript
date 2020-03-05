namespace hospital{
    export class Pessoa{
        private nome:string|undefined;
        private cpf:string|undefined;

         getNome():string|undefined{
            return this.nome;
        }

        setNome(nome:string):void{
            this.nome = nome;
        }
        getCpf():string|undefined{
            return this.cpf
        }
        setCpf(cpf:string):void{
            this.cpf = cpf;
        }
    }
}