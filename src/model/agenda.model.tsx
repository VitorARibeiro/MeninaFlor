export class Agenda {

    constructor(id?: number, descricao?: string, tipo_de_servico?: string, horario_inicial?: Date, horario_final?: Date) {
      this.id = id;
      this.descricao = descricao;
      this.tipo_de_servico = tipo_de_servico;
      this.horario_inicial = horario_inicial;
      this.horario_final = horario_final;
    }
    public id: number;
    public descricao: string;
    public tipo_de_servico: string;
    public horario_inicial: Date;
    public horario_final: Date;
   
  
  }