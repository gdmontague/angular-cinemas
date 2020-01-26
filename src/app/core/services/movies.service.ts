import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesData = [
    {
      title: 'Star Wars: The Rise Of Skywalker',
      slug: 'star-wars-the-rise-of-skywalker',
      imageURL: 'https://images-na.ssl-images-amazon.com/images/I/61%2B62cKXIVL._AC_SY550_.jpg',
      releaseDate: '2/2/2020',
      synopsis: `Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic space-opera film produced, co-written, and directed by J. J. Abrams. It is the third installment of the Star Wars sequel trilogy, following The Force Awakens (2015) and The Last Jedi (2017), and the final episode of the nine-part "Skywalker saga".[a] It was produced by Lucasfilm and Abrams's production company Bad Robot Productions and was distributed by Walt Disney Studios Motion Pictures. The film's ensemble cast includes Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Anthony Daniels, Kelly Marie Tran, Naomi Ackie, Domhnall Gleeson, Richard E. Grant, Lupita Nyong'o, Keri Russell, Joonas Suotamo, Ian McDiarmid, and Billy Dee Williams. It features the second posthumous film performance by Fisher, who died in 2016 and appears through the use of unused footage from The Force Awakens.`,
      chairs: [
      'reserved',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'reserved',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'available',
      'reserved',
      'reserved',
      'available',
      'reserved',
      'available',
      'reserved',
      'available',
      'available',
      ]
    },

    {
      title: 'Bad Boys For Life',
      slug: 'bad-boys-for-life',
      imageURL: 'https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
      releaseDate: '1/17/2020',
      synopsis: `Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic space-opera film produced, co-written, and directed by J. J. Abrams. It is the third installment of the Star Wars sequel trilogy, following The Force Awakens (2015) and The Last Jedi (2017), and the final episode of the nine-part "Skywalker saga".[a] It was produced by Lucasfilm and Abrams's production company Bad Robot Productions and was distributed by Walt Disney Studios Motion Pictures. The film's ensemble cast includes Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Anthony Daniels, Kelly Marie Tran, Naomi Ackie, Domhnall Gleeson, Richard E. Grant, Lupita Nyong'o, Keri Russell, Joonas Suotamo, Ian McDiarmid, and Billy Dee Williams. It features the second posthumous film performance by Fisher, who died in 2016 and appears through the use of unused footage from The Force Awakens.`,
      chairs: [
        'reserved',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'reserved',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'reserved',
        'available',
        'reserved',
        'available',
        'reserved',
        'available',
        'available',
        ]
    },
    {
      title: '1917',
      slug: '1917',
      imageURL: 'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg',
      releaseDate: '1/1/2020',
      synopsis: `Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic space-opera film produced, co-written, and directed by J. J. Abrams. It is the third installment of the Star Wars sequel trilogy, following The Force Awakens (2015) and The Last Jedi (2017), and the final episode of the nine-part "Skywalker saga".[a] It was produced by Lucasfilm and Abrams's production company Bad Robot Productions and was distributed by Walt Disney Studios Motion Pictures. The film's ensemble cast includes Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Anthony Daniels, Kelly Marie Tran, Naomi Ackie, Domhnall Gleeson, Richard E. Grant, Lupita Nyong'o, Keri Russell, Joonas Suotamo, Ian McDiarmid, and Billy Dee Williams. It features the second posthumous film performance by Fisher, who died in 2016 and appears through the use of unused footage from The Force Awakens.`,
      chairs: [
        'reserved',
        'reserved',
        'reserved',
        'reserved',
        'reserved',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'available',
        'reserved',
        'reserved',
        'reserved',
        'reserved',
        'available',
        'reserved',
        'available',
        'reserved',
        'available',
        'reserved',
        'reserved',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'reserved',
        'reserved',
        'reserved',
        'reserved',
        'reserved',
        'reserved',
        'reserved',
        'reserved',
        'reserved',
        ]
    },
    {
      title: 'Jumanji Next Level',
      slug: 'jumanji-next-level',
      imageURL: 'https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      releaseDate: '1/9/2020',
      synopsis: `Star Wars: The Rise of Skywalker (also known as Star Wars: Episode IX – The Rise of Skywalker) is a 2019 American epic space-opera film produced, co-written, and directed by J. J. Abrams. It is the third installment of the Star Wars sequel trilogy, following The Force Awakens (2015) and The Last Jedi (2017), and the final episode of the nine-part "Skywalker saga".[a] It was produced by Lucasfilm and Abrams's production company Bad Robot Productions and was distributed by Walt Disney Studios Motion Pictures. The film's ensemble cast includes Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Anthony Daniels, Kelly Marie Tran, Naomi Ackie, Domhnall Gleeson, Richard E. Grant, Lupita Nyong'o, Keri Russell, Joonas Suotamo, Ian McDiarmid, and Billy Dee Williams. It features the second posthumous film performance by Fisher, who died in 2016 and appears through the use of unused footage from The Force Awakens.`,
      chairs: [
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'available',
        'reserved',
        'available',
        'reserved',
        'available',
        'reserved',
        'available',
        'reserved',
        'available',
        'reserved',
        'available',
        'reserved',
        'available',
        'reserved',
        'reserved',
        'available',
        'reserved',
        'reserved',
        'reserved',
        'available',
        'available',
        'available',
        'reserved',
        'reserved',
        'available',
        'reserved',
        'available',
        'reserved',
        'available',
        'available',
        ]
    }
    
  ]

  constructor() { }
  getAllMovies(){
    return this.moviesData
  }
  getMovieData(slug){
      return this.moviesData.filter((movie) => {
        return movie.slug == slug;
      })
  }
  reserveChair(slug, index, totalTickets){
    const movieId = this.moviesData.findIndex(movie => {
      return movie.slug === slug
    });
    let totalSelected = this.moviesData[movieId].chairs.filter(x => x === 'selected').length;

    if(totalSelected < totalTickets){
      if (this.moviesData[movieId].chairs[index] == 'reserved') {
        alert('Chair Reserved')
      } else {
        this.moviesData[movieId].chairs[index] = (this.moviesData[movieId].chairs[index] === 'available') ? 'selected' : 'available';
        totalSelected = this.moviesData[movieId].chairs.filter(x => x === 'selected').length
      }
    } else {
      alert(`You have ${totalSelected} tickets you can't reserve any more seats. Order more tickets.`)
    }
 
    console.log(movieId);
  }
}
