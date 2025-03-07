//DECLARAÇÃO DAS REGIÕES
//centro
let sedeInsular = [0,0,1,0];

//continente
let sedeContinental = [0,0,0,0,0,0,0,0];

//sul
let ribeirao,pantanoSul,campeche = [];
ribeirao = [1,1,1,0];
pantanoSul = [1,1,1,0,1,1,1];
campeche = [1,0,1,1,1,1];

//leste
let lagoa, barraLagoa, rioVermelho = [];
lagoa = [1,0,0,1,1,1,1,1,0,0,1];
barraLagoa = [1,1];
rioVermelho = [1];

//norte
let canasvieiras, cachoeira, ingleses, santoAntonio, ratones = [];
canasvieiras = [1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1];
cachoeira = [1,1,1,0,0,1,1,1,1,1,1,0];
ingleses = [1,1,1,1,1,1,1];
santoAntonio = [0,0,0,1,0,1];
ratones = [];

//geral
let centro = [sedeInsular];
let continente = [sedeContinental];
let norte = [canasvieiras, cachoeira, ingleses, santoAntonio, ratones];
let leste = [lagoa, barraLagoa, rioVermelho];
let sul = [ribeirao,pantanoSul,campeche];

//calcularRegiao(centro);
//calcularRegiao(norte);
// mudarCor();



/* Método para calcular o total de pontos balneáveis e o total de pontos de uma região;
    generalizado para receber o array da região como parâmetro, 
        podendo ser usado em todas conforme chamada;
    percorre cada distrito da região com loops encadeados
        soma o valor do ponto no total de balneabilidade
        e conta os pontos percorridos;
*/
function calcularRegiao(regiao){
    let totalBalneavel = 0;
    let totalPontos = 0;
    for (let i=0; i < regiao.length; i++){ //percorre a região para acessar os distritos
        console.log('lista '+i)
        for (let j=0; j < regiao[i].length; j++){ //percorre um distrito
            console.log('item '+j);
            totalBalneavel += regiao[i][j];
            console.log(regiao[i][j]);
            totalPontos++;
        }
    }
    console.log("Balneabilidade da região: " +totalBalneavel+'/'+totalPontos );
    let resultado = totalBalneavel / totalPontos;
    return resultado; //proporção em porcentagem decimal
}


function calcularDistrito(distrito){
    let totalBalneavel = 0;
    let totalPontos = 0;

    for (let j=0; j < distrito.length; j++){
        console.log('item '+j);
        totalBalneavel += distrito[j];
        console.log(distrito[j]);
        totalPontos++; 
    }
    console.log("Balneabilidade do distrito: " +totalBalneavel+'/'+totalPontos );
    let resultado = totalBalneavel / totalPontos;
    return resultado;
}

function selecionarCor(regiao){
    let balneabilidade = calcularRegiao(regiao);

    if (balneabilidade < 0.1){
        return "var(--cor10)";
    } else if (balneabilidade < 0.2) {
        return "var(--cor20)";
    } else if (balneabilidade < 0.3) {
        return "var(--cor30)";
    } else if (balneabilidade < 0.4) {
        return "var(--cor40)";
    } else if (balneabilidade < 0.5) {
        return "var(--cor50)";
    } else if (balneabilidade < 0.6) {
        return "var(--cor60)";
    } else if (balneabilidade < 0.7) {
        return "var(--cor70)";
    } else if (balneabilidade < 0.8) {
        return "var(--cor80)";
    } else if (balneabilidade < 0.9) {
        return "var(--cor90)";
    } else {
        return "var(--cor100)";
    }
}

