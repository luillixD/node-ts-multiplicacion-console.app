import { CreateTable } from "../Domain/use-cases/create-table.use-case";
import { SaveFile } from "../Domain/use-cases/save-file.use-case";

interface RunOptions{
    base: number;
    limit: number;
    showTable: boolean;
    directory : string;
    name : string; 
}

export class ServerApp {
    static run ({base, limit, showTable, directory, name}: RunOptions) 
    {
        if(base < 1) throw new Error('El nuevo valor de la base debe ser mayor a 1 o igual a 1');
        if(limit < 1) throw new Error('El nuevo valor del limite debe ser mayor a 1 o igual a 1');
        const table= new CreateTable()
            .execute({base, limit});

        const wasCreate = new SaveFile().execute({fileContent: table, destination: directory, filename: name});

        if(showTable) console.log(table);
        (wasCreate) ? console.log('Archivo creado') : console.log('Error al crear el archivo');
    }
}