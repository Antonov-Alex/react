import React from 'react';

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
          getAllCharecters() {
             return this.getResurce("/characters?page=5&pageSize=10");
          }
          getCharecter(id){
             return this.getResurce(`/characters/${id}`);
          }

          getAllHouses() {
                return this.getResurce('/houses')
          }

          getAllBooks() {
            return this.getResurce('/books')
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
  

// got.getCharecter(5)
// .then(res => console.log(res));

got.getAllBooks()
.then(res => console.log(res));

got.getAllHouses()
.then(res => console.log(res));

