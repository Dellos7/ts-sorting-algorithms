import ISortAlgorithm from "./ISortAlgorithm";

class QuickSortAlgorithm extends ISortAlgorithm{

    public sort() {
        let start = 0;
        let end = this.arr.length - 1;
        this._sort( start, end );
    }

    private _sort( start: number, end: number ) {

        let pivot_i = start;
        let pivot = this.arr[pivot_i];

        let i = start + 1, j = end;
        while( i < j ) {
            if( this.arr[i].greaterThan( pivot )
                && this.arr[j].smallerThan( pivot ) ) {
                    //Swap
                    let aux = this.arr[j];
                    this.arr[j] = this.arr[i];
                    this.arr[i] = aux;
                    i++;
                    j--;
                }
            if( !this.arr[i].greaterThan( pivot ) ) {
                i++;
            }
            if( !this.arr[j].smallerThan( pivot ) ) {
                j--;
            }
        }

        //Swap pivot
        if( pivot.greaterThan( this.arr[j] ) ) {
            let pAux = this.arr[j];
            this.arr[j] = pivot;
            this.arr[pivot_i] = pAux;
        }

        //Sort left part of the array
        if( start < (j-1) ) {
            this._sort( start, j - 1 );
        }

        //Sort right part of the array
        if( end > i ) {
            this._sort( i, end );
        }

    }

}

export default QuickSortAlgorithm;