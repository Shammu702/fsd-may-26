// major major types -> 
//movie management system -> 

type Genre ='horror'| 'mystery'| 'family drama'|'romantic'
type AgeRating = "U" | "UA" | "A"
type Language = 'English' | 'Hindi' | 'Tamil' | 'Punjabi' | 'Malayalam' | 'Spanish'

interface MovieI{
    id: string;
    title: string;
    descritpion: string;
    releaseYear: number;
    duration: number;
    genre: Genre[];
    rating: string;
    ageRating: AgeRating;
    language: Language[];
    trailer?: string;
}

interface Person{

}

interface Star extends Person{

}

interface Director extends Person{

}
interface Actor extends Star{

}
interface Actress extends Star{

}

interface User{

}

class Movie{
    rating: MovieI['rating'];
    constructor(rating: MovieI['rating']){
        this.rating = rating
    }
    provideRating(rating: number): void{
        this.rating = `${rating}/5`
    }

    static sortMoviesByRating(){

    }
}

//Movie.sortMoviesByRating()
