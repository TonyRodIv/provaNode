const http = require('http');
const PORT = 5000;

const path = require('path');
const fs = require('fs');
const os = require('os');

// ATV 01 -------------------------------------------------------

// const server = http.createServer((req, res) => {

//     let osInfo ={
//         sysName:os.type(),
//         totalMem:os.totalmem(),
//         currentDir:os.homedir(),
//     }
//     osInfo = JSON.stringify(osInfo)
//     if (req.url === '/info') {
//         res.write(osInfo)
//         res.end();
//     } else {
//         res.write(`Ocorreu um erro, por favor verifique se você digitou a url corretamente`)
//         res.end();
//     };
// });

// server.listen(PORT, () => {
//     console.log(`Servidor rodando na porta ${PORT}`);
// });

// ATV 02 -------------------------------------------------------

// const customUrl = `https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf`

// const relativeDir = path.basename(customUrl)

// console.log(path.dirname(customUrl))
// console.log(path.extname(customUrl))

// const urlJSON ={
//     dirName:path.dirname(customUrl),
//     dirExtn:path.extname(customUrl),
// }
// const baseName = path.basename(customUrl)
// const absoluteUrl = path.join('/','senai',relativeDir)
// console.log(absoluteUrl)
// console.log(JSON.stringify(urlJSON))

// ATV 03 -------------------------------------------------------

// const finalUrl = new URL('https://nodejs.org/api/url.html#url_new_url_input_base')
// const personaUrl = {
//     protocol: finalUrl.protocol,
//     slashes: finalUrl.slashes,
//     auth: finalUrl.auth,
//     host: finalUrl.host,
//     port: finalUrl.port,
//     hostname:finalUrl.hostname,
//     hash: finalUrl.hash,
//     search:finalUrl.search,
//     query: finalUrl.query,
//     pathname:finalUrl.pathname,
//     path:finalUrl.path,
//     href: finalUrl.href,
// }
// console.log(personaUrl)

// ATV 04 -------------------------------------------------------

// fs.writeFile('teste.txt','agr ta testado',(err)=>{
//   if(err){
//     console.error(err)
//   }else{
//     console.log('Arquivo criado com sucesso!!')
//   }
// })
// fs.rename('teste.txt','ArquivoRenomeado.txt',function(err){
//   if(err) throw err;
//   console.log('Arquivo Renomeado');
// })


// ATV 05 -------------------------------------------------------

// console.log(os.cpus());