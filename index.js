// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();  // Load environment variables

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, 
                                      GatewayIntentBits.GuildMessages, 
                                      GatewayIntentBits.MessageContent
                                    ] 
                                });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Listen for messages and respond to "Ping" with "Pong"
client.on('messageCreate', message => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Check if the message is exactly "Ping"
    if (message.content.toLowerCase() === 'ping') {
        message.channel.send('Pong!');
    }
});

// Log in to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);

