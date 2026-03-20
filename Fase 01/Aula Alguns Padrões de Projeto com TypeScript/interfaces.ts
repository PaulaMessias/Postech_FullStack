interface Veiculo {
  marca: string;
  modelo: string;

  ligar(): void;
  acelerar (velocidade: number): void;
}

class Carro implements Veiculo {
  marca: string;
  modelo: string;
  private ligado: boolean = false;

  constructor(marca: string, modelo: string) {
    this.marca = marca;
    this.modelo = modelo;
  }

  ligar(): void {
    this.ligado = true;
    console.log('$(this.marca) $(this.modelo) ligado.');

  }
  acelerar(velocidade: number): void {
      if (!this.ligado) {
        console.log('$(this.marca) $(this.modelo) está desligado.');
        return;
      }
      console.log('$(this.marca) $(this.modelo) acelerando a $(velocidade) km/h.');
  }
}