const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

function displayMessage(message, isUser = false) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add(isUser ? "user" : "bot");
  messageDiv.innerText = message;
  chatbox.appendChild(messageDiv);

}

function sendMessage() {
  const userMessage = userInput.value;
  displayMessage(userMessage, true);

  // Bot logic
  const botResponse = getBotResponse(userMessage);
  displayMessage(botResponse, false);
  userInput.value = "";
}

// Load chat history from local storage when the page loads
window.addEventListener('load', function () {
    chatHistory.forEach((chat) => {
      displayMessage(chat.message, chat.isUser);
    });
  
    // Clear the input field when the page loads
    userInput.value = '';
});
function getBotResponse(userMessage) {
  userMessage = userMessage.toLowerCase();

  if (userMessage.includes("hello") || userMessage.includes("hi")) {
    return "Hello there!";
  } else if (userMessage.includes("how are you")) {
    return "I'm just a bot, but thanks for asking!";
  } else if (userMessage.includes("what is your name")) {
    return "'I'm a chatbot.";
  } else if (userMessage.includes("who created you")) {
    return "'I'm created by DHRUV VERMA. He is a Full Stack Developer"; 
  } else if (userMessage.includes("your favorite hobby")) {
    return "I enjoy helping and chatting with people.";
  } else if (userMessage.includes("your favorite movie")) {
    return "I have too many to choose from!";
  } else if (userMessage.includes("your favorite book")) {
    return "I love all kinds of books.";
  } else if (userMessage.includes("your favorite food")) {
    return "I don’t eat, but I hear pizza is amazing!";
  } else if (userMessage.includes("how do you stay healthy")) {
    return "I don’t need to worry about health, but I recommend a balanced diet and exercise.";
  } else if (userMessage.includes("your favorite place to travel to")) {
    return "I’d love to explore the world!";
  } else if (userMessage.includes("recommend a good restaurant")) {
    return "Sure, what type of cuisine are you in the mood for?";
  } else if (userMessage.includes("what's the weather like today")) {
    // You can integrate with a weather API to provide real-time data here.
    return "'I'm sorry, I can't provide current weather information.";
  } else if (userMessage.includes("how's your day going so far")) {
    return "'I'm just a chatbot, but I'm here to assist you!'";
  } else if (userMessage.includes("tell me a joke")) {
    return "Why did the computer catch a cold? Because it had a bad case of spam!";
  } else if (userMessage.includes("recommend a good TV show")) {
    return "What genre are you interested in?";
  } else if (userMessage.includes("how do I learn a new language")) {
    return "Learning a new language takes practice and dedication. There are many apps and courses available online.";
  } else if (userMessage.includes("what's your favorite music genre")) {
    return "I enjoy all types of music.";
  } else if ( userMessage.includes("how do I improve my time management skills")) {
    return "Time management can be improved through planning, setting priorities, and eliminating distractions.";
  } else if (userMessage.includes("what's the meaning of life")) {
    return "That's a profound question! The meaning of life can vary from person to person.";
  } else if (userMessage.includes("how do I start a business")) {
    return "Starting a business involves creating a plan, securing funding, and a lot of hard work.";
  } else if (userMessage.includes("help me with a math problem")) {
    return "Sure, I can help with math. Please provide the problem.";
  } else if (userMessage.includes("what's your favorite sport")) {
    return "I enjoy watching all sports!";
  } else if (userMessage.includes("how do I become a better writer")) {
    return "Writing regularly, seeking feedback, and reading can improve your writing.";
  } else if (userMessage.includes("your favorite animal")) {
    return "I like all animals.";
  } else if (userMessage.includes("how do I make friends as an adult")) {
    return "Join clubs, attend social events, and be open to new connections.";
  } else if (userMessage.includes("how do I stay motivated")) {
    return "Setting clear goals and finding your passion can help you stay motivated.";
  } else if (userMessage.includes("what's your favorite holiday")) {
    return "I don’t have holidays, but I like them all!";
  } else if (userMessage.includes("how do I save money")) {
    return "Creating a budget, cutting unnecessary expenses, and saving regularly are good practices.";
  } else if (userMessage.includes("your favorite color")) {
    return "I like all colors.";
  } else if (userMessage.includes("choose a career")) {
    return "Choose a career that aligns with your interests and skills.";
  } else if (userMessage.includes("recommend a good podcast to listen to")) {
    return "What topics are you interested in?";
  } else if (userMessage.includes("overcome procrastination")) {
    return "Breaking tasks into smaller steps and setting deadlines can help overcome procrastination.";
  } else if (userMessage.includes("your favorite season")) {
    return "I like all seasons.";
  } else if (userMessage.includes("prepare for a job interview")) {
    return "Research the company, practice common interview questions, and be confident.";
  } else if (userMessage.includes("recommend a good app for")) {
    // You can provide app recommendations based on the specific task mentioned by the user.
    return "Sure, I can recommend apps. What task are you looking to accomplish?";
  } else if (userMessage.includes("handle stress")) {
    return "Managing stress can be done through relaxation techniques, exercise, and seeking support.";
  } else if (userMessage.includes("your favorite historical era")) {
    return "'I'm fascinated by all of history.";
  } else if (userMessage.includes("start a blog")) {
    return "Choose a niche, select a platform, and start creating content.";
  } else if (userMessage.includes("cook")) {
    return "Of course, I can help with cooking. What dish would you like to prepare?";
  } else if (userMessage.includes("your favorite quote")) {
    return 'There are so many great quotes. One of my favorites is, "The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt';
  } else if (userMessage.includes("set and achieve goals")) {
    return "Setting SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound) is a good strategy.";
  } else if (userMessage.includes("build a website")) {
    return "To build a website, you can start with HTML, CSS, and JavaScript.";
  } else if (userMessage.includes("favorite type of art")) {
    return "I appreciate all forms of art.";
  } else if (userMessage.includes("improve my public speaking skills")) {
    return "Practicing, getting feedback, and joining speaking clubs can help.";
  } else if (userMessage.includes("recommend a good self-help book")) {
    return "What specific topic are you interested in for self-help?";
  } else if (userMessage.includes("what is the capital of india")) {
    // You can add responses for different cities or countries.
    return "The capital of [INDIA] is [DELHI].";
  } else if (userMessage.includes("what is the time")) {
    // You can use JavaScript to fetch the current time and provide it.
    return "The current time is [current time].";
  } else {
    return "I am a basic chatbot. I may not understand everything you say.";
  }
}
