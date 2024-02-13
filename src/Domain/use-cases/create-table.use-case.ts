export interface CreateTableUseCase {
    execute:(options: CreateTableOpcions) => string;
}

export interface CreateTableOpcions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase{
    constructor() {
        
    }

    execute({base, limit = 10} : CreateTableOpcions): string {
        let outputMessage = '';
        for(let i = 1; i <= limit; i++) {
            outputMessage += `${base} x ${i} = ${base * i}\n`;
        }
        return outputMessage;
    }
}