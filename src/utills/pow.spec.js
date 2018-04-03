import power from './pow';

describe('power function should process invalid first argument', () => {
    it('should throw the error if passed null in input', () => {
        expect(() => power(null, 2)).toThrow('Invalid input value');
    });

    it('should throw the error if passed undefined as first argument', () => {
        expect(() => power(undefined, 2)).toThrow('Invalid input value');
    });

    it('should throw the error if passed not number string as first argument test1', () => {
        expect(() => power('lorem', 2)).toThrow('Invalid input value');
    });

    it('should throw the error if passed not number string as first argument test2', () => {
        expect(() => power('123.123', 2)).toThrow('Invalid input value');
    });

    it('should throw the error if passed Date as first argument', () => {
        expect(() => power(new Date(), 2)).toThrow('Invalid input value');
    });

    it('should throw the error if passed Object as first argument', () => {
        expect(() => power({ a: 1 }, 2)).toThrow('Invalid input value');
    });

    it('should throw the error if passed not Array of Numbers as first argument test1', () => {
        expect(() => power(['asdsad'], 2)).toThrow('Invalid input value');
    });

    it('should throw the error if passed not Array of Numbers as first argument test2', () => {
        expect(() => power([0, 1, 2, 'asdsad'], 2)).toThrow('Invalid input value');
    });

    it('should throw the error if passed not Array of Numbers as first argument test3', () => {
        expect(() => power([null, undefined, new Date()], 2)).toThrow('Invalid input value');
    });

    it('should throw the error if passed not Array of Numbers as first argument test4', () => {
        expect(() => power([0, '1s', 2], 2)).toThrow('Invalid input value');
    });
});

describe('Power function should process invalid second argument', () => {
    it('should throw the error if argument is not an integer test1', () => {
        expect(() => power(2, 0.1)).toThrow('Invalid pow. Function can\'t process that power');
    });

    it('should throw the error if argument is not an integer test2', () => {
        expect(() => power(2, 3.5)).toThrow('Invalid pow. Function can\'t process that power');
    });

    it('should throw the error if argument is not an integer test3', () => {
        expect(() => power(2, -0.999)).toThrow('Invalid pow. Function can\'t process that power');
    });

    it('should throw the error if argument is not an integer test4', () => {
        expect(() => power(2, -1.01)).toThrow('Invalid pow. Function can\'t process that power');
    });

    it('should throw the error if argument is not an integer test5', () => {
        expect(() => power(2, -10.1)).toThrow('Invalid pow. Function can\'t process that power');
    });

    it('should throw the error if passed null in input', () => {
        expect(() => power(2, null)).toThrow('Invalid pow value');
    });

    it('should throw the error if passed undefined as first argument', () => {
        expect(() => power(2, undefined)).toThrow('Invalid pow value');
    });

    it('should throw the error if passed not number string as first argument test1', () => {
        expect(() => power(2, 'lorem')).toThrow('Invalid pow value');
    });

    it('should throw the error if passed not number string as first argument test2', () => {
        expect(() => power(2, '123.123')).toThrow('Invalid pow value');
    });

    it('should throw the error if passed Date as first argument', () => {
        expect(() => power(2, new Date())).toThrow('Invalid pow value');
    });
});

describe('power function should work correctly', () => {
    it('should elevate correctly to a zero power', () => {
        expect(power(2, 0)).toBe(1);
        expect(power(12, 0)).toBe(1);
        expect(power(413123, 0)).toBe(1);
        expect(power(-7, 0)).toBe(1);
        expect(power(-12391, 0)).toBe(1);
        expect(power(-3.25, 0)).toBe(1);
    });

    it('should elevate correctly to a positive power', () => {
        expect(power(2, 2)).toBe(4);
        expect(power(2, 10)).toBe(1024);
        expect(power(4, 4)).toBe(256);
        expect(power(7, 7)).toBe(823543);
        expect(power(91, 5)).toBe(6240321451);
        expect(power(3, 14)).toBe(4782969);
    });

    it('should elevate correctly to a negative power', () => {
        expect(power(2, -2)).toBe(0.25);
        expect(power(2, -10)).toBe(0.0009765625);
        expect(power(4, -4)).toBe(0.00390625);
        expect(power(5, -2)).toBe(0.04);
        expect(power(5, -1)).toBe(0.2);
        expect(power(10, -3)).toBe(0.001);
    });

    it('should elevate correctly an Array', () => {
        expect(power([2, 2, 2], -2)).toEqual([0.25, 0.25, 0.25]);
        expect(power([-2, -2, -2], 2)).toEqual([4, 4, 4]);
        expect(power([2, 2, 2], 2)).toEqual([4, 4, 4]);
        expect(power([2, 2, 2], -2)).toEqual([0.25, 0.25, 0.25]);
        expect(power(['2', 2, 2.0, '2.0'], -2)).toEqual([0.25, 0.25, 0.25, 0.25]);
        // expect(power(2, -10)).toBe(0.0009765625);
        // expect(power(4, -4)).toBe(0.00390625);
        // expect(power(5, -2)).toBe(0.04);
        // expect(power(5, -1)).toBe(0.2);
        // expect(power(10, -3)).toBe(0.001);
    });
});
