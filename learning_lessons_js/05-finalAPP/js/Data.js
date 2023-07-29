class Data{
    constructor(description, dataValue){
        this._description = description
        this._dataValue = dataValue
    }
    get description(){
        return this._description
    }
    set description(description){
        this._description = description
    }
    get dataValue(){
        return this._dataValue
    }
    set dataValue(val){
        this._dataValue = val
    }
}