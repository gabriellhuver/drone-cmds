// Importa os módulos necessários
const wifi = require('node-wifi');
const dgram = require('dgram');
const client = dgram.createSocket('udp4');

// Inicializa o módulo node-wifi
wifi.init({
    iface: null // seleciona a interface de rede automaticamente
});

// Conecta à rede Wi-Fi do drone
wifi.connect({ ssid: "WiFiUFO-2D2D5E"}, error => {
    if (error) {
        console.log("Erro ao conectar na rede Wi-Fi do drone:", error);
    } else {
        console.log("Conectado com sucesso na rede Wi-Fi do drone!");

        // Após a conexão, envia comandos de voo
        // Substitua os endereços IP, portas e comandos conforme necessário
        const droneAddress = "192.168.10.1";
        const dronePort = 8889;
        // Scanear o

        // Exemplo de comandos - substitua pelos comandos corretos do seu drone
        const commands = ["command", "takeoff", "land"];

        commands.forEach(cmd => {
            const message = Buffer.from(cmd);
            client.send(message, 0, message.length, dronePort, droneAddress, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log(`Comando "${cmd}" enviado ao drone.`);
                }
            });
        });
    }

    



});