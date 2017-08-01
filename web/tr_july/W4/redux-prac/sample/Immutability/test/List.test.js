import { expect } from 'chai';
import { List } from 'immutable';
describe('immutability', () => {
    // ...
    describe('A List', () => {
        function addMovie(currentState, movie) {
            return currentState.push(movie);
        }
        it('is immutable', () => {
            let state = List.of('Trainspotting', '28 Days Later');
            let nextState = addMovie(state, 'Sunshine');
            expect(nextState).to.equal(List.of(
                'Trainspotting',
                '28 Days Later',
                'Sunshine'
            ));
            expect(state).to.equal(List.of(
                'Trainspotting',
                '28 Days Later'
            ));
        });
        it('is not immutable', () => {
            let state = ['Trainspotting', '28 Days Later'];
            let nextState = addMovie(state, 'Sunshine');
            var result = ['Trainspotting', '28 Days Later','Sunshine'];
            console.log(`nextstate is ${nextState}`);
            console.log(`state is ${state}`);
            expect(state.length==result.length &&state.every((v,i)=> v === result[i])).to.be.true;
        });
    });
});