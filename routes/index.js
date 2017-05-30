var mongojs = require("mongojs"); 

//var url = 'mongodb://localhost:27017/Estudiantes'; 

var url = 'mongodb://Josue:12345@ds151461.mlab.com:51461/mean-demo'

var collections = [ "Alumnos" ]; 

var db = mongojs(url, collections); 



module.exports = function (app) {
   
    app.get('/', function (req, res, next) {
        res.render('index');
    });

    app.get('/file', function (req, res, next) {
        res.render('file');
    });

    app.post('/RegistrarEstudiante', function(req, res, next){

    	db.Alumnos.save(req.body , function(err, saved){
    		console.log(saved); 
    		res.send("ok"); 
    	}); 
    });

    app.get('/lista_estudiante', function(req, res, next){

    	db.Alumnos.find(function(err, docs){
    		res.json(docs); 
    	});
    }); 
   
   app.post('/EliminarRegistro', function(req, res, next){

    console.log(req.body); 

    db.Alumnos.remove({ '_id' : db.ObjectId(req.body.id) }, function(err, deleted){
        console.log(deleted); 
        res.send("ok"); 
    }); 
   });  


    app.post('/ActualizarEstudiante', function(req, res, next){

        var estudianteactualizar = req.body; 

        db.Alumnos.update(
        { '_id' : db.ObjectId(estudianteactualizar._id)}
        ,{
            $set : 
            {
                'nombre' : estudianteactualizar.nombre
               , 'apellido' : estudianteactualizar.apellido
               , 'telefono' : estudianteactualizar.telefono
               , 'curso' : estudianteactualizar.curso
               , 'puntos' : estudianteactualizar.puntos
            }
        },
        function(err, docs){
            res.send(docs); 
        }); 

    

    }); 

};
 