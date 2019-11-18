

export default class GotService {

    constructor() {
          this._apiBase = 'https://www.anapioficeandfire.com/api';
    }
  async  getResurce  (url) {
            const res = await fetch(`${this._apiBase}${url}`);
            if(!res.ok) {
                  throw new Error('huy vam')
            }
                  
            return await res.json();
          };
        async  getAllCharecters() {
             const res = await this.getResurce("/characters?page=5&pageSize=10");
             return res.map(this._transformCharcater());
          }

         async getCharecter(id){
             
             const char = await this.getResurce(`/characters/${id}`);
             return this._transformCharcater(char);
          }

           getAllHouses() {
                return this.getResurce('/houses')
          }

           getAllBooks() {
            return this.getResurce('/books')
      }

            _transformCharcater(char) {
                  return {
                        name: char.name,
                        gender: char.gender,
                        born: char.born,
                        died: char.died,
                        culture: char.culture,
                  }
            }

            _transformBook(book) {
                  return {
                        name: book.name,
                        numberOfPages: book.numberOfPages,
                        publiser: book.publiser,
                        released: book.released,
                  }
            }

            _transformHouse(house) {
                  return {
                        name: house.name,
                        regoin: house.regoin,
                        words: house.words,
                        titles: house.titles,
                        overlord: house.overlord,
                        ancestralWeapons: house.ancestralWeapons,
                  }
            }
}           

//const url = 'https://anapioficeandfire.com/api/characters/583';

const got = new GotService();

// got.getAllCharecters()
//   .then(res => {
//         res.forEach(elem => {
//               return console.log(elem.name);
//         });
//   })
  

got.getCharecter(5)
.then(res => res);

got.getAllBooks()
.then(res => res);

got.getAllHouses()
.then(res => res);


