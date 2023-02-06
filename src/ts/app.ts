
// vår template för alla framtida objekt av Monster-klassen
class Monster {
    // egenskaper och metoder kan vara public eller private

    private name: string;  // egenskap, property = variabel inne i objekt
    // fler egenskaper??

    constructor(name: string) {  // konstruktor = funktionen som körs när vi skriver new Monster
        this.name = name;
    }

    getName(): string {  // metod, method = funktion inne i ett objekt
        return this.name;
    }
    setName(newName: string): void {
        this.name = newName;
    }
    // fler metoder??
}

const n = new Monster("Niklas");
const s = new Monster("Stina");

console.log(n.getName());
console.log(s.getName());

