const referenceName = [
    "Alexander Djojohadikusumo",
    "Bella Graceva",
    "Chris Subiakto",
    "Daniel Adriansyah",
    "Emily Wijaya",
    "Ferdinand Salim",
    "Grace Natalia",
    "Harris Vriza",
    "Isabella Santoso",
    "Jonathan Prasetyo",
    "Kevin Sanjaya",
    "Laura Basuki",
    "Michael Tirtayasa",
    "Nadya Hutagalung",
    "Oliver Sugiarto",
    "Patricia Gunawan",
    "Richard Sambera",
    "Samantha Siregar",
    "Thomas Djuwari",
    "Valerie Krasnadewi"
];

const namelist = document.getElementById('nama-list');

referenceName.forEach(nama => {
    const option = document.createElement('option');
    option.value = nama;
    namelist.appendChild(option);
});