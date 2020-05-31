import fs from "fs"
// const fs = require("fs")

export function saveJson(saveData) {
  fs.readFile("/json/text.json","utf-8",function(err,data) {
    let arr = JSON.parse(data)[saveData.type];
    arr.push(saveData)
    console.log(arr);
  })
}