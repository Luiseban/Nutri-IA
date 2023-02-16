// Carga la API de OpenAI
const openai = require('openai')('API_KEY_GOES_HERE');

// Defina una función para enviar mensajes al chatbot de ChatGPT
function sendMessageToChatGPT(message) {
  // Configure el formato de entrada para OpenAI
  const input = {
    prompt: message,
    temperature: 0.5,
    max_tokens: 60,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  // Use OpenAI para generar una respuesta
  openai.complete('model-id-goes-here', input)
    .then((response) => {
      // Envía la respuesta generada por OpenAI al usuario
      const chatbotResponse = response.choices[0].text;
      console.log(`ChatGPT Nutritionist: ${chatbotResponse}`);
      // Usa un método para enviar la respuesta al usuario
    })
    .catch((error) => {
      console.log(error);
      // Maneja el error
    });
}

// Escucha los mensajes entrantes del usuario
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Verifica si el mensaje es del contenido de la página
  if (sender.tab) {
    // Envía el mensaje al chatbot de ChatGPT
    sendMessageToChatGPT(request.message);
  }
});
