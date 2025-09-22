const brand = document.getElementById("merk");
const device = document.getElementById("device");
const series = document.getElementById("seri");

const data = {
    "Apple": {
        "Laptop": ["Air M1", "M1 Pro"],
        "Handphone": ["17 Air", "17 Pro Max"]
    },
    "Samsung": {
        "Handphone": ["S24FE", "S24 Ultra"],
        "Accesories": ["Galaxy Watch", "Galaxy Buds"]
    },
    "Xiaomi": {
        "Handphone": ["15T", "15 Ultra"],
        "Tablet": ["Poco Pad", "Redmi Pad"]
    }
};

for (let p in data) {
    brand.add(new Option(p, p));
}

brand.onchange = function() {
    device.length = 1; 
    series.length = 1;
    device.disabled = true;
    series.disabled = true;

    if (this.value !== "") {
        device.disabled = false;
        for (let k in data[this.value]) {
        device.add(new Option(k, k));
        }
    }
};

    device.onchange = function() {
    series.length = 1;
    series.disabled = true;

    const prov = brand.value;
    if (this.value !== "") {
        series.disabled = false;
        data[prov][this.value].forEach(kec => {
        series.add(new Option(kec, kec));
        });
    }
};
