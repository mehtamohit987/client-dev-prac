import { expect } from 'chai';

describe('immutability', () => {
    describe('a number', () => {
        function increment(currentState) {
            return currentState + 1;
        }
        function increment2(currentState) {
            return ++currentState;
        }
        it('is immutable', () => {
            let state = 42;
            let nextState = increment(state);
            expect(nextState).to.equal(43);
            expect(state).to.equal(42);
        });
        it('is not immutable', () => {
            let state = 42;
            let nextState = increment2(state);
            expect(nextState).to.equal(43);
            expect(state).to.equal(43);
        });
    });
});