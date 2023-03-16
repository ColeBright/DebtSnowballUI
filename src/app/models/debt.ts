export class Debt {
    public id?: number;
    public balance?: number;
    public payment?: number;

    constructor(id?: number, balance?: number, payment?: number){
        this.id = id;
        this.balance = balance;
        this.payment = payment;
    }

}
