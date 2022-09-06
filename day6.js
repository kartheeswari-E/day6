//1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class Movie{
    constructor(title,studio,rating)
{
this.titile=title;
this.studio=studio;
this.rating=rating;
}
}const vikram=new Movie("vikram","abc","pg13");
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class mov{
constructor(rating)
{
    this.rating="PG";}
}const mov1=new Movie();
// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const change=new Movie("Casino Royale","Eon Productions","PG13");


//3.Write a “person” class to hold all the details.
class Person{
    constructor(name,ph_no,add){
        this.name=name;
        this.add=add;
        this.ph_no=ph_no;
    }
}const details=new Person("karthiga","ramnad",9876789876);
//4.write a class to calculate the uber price.
class Uber{
    constructor(distance,taxes,subcharges){
        this.distance=distance;
        this.subcharges=subcharges;
        this.taxes=taxes;
    }
    uberprice(){
        return `the price is ${this.distance}`
    }
    calculation(){

        this.distance=((this.distance*10)+(this.distance*this.taxes)+(this.subcharges));
        return this.uberprice();
    }

}const UberPrice=new Uber(15,1.5,50)
console.log(UberPrice.calculation());