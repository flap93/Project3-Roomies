const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
"mongoURI": "mongodb+srv://flap9325:flap9325@cluster0.l2vtg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const connectDB = async () => {
	try {
		await mongoose.connect(db || process.env.mongoURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
        });

		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;