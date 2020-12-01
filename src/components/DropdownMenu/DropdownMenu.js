import React, {Component} from 'react';
import classNames from 'classnames';

import styles from './DropdownMenu.module.scss';

export default class DropdownMenu  extends Component{
    state = {
        isMenuVisible: false,
        width: window.innerWidth
    }
    toggleDropdown = () => {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible,
        })
    }

    render() {
    return(
      <div className={styles.navWrap}>
        <div className={styles.menuHeaderWrap} onClick={this.toggleDropdown}>
            <div className={styles.burgerIconWrap}>
                <img src="/images/icons/burger.svg" alt="" className={styles.burgerIcon}/>
            </div>
            <div className={styles.menuTitle}>Меню</div>
        </div>
        <ul className={classNames({
            [styles.navigationWrap]: true,
            [styles.navigationVisibility]: this.state.isMenuVisible
        })} >
            <li><a href="/">Ссылка 1 <img src="/images/icons/arrow-right.png" className={styles.arrowRight}/></a>
                <ul className={styles.innerList}>
                    <li><a href="/">Ссылка 1.1</a></li>
                    <li><a href="/">Ссылка 1.2</a></li>
                </ul>
           </li>
            <li><a href="/">Ссылка 2 <img src="/images/icons/arrow-right.png" className={styles.arrowRight}/></a>
                <ul className={styles.innerList}>
                    <li><a href="/">Ссылка 1.1</a></li>
                    <li><a href="/">Ссылка 1.2</a></li>
                    <li><a href="/">Ссылка 1.3</a></li>
                </ul>
            </li>
            <li><a href="/">Ссылка 3 <img src="/images/icons/arrow-right.png" className={styles.arrowRight}/></a>
                <ul className={styles.innerList}>
                    <li><a href="/">Ссылка 1.1</a></li>
                    <li><a href="/">Ссылка 1.2</a></li>
                </ul>
            </li>
            <li><a href="/">Ссылка 4 <img src="/images/icons/arrow-right.png" className={styles.arrowRight}/></a>
                <ul className={styles.innerList}>
                    <li><a href="/">Ссылка 1.1</a></li>
                    <li><a href="/">Ссылка 1.2</a></li>
                </ul>
            </li>
            <li><a href="/">Ссылка 5 <img src="/images/icons/arrow-right.png" className={styles.arrowRight}/></a>
                <ul className={styles.innerList}>
                    <li><a href="/">Ссылка 1.1</a></li>
                    <li><a href="/">Ссылка 1.2</a></li>
                    <li><a href="/">Ссылка 1.3</a></li>
                </ul>
            </li>
            <li><a href="/">Ссылка 6 <img src="/images/icons/arrow-right.png" className={styles.arrowRight}/></a>
                <ul className={styles.innerList}>
                    <li><a href="/">Ссылка 1.1</a></li>
                    <li><a href="/">Ссылка 1.2</a></li>
                    <li><a href="/">Ссылка 1.3</a></li>
                </ul>
            </li>
            <li><a href="/">Ссылка 7 <img src="/images/icons/arrow-right.png" className={styles.arrowRight}/></a>
                <ul className={styles.innerList}>
                    <li><a href="/">Ссылка 1.1</a></li>
                    <li><a href="/">Ссылка 1.2</a></li>
                </ul>
            </li>
        </ul>
      </div>
    )
  }
}
