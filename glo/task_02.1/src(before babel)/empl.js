class Empl{
    constructor(arr){
        this.arr = arr;
    }
    employersNames(){
     let filteredNames = this.arr.filter((el => {
            return  el.length > 0 && el !== '';
        }))
      filteredNames = filteredNames.map((item => {
        return  item.toLowerCase();
        }))
        return filteredNames;
    }

}
 export default Empl;

