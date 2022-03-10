import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor(props: string) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(e: React.MouseEvent<HTMLInputElement>) {
        const url: string = "http//localhost/5000/clients";

        const dataClients = [];

        //     let getData = () => {
        //         this.(url)
        //             .then(res => dataClients.push(res.data))
        //             .catch(err => console.log(err.data));
        //     }
    }




    render() {
        return (
            <form>
                <select>
                    <option value="Mr">Monsieur</option>
                    <option value="Mme">Madame</option>
                </select>
                <input type="text" placeholder='Nom'></input>
                <input type="text" placeholder='Prénom'></input>
                <input type="text" placeholder='Email'></input>
                <input type="text" placeholder='Adresse'></input>
                <input type="text" placeholder='Téléphone'></input>
                <button type="submit">Envoyer</button>
            </form>
        );
    }
}

export default RegisterForm;
