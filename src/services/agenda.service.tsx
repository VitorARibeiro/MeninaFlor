import { Agenda } from '../model/agenda.model';
import {DatabaseConnection} from '../database/database-connection'

const table = "agenda"
const db=DatabaseConnection.getConnection()

export class AgendaService {

     static addData(param: Agenda) {
        return new Promise((resolve, reject) =>db.transaction(
            tx => {
                tx.executeSql(`insert into ${table} (descricao, tipo_de_servico, horario_inicial, horario_final) values (?, ?, ?, ?)`, 
                [
                    param.descricao, 
                    param.tipo_de_servico, 
                    param.horario_inicial, 
                    param.horario_final
                ], 
                ( transaction, { insertId, rows }) => {
                    console.log("id insert: " + insertId);
                    resolve(insertId);}
                ),(sqlError) => {console.log(sqlError);}
            }, 
            (txError) => {
                console.log(txError);
            })
        );
    }

     static deleteById(id: number) {
        db.transaction(
            tx => {
                tx.executeSql(`delete from ${table} where id = ?;`, 
                [
                    id
                ], 
                ( transaction, { rows }) => {}), (sqlError) => {
                    console.log(sqlError);
                }
            },
            (txError) => {
                console.log(txError);
            });
    }


     static updateById(param: Agenda) {
        return new Promise((resolve, reject) =>db.transaction(tx => {
                tx.executeSql(`update ${table} set nome = ? where id = ?;`, [param.nome,param.id], () => {
                }), (sqlError) => {
                    console.log(sqlError);
                }}, (txError) => {
                console.log(txError);
    
            }));
    }

     static findById(id: number) {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table} where id=?`, [id], (_, { rows }) => {
                resolve(rows)
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);

        }));
    }

    static findAll() {
        return new Promise((resolve, reject) => db.transaction(tx => {
            tx.executeSql(`select * from ${table}`, [], (_, { rows }) => {
                resolve(rows)
            }), (sqlError) => {
                console.log(sqlError);
            }}, (txError) => {
            console.log(txError);
        }))
    }


}