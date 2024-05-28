// Variáveis

let nome = "Silvia";
let nivel = 10000;
let descricao = ""

// Estrutura de repetição;

 switch (nivel>=0)
 {
    case (nivel<=1000):
        
        descricao = "FERRO";
        break;
    case (nivel>=1000 && nivel<=2000):
       
        descricao = "BRONZE";
        break;
    case (nivel>=200 && nivel<=5000):
        
        descricao = "PRATA";
        break;
    case (nivel>=5001 && nivel<=7000):
        
        descricao = "OURO";
        break;
    case (nivel>=7001 && nivel<=8000):
        
        descricao = "PLATINA";
        break;
    case (nivel>=8001 && nivel<=9000):
        
        descricao = "ASCENDENTE";
        break;
    case (nivel>=9001 && nivel<=10000):
        
        descricao = "IMORTAL";
        break;
    case (nivel>=10001):
            
        descricao = "RADIANTE";
        break;
}
// Mensagem final
console.log ("O Herói de nome: " + nome + ", está no nível de: " +descricao);