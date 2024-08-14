function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === "") return;

    // Mostrar el mensaje del usuario
    const userMessage = document.createElement('div');
    userMessage.className = 'chat-message user';
    userMessage.textContent = userInput;
    document.getElementById('chat-box').appendChild(userMessage);

    // Respuesta del bot
    const botMessage = document.createElement('div');
    botMessage.className = 'chat-message bot';
    
    botMessage.textContent = getBotResponse(userInput.toLowerCase());
    document.getElementById('chat-box').appendChild(botMessage);

    // Limpiar el input y hacer scroll hacia abajo
    document.getElementById('user-input').value = "";
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

function getBotResponse(input) {
    // Corrección de faltas de ortografía comunes
    const correcciones = {
        "kinisiología": "kinesiología",
        "kinesiólogía": "kinesiología",
        "kinesioligia": "kinesiología",
        "kinisiologia": "kinesiología",
        "kinesiologuía": "kinesiología",
        "kinesiologia": "kinesiología",
        "kenesiologia": "kinesiología",
        "quinesiología": "kinesiología",
        "kenisiologia": "kinesiología",
        "kinesiólogo": "kinesiólogo",
        "kinisiologo": "kinesiólogo",
        "kenesiologo": "kinesiólogo",
        "quinesiologo": "kinesiólogo",
        "kinesiologos": "kinesiólogos",
        "kinisiologos": "kinesiólogos",
        "kenesiologos": "kinesiólogos",
        "quinesiologos": "kinesiólogos",
        "musculoesquelético": "musculoesquelético",
        "musculo esquelético": "musculoesquelético",
        "musculo-esqueletico": "musculoesquelético",
        "musculoesqueletico": "musculoesquelético",
        "musculoesqueletica": "musculoesquelética",
        "musculoesqueléticas": "musculoesqueléticas",
        "musculoesqueleticas": "musculoesqueléticas",
        "respiratoria": "respiratoria",
        "resporatoria": "respiratoria",
        "geriatría": "geriatría",
        "geriatria": "geriatría",
        "geriatrico": "geriátrico",
        "oncología": "oncología",
        "oncológica": "oncológica",
        "rehabilitación": "rehabilitación",
        "reabilitación": "rehabilitación",
        "reabilitacion": "rehabilitación"
    };

    // Aplicar correcciones ortográficas
    input = correcciones[input] || input;

    // Palabras clave y respuestas
    const respuestas = {
        "hola": "¡Hola! ¿En qué puedo ayudarte hoy con respecto a la kinesiología?",
        "kinesiología": "La kinesiología es una disciplina que estudia el movimiento humano y su relación con la salud. Es utilizada en la rehabilitación, prevención y tratamiento de diferentes condiciones físicas.",
        "enfermedades": "La kinesiología puede ayudar en el tratamiento de enfermedades como la artritis, lesiones deportivas, problemas respiratorios, y más.",
        "rehabilitación": "La rehabilitación kinesiológica es clave en la recuperación de pacientes tras cirugías o lesiones, ayudándolos a recuperar la movilidad y función.",
        "mundial": "En todo el mundo, la kinesiología es reconocida como una parte fundamental del tratamiento y la rehabilitación física.",
        "kinesiólogo": "Un kinesiólogo es un profesional especializado en el estudio y tratamiento del movimiento humano. Ellos trabajan en rehabilitación, prevención y mejora de la movilidad.",
        "respiratoria": "La kinesiología respiratoria se enfoca en mejorar la función pulmonar y ayudar a las personas con problemas respiratorios a respirar más fácilmente.",
        "deportiva": "La kinesiología deportiva se centra en la prevención y rehabilitación de lesiones relacionadas con la actividad física y el deporte.",
        "musculoesquelético": "La kinesiología musculoesquelética trata afecciones que afectan los músculos, huesos y articulaciones, ayudando a mejorar la movilidad y reducir el dolor.",
        "geriatría": "La kinesiología geriátrica se especializa en el tratamiento de adultos mayores, enfocándose en la prevención de caídas, mejora de la movilidad y calidad de vida.",
        "oncología": "La kinesiología oncológica apoya a los pacientes con cáncer en la recuperación de su movilidad, fuerza y bienestar durante y después del tratamiento.",
        "neuro kinesiología": "La neuro kinesiología se enfoca en el tratamiento de personas con trastornos neurológicos, mejorando su movilidad y función.",
        "kinesiología infantil": "La kinesiología infantil aborda el desarrollo motor y el tratamiento de condiciones físicas en niños, apoyando su crecimiento y desarrollo.",
        "dolor de espalda": "El dolor de espalda es una de las condiciones más comunes tratadas por los kinesiólogos. Ellos utilizan ejercicios y técnicas para aliviar el dolor y mejorar la postura.",
        "postura": "La corrección de la postura es un área importante de la kinesiología, ya que ayuda a prevenir lesiones y dolores crónicos.",
        "tratamiento de lesiones": "La kinesiología es fundamental en el tratamiento de lesiones, utilizando técnicas de terapia manual, ejercicios y rehabilitación funcional.",
        "ejercicios de rehabilitación": "Los ejercicios de rehabilitación son diseñados por kinesiólogos para recuperar la función y movilidad después de una lesión o cirugía.",
        "terapia manual": "La terapia manual es una técnica utilizada por los kinesiólogos para movilizar las articulaciones y tejidos blandos, aliviando el dolor y mejorando la movilidad.",
        "prevención de lesiones": "La prevención de lesiones es clave en la kinesiología, donde se enseña a los pacientes a fortalecer su cuerpo y mejorar la biomecánica para evitar daños.",
        "fisioterapia": "Aunque la fisioterapia y la kinesiología comparten objetivos similares, la kinesiología se centra más en el estudio del movimiento humano y la fisioterapia en el tratamiento de lesiones.",
        "fisio": "Aunque la fisioterapia y la kinesiología comparten objetivos similares, la kinesiología se centra más en el estudio del movimiento humano y la fisioterapia en el tratamiento de lesiones.",
        "adiós": "¡Hasta luego! No dudes en volver si tienes más preguntas sobre kinesiología."
    };

    // Buscar coincidencias de palabras clave en la entrada del usuario
    for (const clave in respuestas) {
        if (input.includes(clave)) {
            return respuestas[clave];
        }
    }

    return "Lo siento, no entendí tu pregunta. ¿Podrías reformularla o preguntar algo más específico sobre kinesiología?";
}
