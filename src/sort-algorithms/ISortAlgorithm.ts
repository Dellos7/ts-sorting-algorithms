import IComparable from "./IComparable";

abstract class ISortAlgorithm {

    protected arr: IComparable[];

    constructor( arr: IComparable[] ) {
        this.arr = arr;
    }

    public sort() {}
    public sortAndGet(): IComparable[] {
        this.sort();
        return this.get();
    }

    public set( arr: IComparable[] ) {
        this.arr = arr;
    }

    public get() {
        return this.arr;
    }

}

export default ISortAlgorithm;