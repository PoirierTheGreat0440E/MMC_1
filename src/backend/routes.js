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

// Sous-fonction pour lire tous les topics
function lecture_topic(connection){
    /*
    connection.query("SELECT * FROM mmc_ver1_topic",function(error,results,fields){
        if (error){
            throw error;
        }
        let array_final = [];
        let i = 0;
        while ( results[i] != undefined ){
            let id = results[i].topic_id;
            let titre = results[i].topic_titre;
            array_final[i] = { topic_id : id , topic_titre : titre };
            i++;
        }
        return array_final;
    });
    */
}

let connection = connection_bdd("mmc_ver1");
connection.connect();
console.log("Connection à MySQL réussie !");

//insertion_topic(connection,"aaarrgh!");
//insertion_message(connection,"Bonjour ceci est un message hihi !");
//lecture_topic(connection);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/messages",function(req,res,next){
    //console.log("Requete GET détectée !");
    //console.log(`ID donné : ${req.query.id_topic}`);
    //console.log(typeof(req.query.id_topic));
    let id_cherche = Number(req.query.id_topic);
    connection.query('SELECT * FROM mmc_ver1_messages WHERE message_topic_id = ?',[id_cherche],function(error,results,fields){
        if (error){
            throw error;
        }
        res.send(results);
        res.end();
    });
});

app.post("/messages",function(req,res,next){
    //console.log("Requete POST détectée !");
    //console.log(req.body.message_content);
    //console.log(req.body.id);
    connection.query('INSERT INTO mmc_ver1_messages (message_contenu,message_topic_id) VALUES (?,?)',[req.body.message_content,req.body.id],function(error,results,fields){
        if (error){
            throw error;
        }
        res.end();
    });
});

// Pour l'instant on ne peut que get les topics du site web...
app.get("/topic",function(req,res,next){

    connection.query("SELECT * FROM mmc_ver1_topic",function(error,results,fields){
        if (error){
            throw error;
        }
        res.send(results);
        res.end();
    });

})

app.listen(port,()=>{console.log(`Le serveur écoute au port ${port} !`);});
