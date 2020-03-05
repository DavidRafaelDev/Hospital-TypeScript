"use strict";
var hospital;
(function (hospital) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.getNome = function () {
            return this.nome;
        };
        Pessoa.prototype.setNome = function (nome) {
            this.nome = nome;
        };
        Pessoa.prototype.getCpf = function () {
            return this.cpf;
        };
        Pessoa.prototype.setCpf = function (cpf) {
            this.cpf = cpf;
        };
        return Pessoa;
    }());
    hospital.Pessoa = Pessoa;
})(hospital || (hospital = {}));
