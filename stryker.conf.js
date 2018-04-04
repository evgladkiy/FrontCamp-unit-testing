module.exports = function(config) {
    config.set({
        files: [
            {
                pattern: 'src/utils/*.js',
                mutated: true,
                included: false,
            },
            'src/utils/*.js',
        ],
        testRunner: 'jest',
        mutator: 'javascript',
        babelrcFile: './.babelrc',
        transpilers: ['babel'],
        reporter: ['html', 'progress'],
        jest: {
            config: {},
        },
        coverageAnalysis: 'off',
    });
};
