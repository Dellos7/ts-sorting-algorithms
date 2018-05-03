import InsertionSortAlgorithm from "./sort-algorithms/InsertionSortAlgorithm";
import IComparable from "./sort-algorithms/IComparable";
import NumberComparable from "./sort-algorithms/NumberComparable";
import ISortAlgorithm from "./sort-algorithms/ISortAlgorithm";
import BubbleSortAlgorithm from "./sort-algorithms/BubbleSortAlgorithm";
import MergeSortAlgorithm from "./sort-algorithms/MergeSortAlgorithm";
import QuickSortAlgorithm from "./sort-algorithms/QuickSortAlgorithm";

/**
 * Insertion sort algorithm
 */

 console.log('--- INSERTION SORT ALGORITHM ---');

//let nArrayIS: number[] = [ 10, 7, 11, 1, 3, 5, 7 ];
let nArrayIS: number[] = [ 15, 12, 1, 3, 54, 3, 4, 26, 7, 35, 26, 4, 3, 87, 55 ];
console.log( 'Not sorted array: ' + nArrayIS );
let ncArrayIS: IComparable[] = NumberComparable.convert( nArrayIS );

let sortAlgorithm: ISortAlgorithm = new InsertionSortAlgorithm( ncArrayIS );
let ncSortedArrayIS = <NumberComparable[]> sortAlgorithm.sortAndGet();
let nSortedArrayIS = NumberComparable.parse( ncSortedArrayIS );
console.log( 'Sorted array: ' + nSortedArrayIS );

console.log('');
/**
 * Bubble sort algorithm
 */

console.log('--- BUBBLE SORT ALGORITHM ---');

//let nArrayBS: number[] = [ 10, 7, 11, 1, 3, 5, 7 ];
let nArrayBS: number[] = [ 15, 12, 1, 3, 54, 3, 4, 26, 7, 35, 26, 4, 3, 87, 55 ];
console.log( 'Not sorted array: ' + nArrayBS );
let ncArrayBS: IComparable[] = NumberComparable.convert( nArrayBS );

sortAlgorithm = new BubbleSortAlgorithm( ncArrayBS );
let ncSortedArrayBS = <NumberComparable[]> sortAlgorithm.sortAndGet();
let nSortedArrayBS = NumberComparable.parse( ncSortedArrayBS );
console.log( 'Sorted array: ' + nSortedArrayBS );

console.log('');

/**
 * Merge sort algorithm
 */

 console.log('--- MERGE SORT ALGORITHM ---');

//let nArrayMS: number[] = [ 10, 7, 11, 1, 3, 5, 7 ];
let nArrayMS: number[] = [ 15, 12, 1, 3, 54, 3, 4, 26, 7, 35, 26, 4, 3, 87, 55 ];
console.log( 'Not sorted array: ' + nArrayMS );
let ncArrayMS: IComparable[] = NumberComparable.convert( nArrayMS );

sortAlgorithm = new MergeSortAlgorithm( ncArrayMS );
let ncSortedArrayMS = <NumberComparable[]> sortAlgorithm.sortAndGet();
let nSortedArrayMS = NumberComparable.parse( ncSortedArrayMS );
console.log( 'Sorted array: ' + nSortedArrayMS );


console.log('');

/**
 * Quick sort algorithm
 */

 console.log('--- QUICK SORT ALGORITHM ---');

//let nArrayQS: number[] = [ 10, 7, 11, 1, 3, 5, 7 ];
let nArrayQS: number[] = [ 15, 12, 1, 3, 54, 3, 4, 26, 7, 35, 26, 4, 3, 87, 55 ];
console.log( 'Not sorted array: ' + nArrayQS );
let ncArrayQS: IComparable[] = NumberComparable.convert( nArrayQS );

sortAlgorithm = new QuickSortAlgorithm( ncArrayQS );
let ncSortedArrayQS = <NumberComparable[]> sortAlgorithm.sortAndGet();
let nSortedArrayQS = NumberComparable.parse( ncSortedArrayQS );
console.log( 'Sorted array: ' + nSortedArrayQS );