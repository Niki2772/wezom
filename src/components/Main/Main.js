import React, {Component} from 'react';
import Popup from 'reactjs-popup';
import InputMask from 'react-input-mask';

import Search from '../Search/Search';
import Tabs from '../Tabs/Tabs';
import SelectForTabs from '../SelectForTabs/SelectForTabs';
import Product from '../Product/Product';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import styles from './main.module.scss'

const typeOfVehicle = [
  { value: 'Sedan', label: 'Sedan' },
  { value: 'SUV', label: 'SUV' },
  { value: 'Pickup', label: 'Pickup' },
  { value: 'Mini Van', label: 'Mini Van' },
]
const season = [
  { value: 'Summer', label: 'Summer' },
  { value: 'Winter', label: 'Winter' },
  { value: 'All-season', label: 'All-season' },
]
const drivingStyle= [
  { value: 'Classical', label: 'Classical' },
  { value: 'Sport', label: 'Sport' },
  { value: 'Aggressive', label: 'Aggressive' },
]
const tyreDiameter = [
  { value: '16', label: '16' },
  { value: '17', label: '17' },
  { value: '18', label: '18' },
  { value: '19', label: '19' },
  { value: '20', label: '20' },
]
const tyreWidth = [
  { value: '165', label: '165' },
  { value: '175', label: '175' },
  { value: '185', label: '185' },
  { value: '195', label: '195' },
  { value: '205', label: '205' },
]
const countryManufacturer = [
  { value: 'USA', label: 'USA' },
  { value: 'Germany', label: 'Germany' },
  { value: 'Poland', label: 'Poland' },
  { value: 'Italy', label: 'Italy' },
]
const year = [
  { value: '2020', label: '2020' },
  { value: '2019', label: '2019' },
  { value: '2018', label: '2018' },
  { value: '2017', label: '2017' },
]

function DateInput(props) {
  return <InputMask mask="+38(099)999-99-99" onChange={props.onChange} value={props.value} />;
}

export default class Main extends Component{
  state = {
    cart: [],
    inCompare: [],
    chosenItems:[],
    typeOfVehicleValue:  null,
    seasonValue: null,
    drivingStyleValue: null,
    tyreDiameterValue: null,
    tyreWidthValue: null,
    countryManufacturerValue: null,
    yearValue: null,
    priceFromValue: null,
    priceToValue: null,
    products: [
      {id: 0, name: 'Bridgestone Blizzak DM-V3 255/50 R19 107T XL', isItemInCompare: false, isItemChosen: false, price: 799, oldPrice: 1297, rate: 2, reviews: 2, available: 23, imgLink: '/images/products/wheel1.png', isSummer: true, isHit: false, isForPassengerCars: true, isNew: false, isInSale: true},
      {id: 1, name: 'Continental ContiPremiumContact 2 225/60 R16 98W', isItemInCompare: false,  isItemChosen: false,  price: 1077, oldPrice: 1582, rate: 3, reviews: 0, available: 15, imgLink: '/images/products/wheel2.png', isSummer: true, isHit: true, isForPassengerCars: true, isNew: true, isInSale: true},
      {id: 2, name: 'Michelin Pilot Super Sport 345/30 R20 106Y', isItemInCompare: false,  isItemChosen: false,  price: 1575, oldPrice: 1777, rate: 4, reviews: 7, available: 10, imgLink: '/images/products/wheel3.png', isSummer: true, isHit: false, isForPassengerCars: true, isNew: true, isInSale: true},
      {id: 3, name: 'Michelin Pilot Alpin PA5 245/35 R21 96W XL', isItemInCompare: false,  isItemChosen: false,  price: 1777, oldPrice: 0, rate: 5, reviews: 1, available: 7, imgLink: '/images/products/wheel4.png', isSummer: false, isHit: true, isForPassengerCars: true, isNew: true, isInSale: false}
    ]
  }

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (type, value) => {
    this.setState({
      [type]: value,
    });
  }
  onInput = ( propName, event) => {
    this.setState({
      [propName]: event.target.value,
    })
  }
  onClearFilters = () => {
    this.setState({
      typeOfVehicleValue:  null,
      seasonValue: null,
      drivingStyleValue: null,
      tyreDiameterValue: null,
      tyreWidthValue: null,
      countryManufacturerValue: null,
      yearValue: null,
      priceFromValue: '',
      priceToValue: '',
    })
    }

  cartCounterFunc = (id, event) => {
    event.preventDefault();
    const item = this.state.products
        .find((item) => item.id === id)
    this.setState({
      cart: [...this.state.cart, item]
    })
  }

