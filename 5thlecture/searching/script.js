const dataWilayah = [
    {
        provinsi: 'Jawa Timur',
        kabupaten: [
            {
                nama: 'Kota Surabaya',
                kecamatan: [
                    {
                        nama: 'Gubeng',
                        desa: [
                            { nama: 'Gubeng', kodepos: '60281' },
                            { nama: 'Kertajaya', kodepos: '60282' },
                            { nama: 'Airlangga', kodepos: '60286' }
                        ]
                    },
                    {
                        nama: 'Tambaksari',
                        desa: [ 
                            { nama: 'Pacar Keling', kodepos: '60131' },
                            { nama: 'Ploso', kodepos: '60133' }
                        ]
                    }
                ]
            },
            {
                nama: 'Kab. Sidoarjo',
                kecamatan: [
                    {
                        nama: 'Waru',
                        desa: [
                            { nama: 'Medaeng', kodepos: '61256' },
                            { nama: 'Waru', kodepos: '61256' }
                        ]
                    }
                ]
            }
        ]
    },
    {
        provinsi: 'Jawa Tengah',
        kabupaten: [
            {
                nama: 'Magelang',
                kecamatan: [
                    {
                        nama: 'Borobudur',
                        desa: [
                            { nama: 'Borobudur', kodepos: '56553' },
                        ]
                    }
                ]
            }
        ]
    },
    {
        provinsi: 'DKI Jakarta',
        kabupaten: [
            {
                nama: 'Kota Jakarta Selatan',
                kecamatan: [
                    {
                        nama: 'Kebayoran Baru',
                        desa: [
                            { nama: 'Senayan', kodepos: '12190' },
                            { nama: 'Gandaria Utara', kodepos: '12140' }
                        ]
                    }
                ]
            }
        ]
    }
];

const provinsiSelect = document.getElementById('provinsi');
const kabupatenSelect = document.getElementById('kabupaten');
const kecamatanSelect = document.getElementById('kecamatan');
const hasilContainer = document.getElementById('hasil-pencarian');

document.addEventListener('DOMContentLoaded', () => {
    dataWilayah.forEach(item => {
        const option = document.createElement('option');
        option.value = item.provinsi;
        option.textContent = item.provinsi;
        provinsiSelect.appendChild(option);
    });
});

provinsiSelect.addEventListener('change', () => {
    const selectedProvinsi = provinsiSelect.value;

    kabupatenSelect.innerHTML = '<option value="">Pilih kabupaten/kota dahulu</option>';
    kabupatenSelect.disabled = true;
    kecamatanSelect.innerHTML = '<option value="">Pilih kecamatan dahulu</option>';
    kecamatanSelect.disabled = true;
    hasilContainer.innerHTML = '';
    
    if (selectedProvinsi) {
        const provinsiData = dataWilayah.find(item => item.provinsi === selectedProvinsi);
        
        kabupatenSelect.innerHTML = '<option value="">-- Pilih Kabupaten/Kota --</option>';
        provinsiData.kabupaten.forEach(kab => {
            const option = document.createElement('option');
            option.value = kab.nama;
            option.textContent = kab.nama;
            kabupatenSelect.appendChild(option);
        });
        kabupatenSelect.disabled = false;
    }
});

kabupatenSelect.addEventListener('change', () => {
    const selectedProvinsi = provinsiSelect.value;
    const selectedKabupaten = kabupatenSelect.value;

    kecamatanSelect.innerHTML = '<option value="">Pilih kecamatan dahulu</option>';
    kecamatanSelect.disabled = true;
    hasilContainer.innerHTML = '';
    
    if (selectedKabupaten) {
        const provinsiData = dataWilayah.find(item => item.provinsi === selectedProvinsi);
        const kabupatenData = provinsiData.kabupaten.find(kab => kab.nama === selectedKabupaten);
        
        kecamatanSelect.innerHTML = '<option value="">-- Pilih Kecamatan --</option>';
        kabupatenData.kecamatan.forEach(kec => {
            const option = document.createElement('option');
            option.value = kec.nama;
            option.textContent = kec.nama;
            kecamatanSelect.appendChild(option);
        });
        kecamatanSelect.disabled = false;
    }
});

kecamatanSelect.addEventListener('change', () => {
    const selectedProvinsi = provinsiSelect.value;
    const selectedKabupaten = kabupatenSelect.value;
    const selectedKecamatan = kecamatanSelect.value;
    
    hasilContainer.innerHTML = '';

    if (selectedKecamatan) {
        const provinsiData = dataWilayah.find(item => item.provinsi === selectedProvinsi);
        const kabupatenData = provinsiData.kabupaten.find(kab => kab.nama === selectedKabupaten);
        const kecamatanData = kabupatenData.kecamatan.find(kec => kec.nama === selectedKecamatan);

        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Kelurahan / Desa</th>
                        <th>Kode Pos</th>
                    </tr>
                </thead>
                <tbody>
        `;
        kecamatanData.desa.forEach(desa => {
            tableHTML += `
                <tr>
                    <td>${desa.nama}</td>
                    <td>${desa.kodepos}</td>
                </tr>
            `;
        });
        tableHTML += '</tbody></table>';
        hasilContainer.innerHTML = tableHTML;
    }
});