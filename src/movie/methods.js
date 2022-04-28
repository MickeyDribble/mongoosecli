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
        await Movie.findOneAndUpdate(
            {title: movieObj.title},
            {$set:{title: movieObj.title, actor: movieObj.actor}}
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
