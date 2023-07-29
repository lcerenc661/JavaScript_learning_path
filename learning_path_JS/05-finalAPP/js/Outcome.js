class Outcome extends Data{
    static outcomeCounter = 0;

    constructor(description, dataValue){
        super(description, dataValue);
        this._id = ++Outcome.outcomeCounter;
    }
    get id(){
        return this._id;
    }
}