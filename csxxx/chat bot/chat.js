const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Define the chatbot's responses
const responses = {
  "hello": "Hi there!",
  "how are you": "I'm doing well, thank you!",
  "what is your name": "My name is Chatbot.",
  "hello their":"hii my name is chatter",
  "default": "I'm sorry, I don't understand. Can you please rephrase your question?"

};

// Function to generate the chatbot's response
function getResponse(userText) {
  // Convert the user's input to lowercase
  const input = userText.toLowerCase();
  
  // Check if the input matches any of the responses
  if (input in responses) {
    return responses[input];
  } else {
    return responses["default"];
  }
}

// Function to display the chatbot's response
function displayResponse(response) {
  // Create a new chat bubble with the response text
  const chatBubble = document.createElement('div');
  chatBubble.classList.add('chat-bubble');
  chatBubble.innerHTML = response;
  
  // Append the chat bubble to the chat container
  chatContainer.appendChild(chatBubble);
  
  // Clear the user input field
  userInput.value = '';
}

// Event listener for the send button
sendButton.addEventListener('click', () => {
  const userText = userInput.value;
  const response = getResponse(userText);
  displayResponse(response);
});

// Event listener for the user pressing Enter
userInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    const userText = userInput.value;
    const response = getResponse(userText);
    displayResponse(response);
  }
});
