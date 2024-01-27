var express = require("express");
var axios = require("axios");
var cors = require("cors");
var mysql = require("mysql");

const app = express();
var port = 3001;

// Sous-fonction pour se connecter à la base de donnée mcc_ver1
function connection_bdd(bdd){
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:bdd,
    })
    return connection;
}

// Sous-fonction pour insérer un nouveau topic
function insertion_topic(connection,nom_topic){
    connection.query('INSERT INTO mmc_ver1_topic (topic_titre) VALUES (?)',[nom_topic],function(error,results,fields){
        if (error){
            throw error;
        }
        console.log("/// Insertion de topic réussie !");
    });
}

// Sous-fonction pour insérer un nouveau message
function insertion_message(connection,contenu_message){
    connection.query('INSERT INTO mmc_ver1_messages (message_contenu) VALUES (?)',[contenu_message],function(error,results,fields){
        if (error){
            throw error;
        }
        console.log("/// Insertion du message réussie !");
    });
}

let connection = connection_bdd("mmc_ver1");
connection.connect();
console.log("Connection à MySQL réussie !");

//insertion_topic(connection,"aaarrgh!");
//insertion_message(connection,"Bonjour ceci est un message hihi !");

app.use(cors());

app.get("/messages",function(req,res,next){
    console.log("Requete GET détectée !");
    res.end();
});

app.post("/messages",function(req,res,next){
    console.log("Requete POST détectée !");
    res.end();
});

app.listen(port,()=>{console.log(`Le serveur écoute au port ${port} !`);});
