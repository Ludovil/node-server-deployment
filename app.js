import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

//console.log(process);

app.get('/', (req, res) => {
	res.send('<h1>Render Node Server</h1>');
});

app.get('/weather', async (req, res) => {
	// proxy server
	// cannot use fetch here - not available inside the node -> axios
	const response =
		await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${process.env.SECRET_KEY}
    `);
	// sending response to our client
	res.send(response.data);
});

app.listen(PORT, () => {
	console.log('Server is running on PORT:', PORT);
});
