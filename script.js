const parfum = [
    {
        nama: "Chanel Coco Mademoiselle",
        negara: "Prancis 🇫🇷",
        harga: "Rp3.200.000",
        detail: "Aroma citrus dan floral yang segar, elegan, serta memberikan kesan mewah."
    },
    {
        nama: "Dior Sauvage Elixir",
        negara: "Prancis 🇫🇷",
        harga: "Rp4.500.000",
        detail: "Aroma spicy dan woody yang kuat dengan karakter hangat dan berkelas."
    },
    {
        nama: "Tom Ford Oud Wood",
        negara: "Amerika Serikat 🇺🇸",
        harga: "Rp5.500.000",
        detail: "Perpaduan oud, rempah, dan kayu dengan aroma hangat serta eksklusif."
    },
    {
        nama: "Creed Aventus",
        negara: "Prancis 🇫🇷",
        harga: "Rp8.000.000",
        detail: "Aroma fruity dan woody yang segar dengan karakter kuat dan elegan."
    },
    {
        nama: "Louis Vuitton Imagination",
        negara: "Prancis 🇫🇷",
        harga: "Rp6.500.000",
        detail: "Perpaduan citrus, black tea, dan amber yang memberikan aroma fresh dan modern."
    },
    {
        nama: "Parfums de Marly Delina Exclusif",
        negara: "Prancis 🇫🇷",
        harga: "Rp5.800.000",
        detail: "Aroma rose, buah, dan vanilla yang manis, lembut, serta mewah."
    },
    {
        nama: "Maison Francis Kurkdjian Baccarat Rouge 540",
        negara: "Prancis 🇫🇷",
        harga: "Rp6.000.000",
        detail: "Aroma floral, amber, dan woody yang khas dengan kesan hangat dan elegan."
    },
    {
        nama: "Kilian Angels' Share",
        negara: "Prancis 🇫🇷",
        harga: "Rp5.500.000",
        detail: "Aroma manis dan hangat dengan perpaduan cinnamon, vanilla, dan woody notes."
    },
    {
        nama: "Jo Malone Myrrh & Tonka Cologne Intense",
        negara: "Inggris 🇬🇧",
        harga: "Rp3.500.000",
        detail: "Aroma myrrh dan tonka bean yang hangat, lembut, dan memberikan kesan elegan."
    }
];

function lihatDetail(index) {
    document.getElementById("nama").innerText = parfum[index].nama;
    document.getElementById("negara").innerText = "Negara: " + parfum[index].negara;
    document.getElementById("harga").innerText = parfum[index].harga;
    document.getElementById("detail").innerText = parfum[index].detail;

    document.getElementById("popup").style.display = "flex";
}

function tutupDetail() {
    document.getElementById("popup").style.display = "none";
}