


class Spons{
    constructor(own){
        this.own = own;
    
    }
    calcCash(){
   let total = 0;
   this.own.map((el => total += el));
   return total;
    }
}

export default Spons;
