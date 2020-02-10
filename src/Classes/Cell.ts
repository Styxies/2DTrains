export enum CellId
{
    Empty = 0,
    Rail = 1,

}
export class Cell
{
    public id : CellId;

    constructor()
    {
        this.id = CellId.Empty;
    }


}