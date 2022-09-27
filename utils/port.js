'use strict';


const net =require('net');

module.exports = function() 
{
//creation du serveur avec le module "net"
    const server = net.createServer();
// demarrage du server sur le port "0"
// port 0 exist pas le module net va rechercher un port dispo
    server.listen(0);
// recup du num de port attribué par net
    let port = server.address().port;
// ferme le serveur
    server.close();
// retourne le numero de port
    return port;


}