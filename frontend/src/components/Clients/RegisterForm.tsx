import React, { Component } from 'react';

class RegisterForm extends Component {
    constructor(props: string) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {    
        this.setState({value: e.target.value});  
    }

    handleSubmit(e: React.MouseEvent<HTMLInputElement>) {    
       
    }




    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default RegisterForm;
