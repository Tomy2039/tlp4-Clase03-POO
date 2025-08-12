class CuentaBancaria {
    #saldo

    constructor(titular, saldoInicial) {
        this.titular = titular
        if (saldoInicial < 0) {
            console.log("su saldo no puede ser negativo")
        }
        this.#saldo = saldoInicial
    }

    get saldo() {
        return this.#saldo
    }

    set saldo(nuevoSaldo) {
        if (nuevoSaldo < 0) {
            console.log("No se puede asignar un saldo negativo.");
            return;
        }
        this.#saldo = nuevoSaldo;
    }
}

const cuenta = new CuentaBancaria("Tomas Ramos", 500);