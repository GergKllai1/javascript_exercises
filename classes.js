class Media {
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    set isCheckedOut(check){
      this._isCheckedOut = check;
    }
    toggleCheckStatus(){
      return this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating(){
      let sumOfRating = this._ratings.reduce((acc, cv) => acc + cv);
      return sumOfRating / this._ratings.length
    }
    addRating(rating){
      this._ratings.push(rating);
    }
  };
  
  class Book extends Media {
    constructor(author,title,pages){
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author
    }
    get pages(){
      return this._pages
    }
  }
  
  class Movie extends Media {
    constructor(director,title,runTime){
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book('Bill Byrson','A Short History of Nearly Everything', 554);
  historyOfEverything.toggleCheckStatus();
  console.log(historyOfEverything.isCheckedOut);
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  