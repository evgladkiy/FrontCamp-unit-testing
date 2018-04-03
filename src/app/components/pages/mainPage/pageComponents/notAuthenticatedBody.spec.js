import React from 'react';
import renderer from 'react-test-renderer';

import NotAuthenticatedBody from './notAuthenticatedBody';

describe('NotAuthenticatedBody component', () => {
    test('should show NotAuthenticatedBody', () => {
        const notAuthenticatedBody = renderer.create(<NotAuthenticatedBody />);
        expect(notAuthenticatedBody.toJSON()).toMatchSnapshot();
    });
});
