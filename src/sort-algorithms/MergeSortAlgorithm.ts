import ISortAlgorithm from "./ISortAlgorithm";
import IComparable from "./IComparable";

class MergeSortAlgorithm extends ISortAlgorithm {

    public sort() {
        this.arr = this._sort( this.arr.slice() );
    }

    private _sort( arr: IComparable[] ): IComparable[] {

        //Base condition
        if( arr.length <= 1 ) {
            return arr.slice();
        }

        let half = Math.floor( arr.length / 2 );
        let firstHalfStart_i = 0;
        let firstHalfEnd_i = half;
        let secondHalfStart_i = half;
        let secondHalfEnd_i = arr.length;

        //We sort the first half of the array
        let sortedFirstHalf = this._sort( arr.slice( firstHalfStart_i, firstHalfEnd_i ) );
        //We sort the second half of the array
        let sortedSecondHalf = this._sort( arr.slice( secondHalfStart_i, secondHalfEnd_i ) );

        //Here we sort both sorted arrays in one by index comparison
        let finalArr: IComparable[] = [];
        let i = 0, j = 0, k = 0;
        while( i <= sortedFirstHalf.length - 1 && j <= sortedSecondHalf.length - 1 ) { 
            if( sortedSecondHalf[j].smallerThan(sortedFirstHalf[i]) ) {
                finalArr.push( sortedSecondHalf[j] );
                j++;
            }
            else {
                finalArr.push( sortedFirstHalf[i] );
                i++;
            }
            k++;
        }
        
        //This is to push into the array the pending elements of the longer array
        while( k <= ( sortedFirstHalf.length + sortedSecondHalf.length ) - 1 ) {
            if( i <= sortedFirstHalf.length - 1 ) {
                finalArr.push( sortedFirstHalf[i] );
                i++;
            }
            else if( j <= sortedSecondHalf.length  - 1) {
                finalArr.push( sortedSecondHalf[j] );
                j++;
            }
            k++;
        }

        return finalArr;
    }

}

export default MergeSortAlgorithm;