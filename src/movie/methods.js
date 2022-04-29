const Movie = require("./model");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error)
    }
};

exports.deleteMovie = async (movieObj) => {
    try {
        await Movie.deleteOne(movieObj);
    } catch (error) {
        console.log(error)
    }
};

exports.updateMovie = async (movieObj) => {
    try {
        await Movie.updateOne(
            {title: movieObj.title}, //Document Identifier
            {actor: movieObj.actor, genre: movieObj.genre, year: movieObj.year}  //Update to be made
        );
    } catch (error) {
        console.log(error)
    }
};

exports.listMovie = async () => {
    try {
        return await Movie.find({})
    } catch (error) {
        console.log(error)
    }
}

exports.filterTitle = async (movieObj) => {
    try {
        return await Movie.find({title: movieObj.title})
    } catch (error) {
        console.log(error)
    }
}

exports.filterActor = async (movieObj) => {
    try {
        return await Movie.find({actor: movieObj.actor})
    } catch (error) {
        console.log(error)
    }
}
exports.filterGenre = async (movieObj) => {
    try {
        return await Movie.find({genre: movieObj.genre})
    } catch (error) {
        console.log(error)
    }
}
exports.filterYear = async (movieObj) => {
    try {
        return await Movie.find({year: movieObj.year})
    } catch (error) {
        console.log(error)
    }
}

