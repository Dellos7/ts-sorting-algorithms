import ISortAlgorithm from "./ISortAlgorithm";

class BubbleSortAlgorithm extends ISortAlgorithm {

    public sort(){ 
        let swapped = true;
        for( let i = 1; i < this.arr.length && swapped; i++ ) {
            swapped = false;
            for( let j = this.arr.length - 1; j >= i; j-- ) {
                if( this.arr[j].smallerThan(this.arr[j-1]) ) {
                    let aux = this.arr[j-1];
                    this.arr[j-1] = this.arr[j];
                    this.arr[j] = aux;
                    swapped = true;
                }
            }
        }
    }

}

export default BubbleSortAlgorithm;