const express=require("express");
const app=express();
const yargs = require("yargs");
const note=require("./note.js");
yargs.command({
    command:"addnote",
    describe:"adding a note",
    builder:{
        title:{
            describe:"this is a title",
            demandOption:true,
            type:"string",
        },
        body:{
            describe:"this is a body",
            demandOption:true,
            type:"string",
        }
    },
    handler:function(argv){
        note.addnote(argv.title,argv.body);
    }
})
yargs.command({
    command:"listnote",
    describe:"listing a note",
    handler:function(){
        note.listnote();
    }
});
yargs.command({
    command:"readnote",
    describe:"reading a note",
    handler:function(argv){
        note.readnote(argv.title);
    }
});
debugger
yargs.command({
    command:"removenote",
    describe:"removing a note",
    builder:{
        title:{
            describe:"this is a title",
            demandOption:true,
            type:"string",
        },
        body:{
            describe:"this is a body",
            demandOption:true,
            type:"string",
        }
    },
    handler:function(argv){
        note.removenote(argv.title);
    }
})
.parse();
