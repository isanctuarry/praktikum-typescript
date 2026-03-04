interface Buku {
    judul: string;
    pengarang: string;
    tahunTerbit: number;
    tersedia: boolean;
}

function cetakBuku (bk: Buku): void {
    console.log(`${bk.judul}`);
    console.log(`${bk.pengarang}`);
    console.log(`${bk.tahunTerbit}`);
    console.log(`${bk.tersedia}`);
    }

const dataBuku: Buku = {
    judul: "THE MASTER OF BALLANTRAE: A WINTER'S TALE",
    pengarang: "Robert Louis Stevenson",
    tahunTerbit: 1989,
    tersedia: true,
}

cetakBuku(dataBuku);