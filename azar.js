let button = document.getElementById("button");
let perguntar = document.getElementById("perguntar");
//including 10 affirmative answers: It is Certain. It is decidedly so. Without a doubt. Yes definitely. You may rely on it. As I see it, yes. Most likely. Outlook good. Yes. Signs point to yes.
//5 non-committal answers: Reply hazy, try again. Ask again later. Better not tell you now. Cannot predict now. Concentrate and ask again
//and 5 negative answers:Don't count on it. My reply is no. My sources say no. Outlook not so good. Very doubtful.
respostas = [
    "É certo", "É decididamente assim", "Sem duvida", "sim definitivamente", "Você pode contar com ele", "A meu ver, sim", "Provavelmente", "Parece bom", "Sim", "Sinais apontam que sim", "Resposta nebulosa, tente novamente", "Pergunte novamente mais tarde", "Melhor não te dizer agora", "Não posso prever agora", "Concentre-se e pergunte novamente", "Não conte com isso", "Minha resposta é não", "Minhas fontes dizem não", "perspectiva não é tão boa", "Muito duvidoso"
];
//usar o click igual no ultimo exrcico de rolar dados
    button.addEventListener("click", function() {
    let sortearResposta = 0;
    sortearResposta = Math.floor(Math.random() * 21);

    let resposta = document.getElementById("resposta");
    resposta.innerText = 'para sua pergunta a resposta é: ' + respostas[sortearResposta];
    resposta.style.textAlign = 'center';
    resposta.style.color = 'darkred';
    resposta.style.background = 'lightgray';
    resposta.style.marginBottom = '5px';
   })