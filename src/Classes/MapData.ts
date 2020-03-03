import { Cell } from "./Cell";

export class MapData
{
    private Data : Array<Array<Cell>>;
    constructor(MaxSizeX : number, MaxSizeY : number)
    {
        this.Data = new Array<Array<Cell>>(MaxSizeX);
        for(let x = 0; x < MaxSizeX; x++)
        {
            this.Data[x] = new Array<Cell>(MaxSizeY)
            for(let y = 0; y < MaxSizeY; y++)
            {
                this.Data[x][y] = new Cell();
            }
        }
    }
    
    GetCell = (X : number, Y : number) : Cell | undefined=>{
        if(this.Data[X] == undefined)
        {
            console.warn(`${X} is not a valid slot in the Data array.`);
            return undefined;
        }
        if(this.Data[X][Y] != undefined)
        {
            return this.Data[X][Y];
        }
        console.warn(`${X}, ${Y} is not a valid slot in the Data array.`);
        return undefined;
    }


}
