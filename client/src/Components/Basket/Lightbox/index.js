import React, { Component } from 'react';
import './style.css';

/** MODULE **/
import Dialog from '@material-ui/core/Dialog';

/** IMG **/
import CloseModalImg from '../../../Static/img/basket/delete_product.svg';


export default class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            telephone: "",
            successSend: false,
            openModal: false,
        }
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    closeModal() {
        this.setState({openModal: false});
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            openModal: nextProps.open,
        });
    }

    render() {
        const {openModal} = this.state;
        return (
            <Dialog maxWidth="sm" fullWidth={true} open={openModal} className="form_modal">
                <section className="content_form_modal">

                    <div className="flex title_modal">
                        <h4 className="orange_color">Заказ</h4>
                        <img
                            src={CloseModalImg}
                            alt="close"
                            onClick={() => this.closeModal()}
                        />
                    </div>

                    <form className="form_suggestion" style={{
                        display: !this.state.successSend ? 'flex' : 'none'
                    }}>
                        <section className="input_box">
                            <label htmlFor="">Как можно к вам обращаться?</label>
                            <input
                                value={this.state.name}
                                type="text"
                                placeholder="ФИО"
                                onChange={(e) => {
                                    this.setState({name: e.target.value})
                                }}
                            />
                        </section>
                        <section className="input_box">
                            <label htmlFor="">Введите Ваш номер телефона</label>
                            <input
                                value={this.state.telephone}
                                type="text"
                                placeholder="Номер телефона"
                                onChange={(e) => {
                                    this.setState({telephone: e.target.value})
                                }}
                            />
                        </section>
                        <section className="input_box">
                            <label htmlFor="">Введите Вашу электронную почту</label>
                            <input
                                value={this.state.email}
                                type="email"
                                placeholder="E-mail"
                                onChange={(e) => {
                                    this.setState({email: e.target.value})
                                }}
                            />
                        </section>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                // if (this.validateEmail(this.state.email)) {
                                    this.setState({successSend: true})
                                // }
                            }}
                        >Заказать
                        </button>
                    </form>
                    <section className="success_form_sent" style={{
                        display: this.state.successSend ? 'flex' : 'none'
                    }}>
                        <p>Спасибо за Ваш заказ! Оператор свяжется с вами
                            в течение 10 - 20 минут для уточнения
                            дополнительной информации. Приятного аппетита!</p>
                        <button onClick={() => this.closeModal()}>
                            Закрыть
                        </button>
                    </section>

                </section>
            </Dialog>
        )
    }
}