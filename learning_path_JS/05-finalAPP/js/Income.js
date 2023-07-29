class Income extends Data{
    static incomeCounter = 0;

    constructor(description, dataValue){
        super(description, dataValue);
        this._id = ++Income.incomeCounter;
    }
    get id(){
        return this._id;
    }
}