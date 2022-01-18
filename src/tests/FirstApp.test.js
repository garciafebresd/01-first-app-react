import React from 'react'
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import FirstApp from '../FirstApp';

describe('Testing component <FirstApp />', () => {

    // test('should show the message and subtitle', () => {
    //     const greeting = 'Hola, Soy Goku';
    //     const {getByText} = render(<FirstApp greeting= { greeting } />)
    //     expect(getByText(greeting)).toBeInTheDocument();
    // });

    test('should show the message and subtitle', () => {
        const greeting = 'Hola, Soy Goku';
        const wrapper = shallow(<FirstApp greeting= { greeting } />);

        expect(wrapper).toMatchSnapshot();
    });
    
});
