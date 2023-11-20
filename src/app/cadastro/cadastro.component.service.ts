import { Injectable } from "@angular/core";
import { ICadastroUser } from "../Model/Icadastro-user";

@Injectable ({
    providedIn:'root'
})

export class CadastroService{
    users:ICadastroUser[] = [{
        user:"Maria",
        qtdUser:1
    },
    {
        user:"Jose",
        qtdUser:2
    }]
    adicionar(userRecebido: string, qtdUserRecebida: number):void{
        const newUser:ICadastroUser = {
            user:userRecebido,
            qtdUser:qtdUserRecebida,
        }
        this.users.push(newUser);
    }
    excluirUser(index:number):void{
        this.users.splice(index, 1);
    }
    editarUser(index: number, novoUser: ICadastroUser): void {
    this.users[index] = novoUser;
}
}
