
// vår template för alla framtida objekt av Monster-klassen
class Monster {
    // egenskaper och metoder kan vara public eller private

    private name: string;  // egenskap, property = variabel inne i objekt
    private eyes: number;
    private tentacles: number;

    constructor(name: string, tentacles: number, eyes: number = 2) {
        // konstruktor = funktionen som körs när vi skriver new Monster
        this.name = name;
        this.tentacles = tentacles;
        this.eyes = eyes;
    }

    getName(): string {  // metod, method = funktion inne i ett objekt
        return this.name;
    }
    setName(newName: string): void {
        this.name = newName;
    }

    stare(): string {
        return this.name + " stares with " + this.eyes + " eyes.";
    }
    slap(): string {
        return this.name + " slaps you with " + this.tentacles + " tentacles.";
    }
}

const n = new Monster("Niklas", 4);
const s = new Monster("Stina", 12, 33);

console.log(n.getName());
console.log(s.getName());

console.log(s.slap());



// ============================================================================