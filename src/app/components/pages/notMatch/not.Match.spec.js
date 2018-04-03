import React from 'react';
import { shallow } from 'enzyme';
import NotMatch from './notMatch';

describe('notMatchPage component', () => {
    test('should show correct year', () => {
        const notMatchPage = shallow(<NotMatch />);

        expect(notMatchPage.find('.page-not-found').text()).toEqual('Page not found ...');
    });
});
