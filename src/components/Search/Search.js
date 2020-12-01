import React, {Component} from 'react';

import styles from './search.module.scss';
import SingleSelect from '../Select/Select';

const data = [
  { value: 'Все категории', label: 'Все категории' },
  { value: 'Категория 1', label: 'Категория 1' },
  { value: 'Категория 2', label: 'Категория 2' },
  { value: 'Категория 3', label: 'Категория 3' },
  { value: 'Категория 4', label: 'Категория 4' }
]

export default class Search extends Component{

  render() {
    return(
      <div>
        <form action="" className={styles.searchFormWrap}>
          <input type="text" className={styles.searchInput} placeholder="Поиск по сайту"
                 pattern="[а-я, a-z]{2,15}"
          />
          <div className={styles.verticalLine}/>

          <div className={styles.singleSelectWrap}><SingleSelect options={data}/></div>
          <button className={styles.searchBtn}>Поиск</button>
        </form>
      </div>
    )
  }
}