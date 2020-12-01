import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import classNames from 'classnames';

import styles from './header.module.scss';

export default class Header extends Component{
  state = {
    isBurgerVisible: false
  }

  onToggleBurger = () => {
    const {isBurgerVisible} = this.state;
    this.setState({
      isBurgerVisible: !isBurgerVisible
    },()=>{
      if (this.state.isBurgerVisible) {
        document.body.classList.add('lock');
      } else {
        document.body.classList.remove('lock');
      }
    })
  }
  render() {
    const {isBurgerVisible} = this.state;

    return(
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerBody}>
            <nav className={classNames({
              [styles.headerMenu]: true,
              [styles.active]: isBurgerVisible
            })}>
              <ul className={styles.headerList}>
                <li><a href="/" className={styles.navItem}>Главная</a></li>
                <li><a href="/" className={styles.navItem}>О компании</a></li>
                <li><a href="/" className={styles.navItem}>Ссылка 1</a></li>
                <li><a href="/" className={styles.navItem}>Ссылка 2</a></li>
                <li><a href="/" className={styles.navItem}>Ссылка 3</a></li>
              </ul>
            </nav>
            <div className={classNames({
              [styles.headerBurger]: true,
              [styles.active]: isBurgerVisible
            })}
                 onClick={this.onToggleBurger}>
              <span/>
            </div>
            <Popup  trigger={
              <button className={styles.enterWrap}>
                <img src="/images/icons/enter-icon.svg" alt="" className={styles.enterIcon}/>
                Вход
              </button>}
                    position="top left" modal>
              {close => (
                  <div className={styles.contentWrap}>
                    <form>
                      <input type="text" placeholder="Логин" className={styles.phoneInput} />
                      <input type="password" placeholder="Пароль" className={styles.phoneInput}                 pattern="[а-я, a-z]{2,15}"
                             pattern="[а-я, a-z]{4,15}" />
                      <button type="submit" className={styles.sendNumberBtn}>Войти</button>
                    </form>

                    <a className={styles.close} onClick={close}>
                      &times;
                    </a>
                  </div>
              )}
            </Popup>
          </div>
        </div>
      </header>
    )
  }
};