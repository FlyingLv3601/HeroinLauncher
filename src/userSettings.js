const fs = require("fs");


async function  sendUserSettingData(event, ramValue, width, height, maincolor, secondcolor){
    const data = {
        ram: ramValue,
        width: width,
        height: height,
        mainColor: maincolor,
        secondcolor: secondcolor
    };
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile('Userdatas.json', jsonData, (err) => {console.log("File has been written successfully!");});
    console.log(jsonData);
}


module.exports = {sendUserSettingData};