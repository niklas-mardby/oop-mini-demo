
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

class MyView {
    // egenskaper kan vara HTML-element
    private section: HTMLElement;

    constructor() {
        this.section = document.querySelector("section") as HTMLElement;
    }

    // metoder kan vara DOM-manipulation
    addCard(s: string): void {
        this.section.innerHTML += `<p>${s}</p>`;

        // const p = document.createElement("p");
        // this.section.append(p);
        // kör med create om du ska ha klasser, lyssnare mm på ditt element
    }
}

class MyModel {
    // model = data, API

    // egenskaper kan vara url, json-svar

    // metoder kan vara fetch (trolla med json-svar)
}

// vi kan lägga control i koden i global istf ett geget objekt (förenkling)
class MyControl {
    // control = styrning mot model och view

    // egenskaper

    // metoder kan vara mellanhanden mellan view och model,
    // exvis säga till model att göra fetch, ta emot json, skicka ngt till view
    // trolla med json-svar
}

const myView = new MyView();
myView.addCard("kebab");
myView.addCard("pizza");
myView.addCard("pasta");

