//imports...
import path from "path";
import fs from "fs/promises";
import fsn from "fs";

//variables..
const basePath = "D:\\Web development\\Projects\\Clear-the-clutter";
const files = await fs.readdir(basePath);


//main logic
for (const item of files) {
    //taking all extension form the current working files...
    let ext = item.split(".")[item.split(".").length - 1];
    if (item.split(".").length > 1) {
    //excluding all the extension that are use for programme for run..
    if (ext != "js" && ext != "git" && ext != "gitignore" && ext != "js" && ext != "git" && ext != "gitignore" && ext != "json" ) {
        //checking if the files is exist or not....   
        if (fsn.existsSync(path.join(basePath, ext))) {
            //moving files form their sutable directories... 
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item));
        } else {
            //making directories if directorie is not pressent...
            fs.mkdir(ext);
            //moving files to thier working directories..
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item));

        }
    }

    }
}






