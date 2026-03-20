var Carro = /** @class */ (function () {
    function Carro(marca, modelo) {
        this.ligado = false;
        this.marca = marca;
        this.modelo = modelo;
    }
    Carro.prototype.ligar = function () {
        this.ligado = true;
        console.log('$(this.marca) $(this.modelo) ligado.');
    };
    Carro.prototype.acelerar = function (velocidade) {
        if (!this.ligado) {
            console.log('$(this.marca) $(this.modelo) está desligado.');
            return;
        }
        console.log('$(this.marca) $(this.modelo) acelerando a $(velocidade) km/h.');
    };
    return Carro;
}());
