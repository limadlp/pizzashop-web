function toBRCurrency(this: number): string{
    return this.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
}

declare global {
    interface Number {
        toBRCurrency(): string;
    }
}

Number.prototype.toBRCurrency = toBRCurrency;
