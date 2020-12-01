import React, { Component } from 'react';
import ReactSelect from 'react-select';

const customStyles = {
  container:()=>({
    width: 150,
    cursor: 'pointer',
  }),
  menu: () => ({
    width: 150,
  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#fff' : '#ff8900',
    cursor: 'pointer',
    textAlign: 'left',
}),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
  control: ()=>({
    height: 55,
    display: 'flex',
    backgroundColor: '#f5f5f5'
  }),
  indicatorSeparator: ()=>({
   display: 'none'
  }),
  placeholder: ()=>({
    color: '#616161',
    fontsize: 14,
}),
  indicatorsContainer:()=>({
    color: '#616161',
    display: 'flex',
    alignSelf: 'center'
  })
}

export default class Select extends Component {
  render() {
    return(
        <ReactSelect options={this.props.options}
        styles={customStyles}
        defaultValue={this.props.options[0]}
        theme={theme => ({
         ...theme,
         borderRadius: 0,
         colors: {
         ...theme.colors,
         primary25: '#f5f5f5',
         primary: '#ff8900',
         },
         })}
        />
      )
  }
}