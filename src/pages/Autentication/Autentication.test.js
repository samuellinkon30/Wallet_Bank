import { render, screen, fireEvent } from '@testing-library/react';
import Autentication from './Autentication';


describe('showw input element', () => {
    it('Render form correctly', () =>{
        render(<Autentication />);
        const form_title = screen.getByText(/login/i);
        const user_input = screen.getByText(/user/i)
        const password_input = screen.getByText(/password/i)
        const submit_input = screen.getByText(/Login/i)


        expect(user_input).toBeInTheDocument();
        expect(password_input).toBeInTheDocument();
        expect(submit_input).toBeInTheDocument();
        expect(form_title).toBeInTheDocument();

    });

    it('All input is filled', () => {
        render(<Autentication/>);

        const user = screen.getByTestId(/input_name/i)
        
        fireEvent.change(user, { target : {value: 'samuel'}});

        expect(user.value).toBe('samuel');

        
    });


    
})