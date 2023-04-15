// 'use strict'
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);

const { watch, promises: { readFile } }  = fs;

class File {
  watch(event, filename){
    console.log('arguments')
    console.log(arguments)
    console.log(Array.prototype.slice(arguments))
    console.log(Array.prototype.slice.call(arguments))
    console.log('arguments 22')
    this.showContent();
  }

  showContent = async () => {
    console.log('Aqui')
  }
}

const file = new File();
// file.watch()
watch(__filename, file.watch);