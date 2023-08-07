import { Math, subtract } from '../utils/math'

describe('sample test suite', () => {
    it('should pass', () => {
        expect(true).toBe(true)
    })

    it('should calculate', () => {
        expect(Math.add(1, 2)).toBe(3)
        expect(subtract(2, 1)).toBe(1)
    })
})
