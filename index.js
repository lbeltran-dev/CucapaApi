import app from './app.js';
import { sequelize } from './database/database.js';

async function main() {
    try {
        await sequelize.sync({force: false});
        app.listen(4000);
        console.log('Server listening on port', 4000);
    } catch (err) {
        console.log('Unable to connect to database', err);
    };
}

main();
