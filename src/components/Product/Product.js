import React, {Component} from 'react';
import ReactStars from 'react-rating-stars-component/dist/react-stars';

import styles from './Product.module.scss';

const ratingChanged = (newRating) => {
  console.log(newRating);
};

export default class Product extends Component {
  render() {
    return(
      <div className={styles.productWrap}>
        <span className={styles.markLabel}>Mark</span>
        <div className={styles.productName}>{this.props.productName}</div>
        <div className={styles.productInfoWrap}>
          <div className={styles.rateWrap}>
            <div className={styles.rate}>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={14}
                value={this.props.rate}
                activeColor="#ff8600"
                color="#a4a4a4"
                edit={false}
              />
            </div>
            <a className={this.props.reviewsAmount ? styles.reviews : styles.noReviews}>{this.props.reviewsAmount > 0 ? ('Отзывы (' + this.props.reviewsAmount + ')') : 'Без отзывов'  }</a>
          </div>
          <div className={styles.availableAmount}>В наличии: {this.props.available} шт.</div>
        </div>

        <div className={styles.productBaseInfoWrap}>
          <div className={styles.productImgWrap}>
            <img src={this.props.imgLink} alt=""/>
          </div>
          <div className={styles.labelsWrap}>
              {this.props.isSummer ?
                  <div className={styles.labelWrap}>
                      <img src="/images/icons/summer-label.svg" alt=""/>
                      <div className={styles.labelDescr}>Летняя</div>
                  </div> : false
              }
              {this.props.isForPassengerCars ?
                  <div className={styles.labelWrap}>
                      <img src="/images/icons/vehicle-label.svg" alt=""/>
                      <div className={styles.labelDescr}>Легковая</div>
                   </div> : false
              }
              {this.props.isNew ?
                  <div className={styles.labelWrap}>
                      <img src="/images/icons/new-label.svg" alt=""/>
                      <div className={styles.labelDescr}>Новая</div>
                  </div> : false
              }
          </div>

          <div className={styles.stickersWrap}>
              {this.props.isNew ? <img src="/images/icons/new-label.png" alt=""/> : false}
              {this.props.isHit ? <img src="/images/icons/hit-label.png" alt=""/> : false}
              {this.props.isInSale ? <img src="/images/icons/discount-label.png" alt=""/> : false}
          </div>
        </div>
        <div className={styles.productPriceWrap}>
          <div className={styles.currentPrice}>{this.props.price} <span>грн.</span></div>
            {this.props.oldPrice > 0 ? <div className={styles.oldPrice}>{this.props.oldPrice} <span>грн.</span></div> : false}
        </div>
        <button className={styles.buyBtn} onClick={this.props.cartCounterFunc.bind(this, this.props.id)}><img src="/images/icons/cart-buy-btn.svg" alt="" className={styles.cartIcon}/>Купить товар</button>
        <div className={styles.optionsWrap}>
          <div className={styles.optionsIn} onClick={this.props.compareItemFunc.bind(this, this.props.id)}><img src="/images/icons/compare-product.svg" alt="" />
              {this.props.isItemInCompare ? 'В сравнении' : 'Сравнить товар'}
          </div>
          <div className={styles.optionsIn} onClick={this.props.chooseItemFunc.bind(this, this.props.id)}><img src="/images/icons/choose-product.svg" alt=""/>
              {this.props.isItemChosen ? 'В избранном' : 'В избранное'}
            </div>
        </div>
      </div>
    )
  }
}