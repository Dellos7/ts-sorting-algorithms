import IComparable from "./IComparable";

class NumberComparable implements IComparable {

    private n: number;

    constructor( n: number ) {
        this.n = n;
    }

    public compareTo( n: NumberComparable ): number {
        if( this.n > n.get() ) {
            return 1;
        }
        else if( this.n === n.get() ) { 
            return 0;
        }
        else {
            return -1;
        }
    }

    public smallerThan( n: NumberComparable ): boolean {
        return this.n < n.get();
    }

    public greaterThan( n: NumberComparable ): boolean {
        return this.n > n.get();
    }

    public equalTo( n: NumberComparable ): boolean {
        return this.n === n.get();
    }

    public get(): number {
        return this.n;
    }

    public set( n: number ) {
        this.n = n;
    }

    public static convert( nArr: number[] ): IComparable[] {
        let ncArr: IComparable[] = [];
        for( let n of nArr ) {
            ncArr.push( new NumberComparable(n) );
        }
        return ncArr;
    }

    public static parse( ncArr: NumberComparable[] ) {
        let nArr: number[] = [];
        for( let n of ncArr ) { 
            nArr.push( n.get() );
        }
        return nArr;
    }

}

export default NumberComparable;