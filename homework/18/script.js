class Car {
    constructor(brand) {
        this.brand = brand;
    }
}
 
class Mnacaty extends Car {
    constructor(brand, model, year, color) {
        super(brand); 
        this.model = model;
        this.year = year;
        this.color = color;
    }

    khosal() {
        console.log(`ays meqenan brandy ${this.brand} modely ${this.model} yuxy vren taza avtoya ${this.year} tiv guyny ${this.color}`);
    }
}

const p = new Mnacaty(`mercedes`, `cls 550`, `2025`, `sev`);
p.khosal();