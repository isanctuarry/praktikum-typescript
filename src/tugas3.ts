class Lingkaran {
    jariJari: number;

    constructor(jariJari: number) {
        this.jariJari = jariJari;
    }
    
    hitungLuas(): number {
        return Math.PI * Math.pow(this.jariJari, 2);
    }
}

const lingkaran1 = new Lingkaran(6);
console.log(`Luas Lingkaran dengan jari-jari ${lingkaran1.jariJari} adalah ${lingkaran1.hitungLuas().toFixed(2)}`);