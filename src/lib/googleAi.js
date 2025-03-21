/*
 * https://github.com/Prakhar-002
 * @copyright Prakhar-002
*/


/*
? Node module
*/

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

export default model;