export class Wine {
    name:string;
    constructor(name:string) {
        this.name=name;
    }
    getName():string{
        return this.name;
    }   
}
export class VintageWine extends Wine {
    year:number;
    stars:number;
    constructor(year:number,stars:number,name:string) {
        super(name);
        this.year=year;
        this.stars=stars;
    }
    getYear():number{
        return this.year;
    } 

    getStars():number{
        return this.stars;
    }   

}