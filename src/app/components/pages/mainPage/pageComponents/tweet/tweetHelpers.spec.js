import { getTweetDate, getNickName, getTweetText } from './tweetHelpers';

describe('getTweetText', () => {
    it('getTweetText should return capitalized text 1', () => {
        expect(getTweetText('lorem vasia pixel')).toBe('Lorem vasia pixel');
    });

    it('getTweetText should return capitalized text 2', () => {
        expect(getTweetText('Lorem vasia pixel')).toBe('Lorem vasia pixel');
    });
});

describe('getNickName', () => {
    it('getNickName should return correct nickname from email', () => {
        expect(getNickName('vasia.pupkin@gmail.com')).toBe('@vasia.pupkin');
    });

    it('getNickName should return capitalized text 2', () => {
        expect(getNickName('luciafarley@verbus.com')).toBe('@luciafarley');
    });
});

describe('getTweetDate', () => {
    it('getTweetDate should return correct date in format "dd MMMM"', () => {
        expect(getTweetDate(new Date(2017, 10, 31))).toBe('1 December');
        expect(getTweetDate(new Date(2018, 4, 12))).toBe('12 May');
    });
});

