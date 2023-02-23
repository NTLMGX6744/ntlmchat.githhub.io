const messageList = document.querySelector('.message-list');
const messageInput = document.querySelector('#message-input');
const sendButton = document.querySelector('#send-button');

// Function to add a new message to the message list
function addMessage(message, sender) {
    const li = document.createElement('li');
    li.classList.add('message', sender);
    li.textContent = message;
    messageList.appendChild(li);
    messageList.scrollTop = messageList.scrollHeight;
}

// Function to send a new message
function sendMessage() {
    const message = messageInput.value;
    if (message.trim() === '') {
        return;
    }
    addMessage(message, 'sent');
    messageInput.value = '';
    // Code to send the message to the server or other users
}

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
