class Heroi {

    nome;
    idade;
    tipo;
    
    atacar() {
        let ataque = "";
        
        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        }
        
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}


let heroi1 = new Heroi();
heroi1.nome = "Aragorn";
heroi1.idade = 35;
heroi1.tipo = "guerreiro";

let heroi2 = new Heroi();
heroi2.nome = "Gandalf";
heroi2.idade = 200;
heroi2.tipo = "mago";

// 7️⃣ Fazendo os heróis atacarem!
console.log("=== BATALHA COMEÇOU ===");
heroi1.atacar(); // guerreiro atacou usando espada
heroi2.atacar(); // mago atacou usando magia