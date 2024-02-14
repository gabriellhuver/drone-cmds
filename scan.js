const NmapScan = require('node-nmap');
NmapScan.nmapLocation = "nmap"; // Certifique-se de que o nmap está no PATH do sistema

// Substitua '192.168.1.0/24' pelo seu range de IP da rede, se necessário
let quickScan = new NmapScan.NmapScan('192.168.1.0/24');

quickScan.on('complete', function(data){
  console.log("Escanemento completo");
  data.forEach(function(device){
    console.log(`Dispositivo encontrado: IP: ${device.ip}, Hostname: ${device.hostname}`);
  });
});

quickScan.on('error', function(error){
  console.log(`Erro: ${error}`);
});

quickScan.startScan();
