import React from 'react';
import {observable,action} from 'mobx';

class MobxTodoApp{
    
    @observable id;
    @observable
    state = {
        //todos : [{id,title,isCompleted}], 
        selectedFilter : 'ALL' //ACTIVE,COMPLETED    
        }
}