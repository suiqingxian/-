import { expect, AssertionError } from 'chai';
import { cutRod, memoizedCutRod, buttonUPCutRod } from '../../dynamic-programming/cut-rod';

describe('动态规划', () => {

    describe('钢条切割', () => {
        it('简单递归实现', () => {         
            expect(1).to.be.deep.equal(cutRod(1));
            expect(5).to.be.deep.equal(cutRod(2));
            expect(8).to.be.deep.equal(cutRod(3));
            expect(10).to.be.deep.equal(cutRod(4));
            expect(13).to.be.deep.equal(cutRod(5));
            expect(17).to.be.deep.equal(cutRod(6));
            expect(18).to.be.deep.equal(cutRod(7));
            expect(22).to.be.deep.equal(cutRod(8));
            expect(25).to.be.deep.equal(cutRod(9));
            expect(30).to.be.deep.equal(cutRod(10));
            expect(31).to.be.deep.equal(cutRod(11));
            expect(35).to.be.deep.equal(cutRod(12));
            expect(60).to.be.deep.equal(cutRod(20));
            expect(90).to.be.deep.equal(cutRod(30));

        });

        it('top-down with memoization', () => {         
            expect(1).to.be.deep.equal(memoizedCutRod(1));
            expect(5).to.be.deep.equal(memoizedCutRod(2));
            expect(8).to.be.deep.equal(memoizedCutRod(3));
            expect(10).to.be.deep.equal(memoizedCutRod(4));
            expect(13).to.be.deep.equal(memoizedCutRod(5));
            expect(17).to.be.deep.equal(memoizedCutRod(6));
            expect(18).to.be.deep.equal(memoizedCutRod(7));
            expect(22).to.be.deep.equal(memoizedCutRod(8));
            expect(25).to.be.deep.equal(memoizedCutRod(9));
            expect(30).to.be.deep.equal(memoizedCutRod(10));
            expect(31).to.be.deep.equal(memoizedCutRod(11));
            expect(35).to.be.deep.equal(memoizedCutRod(12));
            expect(60).to.be.deep.equal(memoizedCutRod(20));
            expect(90).to.be.deep.equal(memoizedCutRod(30));

        });

        it('button up cut rod', () => {         
            expect(1).to.be.deep.equal(buttonUPCutRod(1));
            expect(5).to.be.deep.equal(buttonUPCutRod(2));
            expect(8).to.be.deep.equal(buttonUPCutRod(3));
            expect(10).to.be.deep.equal(buttonUPCutRod(4));
            expect(13).to.be.deep.equal(buttonUPCutRod(5));
            expect(17).to.be.deep.equal(buttonUPCutRod(6));
            expect(18).to.be.deep.equal(buttonUPCutRod(7));
            expect(22).to.be.deep.equal(buttonUPCutRod(8));
            expect(25).to.be.deep.equal(buttonUPCutRod(9));
            expect(30).to.be.deep.equal(buttonUPCutRod(10));
            expect(31).to.be.deep.equal(buttonUPCutRod(11));
            expect(35).to.be.deep.equal(buttonUPCutRod(12));
            expect(60).to.be.deep.equal(buttonUPCutRod(20));
            expect(90).to.be.deep.equal(buttonUPCutRod(30));

        });

    });

})