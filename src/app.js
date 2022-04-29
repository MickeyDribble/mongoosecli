require("./db/connection");
const { default: mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie, deleteMovie, updateMovie, listMovie, filterTitle, filterActor, filterGenre, filterYear } = require("./movie/methods");


const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            //add movie fucntion that takes yargsObj terminal input
            await addMovie({title: yargsObj.title, actor: yargsObj.actor, genre: yargsObj.genre, year: yargsObj.year})
            console.log(`Succesfully added ${yargsObj.title}`);
            
        } else if (yargsObj.delete) {
            //delete movie with filterObj
            await deleteMovie({title: yargsObj.title})
            console.log(`Succesfully deleted ${yargsObj.title}`);

        } else if (yargsObj.update) {
            //update movies with filterOBj and updateObj
            await updateMovie({title: yargsObj.title, actor: yargsObj.actor, genre: yargsObj.genre, year: yargsObj.year});
            console.log(`Succesfully updated ${yargsObj.title}`);

        } else if (yargsObj.list) {
            // list movies from database
            console.log(await listMovie());

        } else if (yargsObj.filterActor) {
            // filtered list by Actor name from database
            console.log(await filterActor({actor:yargsObj.actor}));
         
        } else if (yargsObj.filterGenre) {
            // filtered list by Genre name from database
            console.log(await filterGenre({genre:yargsObj.genre}));

        } else if (yargsObj.filterYear) {
            // filtered list by Year from database
            console.log(await filterYear({year:yargsObj.year}));

        } else if (yargsObj.filterTitle) {
            // filtered list by Title name from database
            console.log(await filterTitle({title:yargsObj.title}));
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