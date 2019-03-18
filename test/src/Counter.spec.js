const assert = require('power-assert');
const counter = require('../../src/Counter');

describe('src/Counter.jsのテスト', () => {
    it('Counterインスタンスは_countプロパティを持つ', () => {
        assert.equal(counter.hasOwnProperty('_count'), true);
    });
    it('_countプロパティの初期値は0である', () => {
        assert.equal(counter._count === 0, true);
    });
    it('Counterインスタンスはincrementメソッドを持つ', () => {
        assert.equal(typeof counter.increment === 'function', true);
    });
    it('incrementメソッドを実行すると_countの値が1増える', () => {
        counter.increment();
        assert.equal(counter._count === 1, true);
    });
    it('Counterインスタンスはdecrementメソッドを持つ', () => {
        assert.equal(typeof counter.decrement === 'function', true);
    });
    it('decrementメソッド実行すると_countの値が1減る', () => {
        assert.equal(counter._count === 1, true);
        counter.decrement();
        assert.equal(counter._count === 0, true);

    })
});