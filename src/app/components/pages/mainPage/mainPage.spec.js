import React from 'react';
import { shallow } from 'enzyme';

import { MainPage } from './mainPage';

describe('MainPage component', () => {
    const  mainPage = shallow(<MainPage isAuthenticated={true} fetchUserData={jest.fn()} />);

    test('should display correct main page body for authenticated users', () => {
        expect(mainPage.find('Connect(MainPageBody)').exists()).toEqual(true);

    });

    test('should display correct main page body for unauthenticated users', () => {
        mainPage.setProps({ isAuthenticated: false });
        expect(mainPage.find('Connect(MainPageBody)').exists()).toEqual(false);
        expect(mainPage.find('NotAuthenticatedBody').exists()).toEqual(true);
    });
});