function selecionarCorDistrito(distrito){
    let balneabilidade = calcularDistrito(distrito);

    if (balneabilidade < 0.1){
        return "var(--cor10)";
    } else if (balneabilidade < 0.2) {
        return "var(--cor20)";
    } else if (balneabilidade < 0.3) {
        return "var(--cor30)";
    } else if (balneabilidade < 0.4) {
        return "var(--cor40)";
    } else if (balneabilidade < 0.5) {
        return "var(--cor50)";
    } else if (balneabilidade < 0.6) {
        return "var(--cor60)";
    } else if (balneabilidade < 0.7) {
        return "var(--cor70)";
    } else if (balneabilidade < 0.8) {
        return "var(--cor80)";
    } else if (balneabilidade < 0.9) {
        return "var(--cor90)";
    } else {
        return "var(--cor100)";
    }
}


function mudarCores(){
    let seletor, corAtual;

    // Região Norte
    // norte = [canasvieiras, cachoeira, ingleses, santoAntonio, ratones];
    console.log("calculando distrito Canasvieiras");
    seletor = document.querySelectorAll("#canasvieiras");
        corAtual = selecionarCorDistrito(norte[0]);
        for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
        }
    seletor = document.querySelectorAll("#cachoeira");
        corAtual = selecionarCorDistrito(norte[1]);
        for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual);
        }
    seletor = document.querySelectorAll("#ingleses");
        corAtual = selecionarCorDistrito(norte[2]);
        for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
        }
    seletor = document.querySelectorAll("#santoAntonio");
        corAtual = selecionarCorDistrito(norte[3]);
        for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
        }
    //Ratones não aplica, porque não tem praia
    /* 
    seletor = document.querySelectorAll("#ratones");
        corAtual = selecionarCorDistrito(norte[4]);
        for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
        }
    */


    // Região Leste
    // leste = [lagoa, barraLagoa, rioVermelho];
    console.log("calculando distrito Lagoa da Conceicao");
    seletor = document.querySelectorAll("#lagoaConceicao");
        corAtual = selecionarCorDistrito(leste[0]);
        for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
        }
    console.log("calculando distrito Barra da Lagoa");
    seletor = document.querySelectorAll("#barraLagoa");
        corAtual = selecionarCorDistrito(leste[1]);
        for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
        }
    console.log("calculando distrito Rio Vermelho");
    seletor = document.querySelectorAll("#rioVermelho");
        corAtual = selecionarCorDistrito(leste[2]);
        for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
        }

    // Região Sul
    console.log("calculando distrito Campeche");
    seletor = document.querySelectorAll("#campeche");
        corAtual = selecionarCorDistrito(sul[2]);
        for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
        }
    console.log("calculando distrito Pantano do Sul");
    seletor = document.querySelectorAll("#pantanoSul");
        corAtual = selecionarCorDistrito(sul[1]);
        for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
        }
    console.log("calculando distrito Ribeirao");
    seletor = document.querySelectorAll("#ribeirao");
        corAtual = selecionarCorDistrito(sul[0]);
        for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
        }

    // Região Centro
    console.log("calculando região Centro");
    seletor = document.querySelectorAll(".centro");
    corAtual = selecionarCor(centro);
    for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
    }

    //Região Continente
    console.log("calculando região Continente");
    seletor = document.querySelectorAll(".continente");
    corAtual = selecionarCor(continente);
    for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
    }
}

function mudarCoresPorRegiao(){
    let seletor, corAtual;

    console.log("calculando região Norte");
    seletor = document.querySelectorAll(".norte");
    corAtual = selecionarCor(norte);
    for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
    }

    seletor = document.querySelectorAll(".sul");
    corAtual = selecionarCor(sul);
    for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
    }

    console.log("calculando região Centro");
    seletor = document.querySelectorAll(".centro");
    corAtual = selecionarCor(centro);
    for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
    }

    console.log("calculando região Leste");
    seletor = document.querySelectorAll(".leste");
    corAtual = selecionarCor(leste);
    for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
    }

    console.log("calculando região Continente");
    seletor = document.querySelectorAll(".continente");
    corAtual = selecionarCor(continente);
    for (var i = 0; i < seletor.length;  i++) {
        seletor[i].setAttribute("fill", corAtual) ;
    }
}
