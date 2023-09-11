class Grupo {
    constructor(
      public IDgrupo: number,
      public NomeGrupo: string,
      public Data_Apresentação: Date
    ) {
      this.avaliação = [];
    }
  
    private avaliação: Avaliação[] = [];
  
    addAvaliação(avaliação: Avaliação) {
      this.avaliação.push(avaliação);
    }
  }
  
  class Aluno {
    constructor(
        public IDaluno: number, 
        public NomeAluno: string
    ) {
      this.avaliaçãofeita = [];
    }
  
    private avaliaçãofeita: Avaliação[] = [];
  
    AvaliarGrupo(grupo: Grupo, Nota: number, comentário: string) {
      // Verificar se o aluno já avaliou este grupo
      if (this.avaliaçãofeita.some((avaliação) => avaliação.GrupoAvaliado === grupo)) {
        console.log("Você já avaliou este grupo.");
      } else {
        const avaliação = new Avaliação(this, grupo, Nota, comentário);
        grupo.addAvaliação(avaliação);
        this.avaliaçãofeita.push(avaliação);
        console.log("Avaliação registrada com sucesso.");
      }
    }
  }
  
  class Professor {
    constructor(
        public professorID: number,
        public professorNome: string
    ) {
      this.avaliação_feita = [];
    }
  
    private avaliação_feita: Avaliação[] = [];
  
    AvaliarGrupo(grupo: Grupo, Nota: number, comentários: string) {
      // Verificar se o professor já avaliou este grupo
      if (this.avaliação_feita.some((avaliação) => avaliação.GrupoAvaliado === grupo)) {
        console.log("Você já avaliou este grupo.");
      } else {
        const avaliação = new Avaliação(this, grupo, Nota, comentários);
        grupo.addAvaliação(avaliação);
        this.avaliação_feita.push(avaliação);
        console.log("Avaliação registrada com sucesso.");
      }
    }
  }
  
  class Avaliação {
    constructor(
      public avaliador : Aluno | Professor,
      public GrupoAvaliado: Grupo,
      public Nota: number,
      public Comentário: string
    ) {
      this.IDavaliação = Date.now(); // ID único baseado na hora atual
    }
  
    private IDavaliação: number;
  }
  
  // Exemplo de uso
  const grupo1 = new Grupo (1, "Projeto A", new Date("12/09/2023"));
  
  const aluno1 = new Aluno(1, "Alice");
  const professor1 = new Professor(1, "Dr. Dutra");
  
  aluno1.AvaliarGrupo(grupo1, 8, "Bom trabalho.");
  professor1.AvaliarGrupo(grupo1, 7, "Boa apresentação.");
  aluno1.AvaliarGrupo(grupo1, 9, "Excelente projeto.");