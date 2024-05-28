let nome = "silvia";
let nivel = 0;
 switch (nivel)
 {
    case (nivel<=1000):
        console.log ("Ferro");
        break;
    case (nivel>1000) && (nive<=2000):
        console.log ("Bronze");
        break;
    case (nivel>=2001) && (nivel<=5000):
        console.log ("Prata");
        break;
    case (nivel>=5001) && (nivel<=7000):
        console.log ("Ouro");
        break;
    case (nivel>=7001) && (nivel<=8000):
        console.log ("Platina");
        break;
    case (nivel>=8001) && (nivel<=9000):
        console.log ("Ascendente");
        break;
    case (nivel>=9001) && (nivel<=10000):
        console.log ("Imortal");
        break;
    case (nivel>=10001):
            console.log ("Radiante");
            break;
    console.log ("O Herói de nome " (nome) + "está no nível de " (nivel));
    default: ("Favor inserir apenas numeros");
}