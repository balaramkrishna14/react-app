import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';
import {observer} from 'mobx-react';

const Footer = styled.div`
    ${tw`flex justify-between`};
    width:600px;
`;

const FilteredButton = styled.div`
    ${tw`flex justify-between`}
`;

const Active = styled.button`
    ${tw`mx-2`}
`;

@observer
class TodoFooter extends React.Component{
    //props-->activeTodosCount,selectedFilter,onChangeSelectedFilter(),onClearCompleted()
    onChangeSelectedFilter = (updatingSelectedFilter) => {
        const {onChangeSelectedFilter} = this.props;
        onChangeSelectedFilter(updatingSelectedFilter);
    }
    
    onChangeSelectedAllFilter = () => {
       this.onChangeSelectedFilter("ALL");
    }
    
    onChangeSelectedActiveFilter = () => {
       this.onChangeSelectedFilter("ACTIVE");
    }
    
    onChangeSelectedCompletedFilter = () => {
       this.onChangeSelectedFilter("COMPLETED");
    }
    
    onClearCompleted = () => {
        const {onClearCompleted} = this.props;
        onClearCompleted();
    }
    
    render(){
        const {activeTodosCount} = this.props;
        return(
            <Footer>
                <div>Items left: {activeTodosCount}</div>
                <FilteredButton>
                    <button onClick={this.onChangeSelectedAllFilter}>ALL</button>
                    <Active onClick={this.onChangeSelectedActiveFilter}>ACTIVE</Active>
                    <button onClick={this.onChangeSelectedCompletedFilter}>COMPLETED</button>
                </FilteredButton>
                <div>
                    <button onClick={this.onClearCompleted}>ClearCompleted</button>
                </div>
            </Footer>
            );
    }
}

export default TodoFooter;