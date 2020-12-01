import React, { Component } from 'react';
import ReactSelect from 'react-select';

const customStyles = {
  container:()=>({
    width: 220,
    cursor: 'pointer',
    marginBottom: 20,
    marginRight: 20,
  }),
  menu: () => ({
    width: 220,
    position: 'absolute',
    zIndex:999

  }),
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#000' : '#ff8900',
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
    textAlign: 'left',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
  control: ()=>({
    height: 40,
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


export default class SelectForTabs extends Component {
  render() {
    return(
          <ReactSelect options={this.props.options}
                       styles={customStyles}
                       className="wrap"
                       value={this.props.value}
                       onChange={this.props.onChange}
                       placeholder={this.props.placeholder}
                       theme={theme => ({
                         ...theme,
                         borderRadius: 0,
                         colors: {
                           ...theme.colors,
                           primary25: '#f5f5f5',
                           primary: 'blue',
                         },
                       })}
          />
    )
  }
}