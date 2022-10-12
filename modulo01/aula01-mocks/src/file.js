const { readFile } = require('fs/promises') 
const User = require('./user');
const contants = require('./constants');
const DEFAULT_OPTION = {
    maxLines: 3,
    fields: ["id","name","profession","age"]
}

class File {
    static async csvToJson(filePath) {
        const content =  await File.getFileContent(filePath);
        const validation = File.isValid(content);
        
        if( !validation.valid) throw new Error(validation.error);

        const users = File.parseCsvToJson(content);
        return users;
    }

    static async getFileContent(filePath) {
        // const filename = join(__dirname, );
        return (await readFile(filePath)).toString('utf8')
    };


    static isValid(csvString, options = DEFAULT_OPTION) {
        const [header, ...fileWithoutHeaders] = csvString.split('\n');
        
        const isHeaderValid = header.trim() == options.fields.join(',');
        if(!isHeaderValid) {
            return {
                error: contants.error.FILE_FIELDS_ERROR_MESSSAGE,
                valid: false
            }
        }

        const isContentLengthAccepted = (
            fileWithoutHeaders.length > 0 &&
            fileWithoutHeaders.length <= options.maxLines
        );

        if(!isContentLengthAccepted) {
            return {
                error: contants.error.FILE_LENGTH_ERROR_MESSSAGE,
                valid: false
            }
        }

        return { valid: true }

    }

    static parseCsvToJson(csvString) {
        const lines = csvString.split('\n');
        // Remove o primeiro item
        const firstLine = lines.shift()
        const header = firstLine.split(',')
        const users = lines.map(line => {
            const columns = line.split(',');
            let user = {}
            for(const index in columns) {
                user[header[index]] = columns[index]
            }
            return new User(user);
        })
        return users;
    }
}

// (async () => {
//     const result = await File.csvToJson('./../mocks/threeItems-valid.csv');
//     // const result = await File.csvToJson('./../mocks/fourItems-invalid.csv');
//     // const result = await File.csvToJson('./../mocks/invalid-header.csv');
// })(); 

module.exports = File;