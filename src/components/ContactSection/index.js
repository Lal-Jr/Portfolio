import React, {useState }from 'react';
import { ContactContainer, Title, Content, Button, Label, Input, Form, FormField } from './ContactSection.styles.jsx';
import FooterContainer from '../Footer/index.js';

function ContactSection(){
   
    const [, setIfSubmit] = useState(true);

    
    return (
        <>
            <ContactContainer id='contact'>
                <Title>
                    Contact
                </Title>
                <Content className="contact-form row">
                    <Form onSubmit={setIfSubmit}>
                        <FormField className="form-field">
                            <Input id="name" className="input-text js-input" type="text" required /> 
                                <Label className="label" for="name">Name</Label>
                        </FormField>
                        <FormField className="form-field">
                            <Input id="email" className="input-text js-input" type="email" required />
                                <Label className="label" for="email">E-mail</Label>
                        </FormField>
                        <FormField className="form-field">
                            <Input id="message" className="input-text js-input" type="text" required />
                                <Label className="label" for="message">Message</Label>
                        </FormField>
                        <FormField className="form-field">
                            <Button className="submit">
                                SUBMIT 
                            </Button>
                        </FormField>
                    </Form>
                </Content>
                <FooterContainer />
            </ContactContainer>
        </>
    );
}

export default ContactSection;


