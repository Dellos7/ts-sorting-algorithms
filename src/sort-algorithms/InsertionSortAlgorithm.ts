import ISortAlgorithm from "./ISortAlgorithm";

export class InsertionSortAlgorithm extends ISortAlgorithm {

    public sort() {
        for( let i = 1; i < this.arr.length; i++ ) {
            for( let j = i; j >= 1 && this.arr[j].smallerThan(this.arr[j-1]); j-- ) {
                let aux = this.arr[j-1];
                this.arr[j-1] = this.arr[j];
                this.arr[j] = aux;
            }
        }
    }

}

export default InsertionSortAlgorithm;