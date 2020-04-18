import {observable} from 'mobx';

class CellModel{
        @observable id;
        @observable isHidden;
        
        constructor(id,isHidden){
            this.id = id,
            this.isHidden = isHidden;
        }
        
}

export default CellModel;