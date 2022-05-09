const Insta = require("@androz2091/insta.js");
const client = new Insta.Client();

client.on("connected", () => {
  console.log("Бот залогинился");
});

client.on("pendingRequest", (message) => {
  message.sendMessage("Привет. Я чат-бот. Напиши привет, чтобы продолжить");
});
client.on("newFollower", (message) => {
  message.privateChat.sendMessage("Спасибо за подписку, мой друг!");
});
client.on("messageCreate", (message) => {
  if (message.author.id === client.user.id) return;

  message.markSeen();
  if (message.content === "Привет" || message.content === "привет") {
    message.chat.startTyping();
    message.chat.sendMessage(
      "Привет. Айдарбек я огорчен что ты  не сделал мне чат бота, из-за этого мне самому пришлось разобраться с этим, чтобы продолжить лайкните сообщение"
    );
  } else {
    message.chat.sendMessage(
      "Не понимаю ваше сообщение. Напишите привет для начала"
    );
  }
});

client.on("likeAdd", (message) => {
  message.privateChat.startTyping();
  message.privateChat.sendMessage(
    "Давайте учить стихотворения, великого поэта"
  );
  message.privateChat.sendMessage(
    "Сергей Есенин - Не жалею, не зову, не плачу..."
  );
  message.privateChat.sendMessage(
    "Не жалею, не зову, не плачу,\nВсе пройдет, как с белых яблонь дым.\nУвяданья золотом охваченный,\nЯ не буду больше молодым.\nТы теперь не так уж будешь биться,\nСердце, тронутое холодком,\nИ страна березового ситца .\nНе заманит шляться босиком."
  );
  message.privateChat.stopTyping();
});

// ! write your username and password there
client.login("username", "password");
