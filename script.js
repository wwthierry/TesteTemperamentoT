document.addEventListener('DOMContentLoaded', function () {
    // Cada constante armazena o elemento correspondente
    const instructions = document.getElementById('instructions');
    const part1 = document.getElementById('part1');
    const part2 = document.getElementById('part2');
    const result = document.getElementById('result');
    const temperamentDetails = document.getElementById('temperament-details');

    // Remover classe 'hidden' para tornar o elemento visível
    instructions.classList.remove('hidden');

    // Evento ao usuário clicar no botão, as instruções são ocultadas e a primeira parte do conteúdo é exibida.
    document.getElementById('start-part1').addEventListener('click', function () {
        instructions.classList.add('hidden');
        part1.classList.remove('hidden');
    });

    // Ao clicar no botão 'submit-part1', verifica se todas as perguntas foram respondidas
    document.getElementById('submit-part1').addEventListener('click', function () {
        if (allQuestionAnswered(1, 19)) {
            part1.classList.add('hidden');
            part2.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            alert('Por favor, responda todas as perguntas antes de continuar.');
        }
    });

    // Ao clicar no botão 'submit-part2', verifica se todas as perguntas foram respondidas
    document.getElementById('submit-part2').addEventListener('click', function () {
        if (allQuestionAnswered(20, 32)) {
            part2.classList.add('hidden');
            result.classList.remove('hidden');
            showResult();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            alert('Por favor, responda todas as perguntas antes de continuar.');
        }
    });

    // Função para verificar se todas as perguntas foram respondidas
    function allQuestionAnswered(start, end) {
        for (let i = start; i <= end; i++) {
            if (!document.querySelector(`input[name="q${i}"]:checked`)) {
                return false;
            }
        }
        return true;
    }

    // Função para exibir o resultado com base nas respostas
    function showResult() {
        let countA1 = 0, countB1 = 0;
        let countA2 = 0, countB2 = 0;

        // Verifica as respostas da Primeira Parte
        for (let i = 1; i <= 19; i++) {
            let answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer && answer.value === 'A') {
                countA1++;
            } else if (answer && answer.value === 'B') {
                countB1++;
            }
        }

        // Verifica as respostas da Segunda Parte
        for (let i = 20; i <= 32; i++) {
            let answer = document.querySelector(`input[name="q${i}"]:checked`);
            if (answer && answer.value === 'A') {
                countA2++;
            } else if (answer && answer.value === 'B') {
                countB2++;
            }
        }
        // Determina o temperamento
        let temperament = '';

        if (countA1 > countB1 && countA2 > countB2) {
            temperament = "Sanguíneo";
        } else if (countA1 > countB1 && countB2 > countA2) {
            temperament = "Colérico";
        } else if (countB1 > countA1 && countA2 > countB2) {
            temperament = "Fleumático";
        } else if (countB1 > countA1 && countB2 > countA2) {
            temperament = "Melancólico";
        }

        // Exibe o resultado
        switch (temperament) {
            case 'Sanguíneo':
                temperamentDetails.innerHTML = '<h4>Você é Sanguíneo, Quente e Úmido</h4> <img src="naruto.jpg" class="temperament-img" alt="Sanguíneo"> <p id="tipos"> Extrovertido e envolvente, voltado para os relacionamentos interpessoais. É comunicativo, dinâmico e otimista. Suas emoções são intensas, mas as impressões são passageiras, o que faz com que mude de humor com bastante frequência e as expressões dessa mudança são muito intensas (quando está triste, está muito triste; quando feliz, muito feliz; quando com raiva, com muita raiva, etc). Não se apega ao passado e vive muito o presente, o que pode fazer com que busque prazeres instantâneos e momentâneos, por isso, precisa tomar cuidado com a superficialidade. Carismático, não falta assunto, faz aizades facilmente.</p>';
                break;
            case 'Colérico':
                temperamentDetails.innerHTML = '<h4>Colérico, Quente e Seco </h4> <img src="sasuke.jpg" class="temperament-img" alt="Colérico"> <p id="tipos">Muito prático, voltado para a execução e realização. Sua extroversão não é para relacionamentos, mas para a ação. Enérgico, determinado, com facilidade enorme para atingir metas e perseguir objetivos. Não se preocupa com o que pensam dele, o que importa é o que ele sabe sobre si. Cheio de opiniões e não tem medo de expô-las, considerado gênio forte. As impressões são duradouras nele e, por isso, as lembranças fazem com que ele reviva as emoções, tendo dificuldade em relevar. Gosta das coisas do seu jeito, por isso precisa cuidar para não ser controlador.</p>';
                break;
            case 'Melancólico':
                temperamentDetails.innerHTML = '<h4>Melancólico, Frio e Seco </h4> <img src="itachi.jpg" class="temperament-img" alt="Melancólico"> <p id="tipos">Introvertido, reflexivo e profundo, muito cauteloso em suas ações e planejado. É emocionalmente sensível, sendo afetado pelas circunstâncias por um longo período. Gosta de estabilidade, previsibilidade, ordem e compromisso. A lealdade é um de seus pontos mais fortes, além do forte senso de dever e propósito. Leva a vida com seriedade e possui valores e princípios muito fortes. Não gosta de mudanças não planejadas e, quando acontecem, costuma sofrer até que assimile a mudança. É idealista e perfeccionista, que são qualidades que devem ser observadas, pois em excesso, causam medo de agir, que leva à procrastinação ou à desistência.</p>';
                break;
            case 'Fleumático':
                temperamentDetails.innerHTML = '<h4>Fleumático, Frio e Úmido </h4> <img src="shikamaru.jpg" class="temperament-img" alt="Fleumático"> <p id="tipos">Introvertido, diplomático e de fácil convivência. Pode não apreciar mudanças abruptas, mas consegue se adaptar facilmente a diferentes cenários com muita facilidade. Possui grande estabilidade emocional, dificilmente atingindo picos de humor muito distintos em um único dia. Transmite serenidade em seu jeito de ser, ainda que não se sinta assim por dentro. As impressões também são passageiras nele, mas não significa que sua memória seja curta. A fácil adaptação deve ser observada para que não se torne em estagnação e inércia.</p>';
                break;
            default:
                temperamentDetails.innerHTML = '<h4>Temperamento não identificado.</h4>';
                break;
        }        
    }
});
