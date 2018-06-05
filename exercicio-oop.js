
class Aluno{
    constructor(nome, faltas){
        this.nomeAluno = nome;
        this._faltaAluno = faltas;
        this._aprovado = this._faltaAluno >= 10 ? false : true;
        this.passouDeAno = () => {
            return this._faltaAluno >= 10 ? 'Reprovado' : 'Aprovado';
        }
    }

    addFalta(){
        this._faltaAluno++
        return `Foi adicionado uma falta no aluno ${this.nomeAluno}`;
    }

}


class ListaAluno{
    constructor(){
        this.alunos = arguments;
        this.vernomes = (nomeDoAlunoBusca) => {
            return this.alunos[0].nomeAluno;
        }

    }
        obterAluno(nomeDoAlunoBusca){
            for (let i = 0; i < this.alunos.length; i++) {
                if (nomeDoAlunoBusca === this.alunos[i].nomeAluno) {
                    return this.alunos[i]; 
                }
            }
            return "Nenhum aluno com esse nome encontrado"
        }

        obterAlunosQueReprovaramPorFalta(){
            let alunosReprovados = []
            for (let i = 0; i < this.alunos.length; i++) {
                if (this.alunos[i]._aprovado === false) {
                    alunosReprovados.push(this.alunos[i].nomeAluno) ;
                }
            }
            return alunosReprovados;
        }



}


let ramos = new Aluno('Ramos', 50);
let joseph = new Aluno('Joseph', 16);
let maccal = new Aluno('Maccal', 120)

let listaDeAlunos = new ListaAluno(ramos, joseph, maccal);
