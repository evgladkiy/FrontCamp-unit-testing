import React from 'react';
import renderer from 'react-test-renderer';

import Spinner from './spinner';

describe('spinner component', () => {
    test('should show spinner', () => {
        const spinner = renderer.create(<Spinner />);
        expect(spinner.toJSON()).toMatchSnapshot();
    });
});
