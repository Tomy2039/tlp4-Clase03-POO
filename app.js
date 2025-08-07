//1
const cuentaBancariaPrototype = {
    depositar(monto){
        this.saldoInicial += monto
        console.log(`su monto sumado es ${this.saldoInicial}`)
    },
    extraer(monto){
        if (monto <= this.saldoInicial){
            this.saldoInicial -= monto
            console.log(`su saldo es ${this.saldoInicial}`)
        } else {
            console.log('su saldo es insuficiente')
        }
    },
    consultarSaldo(){
        console.log(`Saldo actual ${this.saldoInicial}`)
    },
}

function CuentaBancaria (titular, saldoInicial) {
    this.titular = titular;
    this.saldoInicial = saldoInicial;
}

const cuenta = new CuentaBancaria('Tomas Ramos', 10000)
console.log(cuenta.saldoInicial)
Object.assign(CuentaBancaria.prototype, cuentaBancariaPrototype);