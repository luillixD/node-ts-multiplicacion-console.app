
import fs from 'fs';

export interface saveFileUseCase {
    execute: (options: Opcions) => boolean;
}

export interface Opcions {
    fileContent: string;
    destination?: string;
    filename?: string;
}

export class SaveFile implements saveFileUseCase {
    constructor() {
        
    }
    execute({fileContent, destination = 'outputs', filename = 'table'} : Opcions): boolean {

        try{
            fs.mkdirSync(destination, { recursive: true });
            fs.writeFileSync(`${destination}/${filename}.txt`, fileContent);
            return true;
        }
        catch(e){
            throw new Error('Error al guardar el archivo');
        }
    }
}