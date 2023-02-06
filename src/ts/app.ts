
// vår template för alla framtida objekt av Monster-klassen
class Monster {
    private name: string;  // egenskap, property = variabel inne i objekt

    constructor(name: string) {  // konstruktor = funktionen som körs när vi skriver new Monster
        this.name = name;
    }

    getName(): string {  // metod, method = funktion inne i ett objekt
        return this.name;
    }
}

const n = new Monster("Niklas");
const s = new Monster("Stina");

console.log(n.getName());
console.log(s.getName());

