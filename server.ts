import { mongoDB } from "./src/infrastructure/services/mongoDB";
import { app } from "./src/main/setup/app";

mongoDB
    .then(() => {
        app.listen(5000, () => {
            console.log("Express:5000");
        });
    })
    .catch((e) => {
        console.log(e);
    });
