 const chalk=require("chalk"); 
 const fs=require("fs");
const { title } = require("process");
const { check } = require("yargs");

const addnote=function(title,body){
  
    const note=loadnotes()
    const dublicatenotes=note.find(function(check){
        return check.title===title;
    });
    if(!dublicatenotes){
   
    note.push({
        title:title,
        body:body
    })
    savenotes(note);
    console.log(chalk.red.italic("your notes has added succesfully"));
}
else{
console.log("This note is already being taken");
}
}

const removenote=function(title,body){
    const note=loadnotes();
    const notestokeep=note.filter(function(checks){
     return checks.title!==title;
    })
    if(note.length>notestokeep.length){
        console.log(chalk.green.italic("!Note Removed"));
        savenotes(notestokeep);
    }
    else{
        console.log(chalk.red.italic("No Note found"));
    }
}
const listnote=()=>{
    const note=loadnotes();
    console.log(chalk.green.bold("your notes"));
    note.forEach((notes) => {
        console.log(notes);
  })
}
const readnote=(title)=>
{
    const notes=loadnotes();
    const note=notes.find((check)=> check.title===title) 
         
    
    if(note)
    {
        console.log("your note has found");
        console.log("Title :" +note.title);
        console.log("Body :" +note.body);
    }
    else{
        console.log("your notes not found");
    }
}
const loadnotes=function(){
    try{
        const databuffer=fs.readFileSync('notes.json');
        const datajson=databuffer.toString();
        return JSON.parse(datajson);
    }
    catch(error){
        return [];
    }
}
const savenotes=function(note){
    const dataJSON=JSON.stringify(note);
    fs.writeFileSync("notes.json",dataJSON);
}
module.exports={
    readnote:readnote,
    addnote:addnote,
    removenote:removenote,
    listnote:listnote
}

