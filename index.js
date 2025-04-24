let elever = [
    {
        fornavn: "Nicolai",
        etternavn: "Bratberg",
        tlf: {
                privat: "458 35 844",
                jobb: "101 10 010"
            },
        stilling: "elev",
        informasjon: "Nicolai Bratberg er en søt gutt med mye personlighet.",
        bilde: "./Bilder/Nicolai.jpg"
    },
    {
        fornavn: "Eik",
        etternavn: "Dedekam-Simonsen",
        tlf: {
                privat: "901 77 083",
                jobb: "101 01 011"
            },
        stilling: "elev",
        informasjon: "Eik er ekstremt rik, men tror at han ikke er det. Steiner.",
        bilde: "https://kimdedekamsimonsen.weebly.com/uploads/2/4/7/4/24744488/3298171.jpg"
    },
    {
        fornavn: "Simen",
        etternavn: "Heien",
        tlf: {
                privat: "415 42 022",
                jobb: "011 10 101"
            },
        stilling: "sjef",
        informasjon: "Beste eleven på alle mulige måter, kommer fra stedet Gud valgte som sin personlige favorittplass: Klokkarstua. Har en sterk 0,02 mål per kamp registrert.",
        bilde: "./Bilder/Simen.jpg"
    },
    {
        fornavn: "Andy",
        etternavn: "Nguyen",
        tlf: {
                privat: "401 91 278",
                jobb: "101 01 010"
            },
        stilling: "Weeb",
        informasjon: "\"Hei, jeg heter Andy, jeg er gamer.\" Andy tror han er kul og mystisk, men er virkelig ikke det",
        bilde: "./Bilder/Andy.jpg"
    },
    {
        fornavn: "Kais",
        etternavn: "Gharz-Eddin",
        tlf: {
                privat: "973 17 278",
                jobb: "011 11 001"     
            },
        stilling: "Elevråd",
        informasjon: "Aktiv kar, dommer, hater å sitte stille. Er i elevrådet, har det fint der.",
        bilde: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIj9ASJtRn93dCwJe1bVLvPEWSLoDeGF0Q5w&s"
    }
];

document.getElementById("knappSok").addEventListener("click", function () {
    let listeLength = elever.length;
    let sok = document.getElementById("sok").value.toLowerCase();
    sok = sok.split("")
    sok[0] = sok[0].toUpperCase();
    sok = sok.join("")
    for (let i = 0; i < listeLength; i++) {
        if (elever[i].fornavn == sok) {
            document.getElementById("h2Output").innerHTML = elever[i].fornavn + " " + elever[i].etternavn
            document.getElementById("bildeOutput").src = elever[i].bilde
            document.getElementById("pOutput1").innerHTML = "Privat-telefon: " + elever[i].tlf.privat + "<br>Jobb-telefon: " + elever[i].tlf.jobb
            document.getElementById("pOutput2").innerHTML = elever[i].informasjon + "<br>Stilling: " + elever[i].stilling
        }
    }
})