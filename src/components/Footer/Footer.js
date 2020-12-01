import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import classNames from 'classnames';

import styles from './Footer.module.scss';

export default class Footer extends Component{
  render() {
    return(
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTopWrap}>
            <div className={styles.mainCol}>
              <div className={styles.listHeader}>
                <span className={styles.listHeaderTitle}>Блок 1</span>
              </div>
              <div className={styles.subHeader}>
                <div className={styles.subHeaderLight}>Будьте в курсе новостей и новинок!</div>
                <div className={styles.subHeaderBold}>Подписывайтесь на рассылку</div>
              </div>
              <form action="" className={styles.formWrap}>
                <input type="email" placeholder="Укажите свой email для подписки" className={styles.inputEmail}/>
                <Popup  trigger={
                  <button className={styles.subscribeBtn}>Подписаться</button>
                }
                  position="top left" modal>
                  {close => (
                      <div className={styles.contentWrap}>
                        <div className={styles.numberTitle}>Вы успешно подписаны на рассылку</div>
                        <a className={styles.close} onClick={close}>
                          &times;
                        </a>
                      </div>
                  )}
                </Popup>
              </form>
              <ul className={styles.socialMediaWrapMob}>
                <li className={styles.socialMediaBlockWrap}><a href="https://vk.com/wezom"><img src="/images/icons/vk-icon.svg" alt=""/></a></li>
                <li className={styles.socialMediaBlockWrap}><a href="https://www.facebook.com/wezom.company/"><img src="/images/icons/fb-icon.svg" alt=""/></a></li>
                <li className={styles.socialMediaBlockWrap}><a href="https://twitter.com/wezomcompany"><img src="/images/icons/twitter-icon.svg" alt=""/></a></li>
                <li className={styles.socialMediaBlockWrap}><a href="https://www.youtube.com/channel/UCMvO8a0ZaLBQD70yLUBjX3Q"><img src="/images/icons/youtube-icon.svg" alt=""/></a></li>
              </ul>
            </div>
            <div className={styles.colListWrap}>
              <div className={styles.footerCol}>
                <div className={styles.listHeader}>
                  <span className={styles.listHeaderTitle}>Блок ссылок 1</span>
                  </div>
                <ul className={styles.linksList}>
                  <li><a href="/">Ссылка 1</a></li>
                  <li><a href="/">Ссылка 2</a></li>
                  <li><a href="/">Ссылка 3</a></li>
                  <li><a href="/">Ссылка 4</a></li>
                </ul>
              </div>
              <div className={styles.footerCol}>
                <div className={styles.listHeader}>
                  <span className={styles.listHeaderTitle}>Блок 2</span>
                </div>
                <ul className={styles.linksList}>
                  <li><a href="/">Ссылка 1</a></li>
                  <li><a href="/">Ссылка 2</a></li>
                  <li><a href="/">Ссылка 3</a></li>
                  <li><a href="/">Ссылка 4</a></li>
                </ul>
              </div>
              <div className={styles.footerCol}>
                <div className={styles.listHeader}>
                  <span className={styles.listHeaderTitle}> Блок ссылок 3</span>
                 </div>
                <ul className={styles.linksList}>
                  <li><a href="/">Ссылка 1</a></li>
                  <li><a href="/">Ссылка 2</a></li>
                  <li><a href="/">Ссылка 3</a></li>
                  <li><a href="/">Ссылка 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerBottomWrap}>
            <div className={styles.footerBottomIn}>
              <div className={styles.mainColFooter}>
                <a href="/"><img src="/images/icons/brand-logo-footer.png" alt="" className={styles.footerLogo} /></a>
                <div className={styles.license}>© Copyrith 2017. Тестовое задание Wezom</div>
              </div>
              <div className={styles.footerBottomColWrap}>
                <ul className={classNames({
                  [styles.socialMediaWrap]: true,
                  [styles.displayNone]: true
                })}>
                  <li className={styles.socialMediaBlockWrap}><a href="https://vk.com/wezom"><img src="/images/icons/vk-icon.svg" alt=""/></a></li>
                  <li className={styles.socialMediaBlockWrap}><a href="https://www.facebook.com/wezom.company/"><img src="/images/icons/fb-icon.svg" alt=""/></a></li>
                  <li className={styles.socialMediaBlockWrap}><a href="https://twitter.com/wezomcompany"><img src="/images/icons/twitter-icon.svg" alt=""/></a></li>
                  <li className={styles.socialMediaBlockWrap}><a href="https://www.youtube.com/channel/UCMvO8a0ZaLBQD70yLUBjX3Q"><img src="/images/icons/youtube-icon.svg" alt=""/></a></li>
                </ul>
                <div className={styles.flexWrap}>
                  <a href="/"><img src="/images/icons/brand-logo-w.png" alt="" className={styles.companyLogo}/></a>
                  <div className={styles.companyInfo}>
                    <div className={styles.servicesProvided}>Разработка тестового</div>
                    <a href="/"><div className={styles.companyName}>Wezom Agency</div></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}