interface IComparable {

    compareTo( comparable: any ): number;
    smallerThan( comparable: any ): boolean;
    greaterThan( comparable: any ): boolean;
    equalTo( comparable: any ): boolean;
    get(): any;
    set( comparable: any );

}

export default IComparable;