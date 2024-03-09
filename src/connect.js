import sqlite from "sqlite3";

export const db = new sqlite.Database('./src/database.db', sqlite.OPEN_READWRITE, (err)=> {
    console.log('Connected to the database');
    if (err) return console.error(err); 
});

import { generateRandomURL } from "../src/controllers/shrinker.js";
function ShrinkItNow(orgURL) {
    const currentDate = new Date();
    const currentDateTime = currentDate.toLocaleString();
    let finalURL = generateRandomURL();
    console.log(finalURL);
    db.run("INSERT INTO `urldirectory` (`url`, `shortern`, `datetime`, `visits`) VALUES (?, ?, ?, ?)", [orgURL, finalURL, currentDateTime, 0], function(err) {
    if (err) {
            console.log(err.message);
            return 'Error';
        } 
        else {
            return finalURL;
        }   
    });
    return finalURL;
}
export {ShrinkItNow};