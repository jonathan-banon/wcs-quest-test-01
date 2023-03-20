import getDisplayName from './getDisplayName'

describe('getDisplayName', () => {
    describe('when no specified city',() => {
        it('return quesiton and full name', () => {
            expect(getDisplayName('Jane', 'Doe')).toBe('[?] Jane Doe')
        })
    })
    describe('when specified city', () => {
        it('return city and full name', () => {
            expect(getDisplayName('John', 'Doe', 'Paris')).toBe('[Paris] John Doe')
        })
    })
        describe('when CV',() => {
        it('return CV', () => {
            expect(getDisplayName('Jane', 'Doe', 'Paris', 'cv')).toBe('[Paris] Jane Doe - cv')
        })
    })
    describe('when no CV', () => {
        it('return without CV', () => {
            expect(getDisplayName('John', 'Doe', 'Paris', 'no-cv')).toBe('[Paris] John Doe')
        })
    })
})