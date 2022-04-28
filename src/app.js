require("./db/connection");
const { default: mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie, deleteMovie, updateMovie, listMovie } = require("./movie/methods");
const Movie = require("./movie/model");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            //add movie fucntion that takes yargsObj terminal input
            await addMovie({title: yargsObj.title, actor: yargsObj.actor})
            console.log(`Succesfully added ${yargsObj.title}`);
            
        } else if (yargsObj.delete) {
            //delete movie with filterObj
            await deleteMovie({title: yargsObj.title, actor: yargsObj.actor})
            console.log(`Succesfully deleted ${yargsObj.title}`);

        } else if (yargsObj.update) {
            //update movies with filterOBj and updateObj
            await updateMovie({title: yargsObj.title, actor: yargsObj.actor});
            console.log(`Succesfully updated ${yargsObj.title}`);

        } else if (yargsObj.list) {
            // list movies from database
            console.log(await listMovie());
        } else {
            console.log("Incorrect Command")
        }
        await mongoose.disconnect()
    } catch (error) {
        console.log(error);
        await mongoose.disconnect()
    }
};

app(yargs.argv);