import React from 'react'
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import FirstApp from '../FirstApp';

describe('Testing component <FirstApp />', () => {

    test('should show the message and subtitle', () => {
        
        const greeting = 'Hola, Soy Goku';
        // const subtitle = 'Subtitle para prueba';

        const {getByText} = render(<FirstApp greeting= { greeting } />)

        expect(getByText(greeting)).toBeInTheDocument();
    });
    
});
