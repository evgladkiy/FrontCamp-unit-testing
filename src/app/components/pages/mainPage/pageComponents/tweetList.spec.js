import React from 'react';
import { shallow } from 'enzyme';
import Immutable from 'immutable';

import  TweetsList  from './tweetsList';

describe('TweetsList component', () => {
    const tweets = Immutable.fromJS([
        {
            _id: '12',
            tweetAuthor: 'Pansy Atkinson',
            email: 'pansyatkinson@verbus.com',
            tweetText: 'Lorem duis magna officia ullamco ea anim qui quis proident amet incididunt esse voluptate minim cupidatat deserunt reprehenderit magna labore qui nostrud occaecat tempor',
            tweetDate: '2017 12 20',
            likes: [],
            retweets: [],
            comments: [],
        },{
            _id: '32',
            tweetAuthor: 'Pansy Atkinson',
            email: 'pansyatkinson@verbus.com',
            tweetText: 'Lorem duis magna officia ullamco ea anim qui quis proident amet incididunt esse voluptate minim cupidatat deserunt reprehenderit magna labore qui nostrud occaecat tempor',
            tweetDate: '2017 12 20',
            likes: [],
            retweets: [],
            comments: [],
        }
    ]);

    test('should display tweet list', () => {
        const tweetsList = shallow(<TweetsList tweets={tweets} />);
        expect(tweetsList.find('Connect(Tweet)')).toHaveLength(2);
    });
});
