function sapaan(input: string | number): string {
    if (typeof input === "string") {
        return `Halo, ${input}`;
    } else {
        return `Umur: ${input} tahun`;
    }
}

console.log(sapaan("Khairunnisa"));
console.log(sapaan(20));