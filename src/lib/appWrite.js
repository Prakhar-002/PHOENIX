/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/

/*
  ? Node modules
*/
import { Client, Account, Avatars, Databases } from "appwrite";

/*
* Initial appWrite client
*/

const client = new Client();
client.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID).setEndpoint('https://cloud.appwrite.io/v1');


/*
? Initial appWrite Account
*/
const account = new Account(client);


/*
? Initial appWrite Avatars
*/
const avatars = new Avatars(client);


/*
? Initial appWrite Databases
*/
const databases = new Databases(client);


export { account, avatars, databases }
