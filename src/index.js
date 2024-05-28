// Variáveis

let nome = "Silvia";
let nivel = 2;
let descricao = ""

// Estrutura de repetição;

 switch (nivel>=0)
 {
    case (nivel<=1000):
        console.log ("Ferro");
        descricao = "FERRO";
        break;
    case (nivel>=1000 && nivel<=2000):
        console.log ("Bronze");
        descricao = "BRONZE";
        break;
    case (nivel>=200 && nivel<=5000):
        console.log ("Prata");
        descricao = "PRATA";
        break;
    case (nivel>=5001 && nivel<=7000):
        console.log ("Ouro");
        descricao = "OURO";
        break;
    case (nivel>=7001 && nivel<=8000):
        console.log ("Platina");
        descricao = "PLATINA";
        break;
    case (nivel>=8001 && nivel<=9000):
        console.log ("Ascendente");
        descricao = "ASCENDENTE";
        break;
    case (nivel>=9001 && nivel<=10000):
        console.log ("Imortal");
        descricao = "IMORTAL";
        break;
    case (nivel>=10001):
            console.log ("Radiante");
            descricao = "RADIANTE";
            break;
    
    default: ("Favor inserir numeros maior que zero");
}
console.log ("O Herói de nome: " + nome + ", está no nível de: " +descricao);