import Empl from './empl';
import Spons from './sponsors';

const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const item = new Empl(employers);
const employersNames = item.employersNames();


const secondItem = new Spons(sponsors.cash);
const money = secondItem.calcCash();

class FinalClass{
    constructor(owner, money, emp, director){
        
        this.money = money;
        this.owner = owner;
        this.emp = emp;
        this.director = director;
    }
    makeBusiness () {
        const sumSponsors = `${sponsors.rus} ${sponsors.eu}, unexpected sponsor`;
        console.log(`'We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.money}. And our employers: 
        ${this.emp}`);
        console.log(`And we have a sponsors: ${sumSponsors}`);
        console.log(`Note. Be careful with  ${sponsors.eu[0]}. It's a huge risk.`);
    }
}

 const result = new FinalClass('Sam',  money, employersNames,'Victor');
 result.makeBusiness();