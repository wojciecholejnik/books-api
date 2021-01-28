const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('formatFullname', () => {

  it('should return an error if "fullName" arg is not a string or is empty', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
    expect(formatFullname()).to.equal('Error');

  });

  it('should return an error if the user specifies a text format other than <firstName> <lastName> ', () => {
    expect(formatFullname('firstName lastName errorTest')).to.equal('Error');
  });

  it('should return the correct formatting on : formatFullname("lORem ipsUM")', () => {
    expect(formatFullname('lORem ipsUM')).to.equal('Lorem Ipsum');
  });

});