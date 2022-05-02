const express = require('express');//importa o express
const req = require('express/lib/request');
const server = express();// cria uma variavel chamada server que chama a funcao express 
server.listen(3000); //faz com que o servidor seja executado na porta 3000 de seu localhost:3000
server.use(express.json());//faz com que o express entenda json 
const usuario =[]; //as informacoes ficaram armazenadas dentro deste array

server.get('/usuario',(req,res)=>{
  return res.json(usuario);
});// rota para listar todos os geeks 
 
server.get('/usuario/:index',checkUserInArray,(req,res)=>{
  return res.json(req.user);
});

server.post ('/usuario',(req,res)=>{const{name} = req.body;
usuario.puch(name);
return res.json(usuario);});
//retorno da informacao 

server.put('/usuario/:index',(req,res)=>{
const {index} = req.params;
const {name} = req.body;

usuario[index] = name;

return res.json(usuario)
});

server.delete('/usuario/:index',(req,res) => {
  const {index} = req.params;

  usuario.splice(index,1);

  return res.send();
})
server.listen(3000); //faz o servidor se executado na porta 3000

function checkUsuarioExists (req,res,next){if(!req.body.name){
  return res.status(400).jsaon({error:'usuario name is required'});
}
return next();
};

function checkUsuarioInArray(req,res,next){
  const usuario = usuario [req.params.index];
  if(!geek){
    return res.status (400).json({error:'user does not exists'});
  }
  req.usuario = usuario;
  return next()
}

server.post('/usuario',checkUsuarioExists,(req,res)=>{ const{name} = req.body;
usuario.push(name) ;
return res.json (usuario)})

server.put ('/usuario/:index',checkUserInArray,checkUsuarioExists,(req,res)=> {
  const {index} = req.params ;
  const { name}= req.body;
  usuario [index] = name ;
  return res.json(ususario);
 })

