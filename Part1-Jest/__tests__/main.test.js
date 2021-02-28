const formatVolumeIconPath = require('../assets/scripts/main');

describe('volume icon', () => {
    test('is level 3', () => {
        expect(formatVolumeIconPath(88)).toMatch("3");
    });

    test('is level 2', () => {
        expect(formatVolumeIconPath(50)).toMatch('2');
    });

    test('is level 1', () => {
        expect(formatVolumeIconPath(1)).toMatch('1');
    });

    test('is level 0', () => {
        expect(formatVolumeIconPath(0)).toMatch('0');
    });
});