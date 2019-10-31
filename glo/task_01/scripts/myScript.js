const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];


let employersNames = employers.filter((el => {
      return  el.length > 0 && el !== ''
    }));

employersNames = employersNames.map((item => {
  return  item.toLowerCase();
  }))

    console.log(employersNames);

    const sponsors = {
        cash: [40000, 5000, 30400, 12000],
        eu: ['SRL', 'PLO', 'J&K'],
        rus: ['RusAuto', 'SBO']
    };
 calcCash = (own) =>{
   //let total = own;
   let total = 0;
   own.map((el => total += el));
   return total;
}

 const money = calcCash(sponsors.cash);

 makeBusiness = (owner,  cash, emp, director = 'Victor') =>{
     const sumSponsors = `${sponsors.rus} ${sponsors.eu}, unexpected sponsor`;
     console.log(`'We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: 
     ${emp}`);
     console.log(`And we have a sponsors: ${sumSponsors}`);
     console.log(`Note. Be careful with  ${sponsors.eu[0]}. It's a huge risk.`);
 }

 makeBusiness('Sam',  money, employersNames,);