  compareItemFunc = (id, event) => {
    event.preventDefault();
    const item = this.state.products
        .find((item) => item.id === id)
    const products = this.state.products.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isItemInCompare: !item.isItemInCompare
        }
      }
      return item
    })
    this.setState({
      inCompare: [...this.state.inCompare, item],
      products: products
    })
  }

  chooseItemFunc = (id, event) => {
    event.preventDefault();
    const item = this.state.products
        .find((item) => item.id === id)
    const products = this.state.products.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isItemChosen: !item.isItemChosen
        }
      }
      return item
    })
    this.setState({
      chosenItems: [...this.state.chosenItems, item],
      products: products
    })
  }

  render() {
    return(
      <main className={styles.mainContentWrap}>
        <div className={styles.container}>
          <div className={styles.filterWrap}>
            <div className={styles.filterWrapColLeft}>
              <img src="/images/icons/brand-logo.svg" alt="" className={styles.brandLogo}/>
              <DropdownMenu/>
            </div>
            <div className={styles.filterWrapColRight}>
              <div className={styles.optionsPanelWrap}>
                <div className={styles.contactInfoWrap}>
                    <div className={styles.phoneNumbersWrap}>
                      <a href="callto:+380 98 170 00 740" className={styles.phoneNumber}>+380 98 170 00 740</a>
                      <a href="callto:+380 98 170 00 740" className={styles.phoneNumber}>+380 98 170 00 740</a>
                    </div>
                  <Popup  trigger={
                    <button className={styles.callBtn}>
                    <img src="/images/icons/call-icon.svg" alt="" className={styles.callIcon}/>
                    Перезвонить мне
                  </button>}
                          position="top left" modal>
                    {close => (
                        <div className={styles.contentWrap}>
                          <div className={styles.numberTitle}>Оставьте свой номер и мы свяжемся с Вами</div>
                          <form>
                            <InputMask mask="+38(099)999-99-99"
                                       type="tel"
                                       className={styles.phoneInput}
                                       maskPlaceholder="_" />
                            <button type="submit" className={styles.sendNumberBtn}>Отправить</button>
                          </form>

                          <a className={styles.close} onClick={close}>
                            &times;
                          </a>
                        </div>
                    )}
                  </Popup>
                </div>
                <ul className={styles.userActions}>
                  <li className={styles.userAction}><a href="/">
                    {this.state.inCompare.length > 0 ?
                        <div className={styles.counterWrap}>
                          <div className={styles.counter}>
                            {this.state.inCompare.length}
                          </div>
                        </div> : false
                    }
                    <img src="/images/icons/compare-icon.svg" alt="" className={styles.userActionIcon}/>
                    <div>Сравнение</div>
                  </a></li>
                  <li className={styles.userAction}><a href="/">
                        {this.state.chosenItems.length > 0 ?
                        <div className={styles.counterWrap}>
                          <div className={styles.counter}>
                            {this.state.chosenItems.length}
                          </div>
                        </div> : false
                    }
                    <img src="/images/icons/chosen-icon.svg" alt="" className={styles.userActionIcon}/>
                    <div>Избранное</div>
                  </a></li>
                  <li className={styles.userAction}><a href="/">
                    <div className={styles.counterWrap}>
                      <div className={styles.counter}>
                        {this.state.cart.length}
                      </div>
                    </div>
                    <img src="/images/icons/cart-icon.svg" alt="" className={styles.userActionIcon}/>
                    <div>Корзина</div>
                  </a></li>
                </ul>
              </div>
              <Search/>
              <Popup/>

              <Tabs>
                <div label="Ссылка 1"  icon={<img src="/images/icons/car-icon.svg" alt="" className="icon"/>}>
                  <div className="innerTabs">
                    <Tabs>
                      <div label="Filter 1">
                        <div className="filtersWrap">
                            <SelectForTabs
                                options={typeOfVehicle}
                                value={this.state.typeOfVehicleValue}
                                onChange={this.onChange.bind(this, 'typeOfVehicleValue')}
                                placeholder="Type of vehicle"
                            />
                          <SelectForTabs
                              options={season}
                              value={this.state.seasonValue}
                              onChange={this.onChange.bind(this, 'seasonValue')}
                              placeholder="Season"
                          />
                          <SelectForTabs
                              options={tyreDiameter}
                              value={this.state.tyreDiameterValue}
                              onChange={this.onChange.bind(this, 'tyreDiameterValue')}
                              placeholder="Tyre diameter"
                          />
                          <SelectForTabs
                              options={drivingStyle}
                              value={this.state.drivingStyleValue}
                              onChange={this.onChange.bind(this, 'drivingStyleValue')}
                              placeholder="Driving style"
                          />
                          <SelectForTabs
                              options={tyreWidth}
                              value={this.state.tyreWidthValue}
                              onChange={this.onChange.bind(this, 'tyreWidthValue')}
                              placeholder="Tyre width"
                          />
                          <div className="priceFilterWrap">
                            <div className="price">Цена</div>
                            <form action="" className="formWrap">
                              <div className="inputWrap">
                                <input type="number"  min="500" step="500" className="inputPrice"
                                       onInput={this.onInput.bind(this, 'priceFromValue')}
                                       value={this.state.priceFromValue}
                                       placeholder="from"
                                />
                                <div className="line"/>
                              </div>
                              <div className="inputWrap">
                                <input type="number"  min="500" step="500"  className="inputPrice"
                                       value={this.state.priceToValue}
                                       onInput={this.onInput.bind(this, 'priceToValue')}
                                       placeholder="to"
                                />
                                <div className="line"/>
                              </div>
                            </form>
                          </div>
                        </div>

                        <div className={styles.btnsWrap}>
                          <button className="innerTabBtn red" onClick={this.onClearFilters}>
                            <img src="/images/icons/close-icon.svg" alt="" class="closeIcon"/>
                            Очистить фильтр</button>
                          <button className="innerTabBtn orange">Применить фильтр</button>
                        </div>
                      </div>
                      <div label="Filter 2" >
                        <div className="filtersWrap">
                          <SelectForTabs
                              options={typeOfVehicle}
                              value={this.state.typeOfVehicleValue}
                              onChange={this.onChange.bind(this, 'typeOfVehicleValue')}
                              placeholder="Type of vehicle"
                          />
                          <SelectForTabs
                              options={season}
                              value={this.state.seasonValue}
                              onChange={this.onChange.bind(this, 'seasonValue')}
                              placeholder="Season"
                          />
                          <SelectForTabs
                              options={tyreDiameter}
                              value={this.state.tyreDiameterValue}
                              onChange={this.onChange.bind(this, 'tyreDiameterValue')}
                              placeholder="Tyre diameter"
                          />
                          <SelectForTabs
                              options={drivingStyle}
                              value={this.state.drivingStyleValue}
                              onChange={this.onChange.bind(this, 'drivingStyleValue')}
                              placeholder="Driving style"
                          />
                          <SelectForTabs
                              options={tyreWidth}
                              value={this.state.tyreWidthValue}
                              onChange={this.onChange.bind(this, 'tyreWidthValue')}
                              placeholder="Tyre width"
                          />
                         <SelectForTabs
                              options={countryManufacturer}
                              value={this.state.countryManufacturerValue}
                              onChange={this.onChange.bind(this, 'countryManufacturerValue')}
                              placeholder="Year"
                          />
                          <SelectForTabs
                              options={year}
                              value={this.state.yearValue}
                              onChange={this.onChange.bind(this, 'yearValue')}
                              placeholder="Tyre width"
                          />
                          <div className="priceFilterWrap">
                            <div className="price">Цена</div>
                            <form action="" className="formWrap">
                              <div className="inputWrap">
                                <input type="number"  min="500" step="500" className="inputPrice"
                                       onInput={this.onInput.bind(this, 'priceFromValue')}
                                       value={this.state.priceFromValue}
                                       placeholder="from"
                                />
                                <div className="line"/>
                              </div>
                              <div className="inputWrap">
                                <input type="number"  min="500" step="500"  className="inputPrice"
                                       value={this.state.priceToValue}
                                       onInput={this.onInput.bind(this, 'priceToValue')}
                                       placeholder="to"
                                />
                                <div className="line"/>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className={styles.btnsWrap}>
                          <button className="innerTabBtn red" onClick={this.onClearFilters}>
                            <img
                              src="/images/icons/close-icon.svg" alt=""
                              className="closeIcon"/>
                              Очистить фильтр
                          </button>
                          <button className="innerTabBtn orange">Применить фильтр</button>
                        </div>
                      </div>
                    </Tabs>
                  </div>
                </div>
                <div label="Ссылка 2" icon={<img src="/images/icons/truck-icon.svg" alt="" className="icon"/>}>
                  <span>Ссылка 2</span>
                </div>
                <div label="Ссылка 3" icon={<img src="/images/icons/wheel-icon.svg" alt="" className="icon"/>}>
                  <span>Ссылка 3</span>
                </div>
                <div label="Ссылка 4" icon={<img src="/images/icons/oil-icon.svg" alt="" className="icon"/>}>
                  <span>Ссылка 4</span>
                </div>
                <div label="Ссылка 5" icon={<img src="/images/icons/accumulator-icon.svg" alt="" className="icon"/>}>
                 <span>Ссылка 5</span>
                </div>
              </Tabs>
            </div>
          </div>

          <div className={styles.goodsWrap}>
            <div className={styles.goodsTitleWrap}>
              <div className={styles.goodsTitleIn}><div className={styles.goodsTitle}>Карточки товаров</div></div>
              <a href="/" className={styles.goodsLink}>Ссылка в каталог <img src="/images/icons/arrow-right-icon.svg" alt="" className={styles.arrowRight}/></a>
            </div>
            <div className={styles.goodsIn}>
              {this.state.products.map((item, index)=>
                  <Product
                      key={item.id}
                      id={item.id}
                      price={item.price}
                      oldPrice={item.oldPrice}
                      isItemInCompare={item.isItemInCompare}
                      isItemChosen={item.isItemChosen}
                      rate={item.rate}
                      reviewsAmount={item.reviews}
                      available={item.available}
                      imgLink={item.imgLink}
                      productName={item.name}
                      isSummer={item.isSummer}
                      isHit={item.isHit}
                      isForPassengerCars={item.isForPassengerCars}
                      isNew={item.isNew}
                      isInSale={item.isInSale}
                      cartCounterFunc={this.cartCounterFunc}
                      compareItemFunc={this.compareItemFunc}
                      chooseItemFunc={this.chooseItemFunc}
                  />
              )}
            </div>
          </div>
        </div>
      </main>
    )
  }
}