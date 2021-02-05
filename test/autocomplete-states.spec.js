var expect    = require("chai").expect;

class State {
    constructor(abbrev, name) {
        this.abbrev = abbrev;
        this.name = name;
    }
}

var states = [
    new State("AL", "Alabama"),
    new State("MT", "Montana"),
    new State("AK", "Alaska"),
    new State("NE", "Nebraska"),
    new State("AZ", "Arizona"),
    new State("NV", "Nevada"),
    new State("AR", "Arkansas"),
    new State("NH", "New Hampshire"),
    new State("CA", "California"),
    new State("NJ", "New Jersey"),
    new State("CO", "Colorado"),
    new State("NM", "New Mexico"),
    new State("CT", "Connecticut"),
    new State("NY", "New York"),
    new State("DE", "Delaware"),
    new State("NC", "North Carolina"),
    new State("FL", "Florida"),
    new State("ND", "North Dakota"),
    new State("GA", "Georgia"),
    new State("OH", "Ohio"),
    new State("HI", "Hawaii"),
    new State("OK", "Oklahoma"),
    new State("ID", "Idaho"),
    new State("OR", "Oregon"),
    new State("IL", "Illinois"),
    new State("PA", "Pennsylvania"),
    new State("IN", "Indiana"),
    new State("RI", "RhodeIsland"),
    new State("IA", "Iowa"),
    new State("SC", "South Carolina"),
    new State("KS", "Kansas"),
    new State("SD", "South Dakota"),
    new State("KY", "Kentucky"),
    new State("TN", "Tennessee"),
    new State("LA", "Louisiana"),
    new State("TX", "Texas"),
    new State("ME", "Maine"),
    new State("UT", "Utah"),
    new State("MD", "Maryland"),
    new State("VT", "Vermont"),
    new State("MA", "Massachusetts"),
    new State("VA", "Virginia"),
    new State("MI", "Michigan"),
    new State("WA", "Washington"),
    new State("MN", "Minnesota"),
    new State("WV", "West Virginia"),
    new State("MS", "Mississippi"),
    new State("WI", "Wisconsin"),
    new State("MO", "Missouri"),
    new State("WY", "Wyoming"),
];

/*
    For the given text, return the names of the States that are considered matches.
    There should be no duplicates in the collection.
  A State is a match if it meets one of the following conditions.  Results should be returned
  in the priority listed below where one is highest priority and three is lowest.  If two matches
  are the same priority, those matches should be sorted alphabetically.
  1. Match exact abbreviation (Should be case insensitive)
  2. Match start of state name
  3. Match any part of state name
*/
function filterStates(textEntered) {
    let results =[];
    if(undefined!==textEntered && textEntered)
    results= this.states.filter((state) => {
       return (state.abbrev ===textEntered) || state.name.includes(textEntered);
    })
    return result;

}

describe('filterStates', function () {
    describe('edge cases', function () {
        it('should return an empty array when no input', function () {
            expect(filterStates()).to.eql([]);
        });
        it('should return an empty array when input null', function () {
            expect(filterStates(null)).to.eql([]);
        });
        it('should return an empty array when empty string', function () {
            expect(filterStates('')).to.eql([]);
        });
    });
    describe('valid input', function () {
        it('should return an empty array when no match', function () {
            expect(filterStates('ZZ')).to.eql([]);
        });
        it('should find the exact abbreviation match', function () {
            expect(filterStates('NE').slice()).to.eq("Nebraska");
        });
        it('should return states that start with the input text', function () {
            expect(filterStates('NE')).to.include.members(["Nebraska", "New Hampshire", "New Jersey", "New Mexico", "New York", "Nevada"])
        });
        it('should return states that contain the input text', function () {
            expect(filterStates('NE')).to.include.members(["Tennessee", "Nebraska", "New Hampshire", "New Jersey", "New Mexico", "New York", "Nevada", "Minnesota", "Maine", "Connecticut"])
        });
        it('should not contain duplicate items', function () {
            let results = filterStates('N');
            expect(results.length).to.eq(new Set(results).size);
        });
        it('should contain the right matches in the right order', function(){
            expect(filterStates('NE')).to.eql(["Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",  "Connecticut", "Maine", "Minnesota", "Tennessee"]);
        });
    });
});
