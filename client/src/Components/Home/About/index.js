import React, {Component} from 'react';
import './style.css';
import logoImg from '../../../Static/img/logo.svg';

export default class About extends Component {
    render() {
        return (
            <div className="my_container about">

                <div className="about_box">
                    <img src={logoImg} alt="logo" className="logo_about"/>
                    <h6>Ресторан пиццерии Подберег Pizza</h6>
                    <p>Первая пиццерия "Подберег Pizza" была открыта в 2001 году на ул.Свердлова, д.90.
                        Мы долго оттачивали наше мастерство, учились, пробовали, путешествовали и создали
                        идеальное тесто для неповторимой пиццы.
                    </p>
                </div>


                <div className="about_box">
                    <h6>Ресторан пиццерии Подберег Pizza</h6>
                    <p>
                        Сейчас в Екатеринбурге один ресторан пиццерии.
                        Он успешно работает, каждый день встречает гостей и радует их самой вкусной пиццей.
                        Гармония вкуса создается благодаря незыблемым правилам нашей компании:<br/>
                        - Натуральные и свежие ингредиенты;<br/>
                        - Свежеприготовленное тесто, замешанное и раскатанное вручную. Никакой заморозки;<br/>
                        - Профессиональные пиццайоло, настоящие фанаты своего дела;<br/>
                        - Пицца всегда подается горячей;<br/>
                        - Быстрая доставка пиццы.
                    </p>
                </div>



                <div className="about_box">
                    <h6>60 МИНУТ ИЛИ ПИЦЦА БЕСПЛАТНО</h6>
                    <p>
                        Если мы не успеем доставить любые продукты, кроме сувенирной продукции,
                        в течение 60 минут, курьер подарит вам сертификат на большую пиццу.
                        <br/><br/>
                        Возим заказы всего от <i className="orange_color">590</i> руб.
                        <br/><br/>
                        Принимаем различные способы оплаты:<br/>
                        - Наличными курьеру. Простой и привычный способ.<br/>
                        - Картой курьеру. Удобный современный способ.
                    </p>
                </div>


                <div className="about_box">
                    <h6>Юридические реквизиты</h6>
                    <p>
                        Общество с ограниченной ответственностью «Подберег» <br/>
                        ИНН 6672153087 КПП 667201001<br/>
                        Юр. адрес: г. Екатеринбург, Свердлова, 90 р/сч 40 70 28 10 51 64 80 03 56 8<br/>
                        в Уральский Банк СБ РФ БИК 046577674<br/>
                        к/сч 30 10 18 10 50 00 00 00 06 74<br/>
                        ОКПО 15053683 ОКВЭД 55.30 <br/>
                        ОГРН 1036604403770 <br/>
                        Телефон: +7 (343) 818 02-00<br/>
                        E-mail: <i className="orange_color">info@podbereg.pizza.com</i>
                    </p>
                </div>
            </div>
        )
    }
}