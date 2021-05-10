require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

app.use(express.json({ extended: false }));
app.use(express.static('public'));

// app.post('/search_institutions', searchInstitutions);
// app.post('/get_institution_by_id', getInstitutionById);

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`listening on port ${port}`);
});
