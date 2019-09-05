
class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies : [ {
                "popularity": 59.54,
                "vote_count": 792,
                "video": false,
                "poster_path": "\/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
                "id": 466272,
                "adult": false,
                "backdrop_path": "\/kKTPv9LKKs5L3oO1y5FNObxAPWI.jpg",
                "original_language": "en",
                "original_title": "Once Upon a Time in Hollywood",
                "genre_ids": [28, 35, 80, 18, 37],
                "title": "Once Upon a Time in Hollywood",
                "vote_average": 7.6,
                "overview": "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
                "release_date": "2019-07-26"
            }, {
                "popularity": 45.265,
                "vote_count": 526,
                "video": false,
                "poster_path": "\/hgWAcic93phg4DOuQ8NrsgQWiqu.jpg",
                "id": 452832,
                "adult": false,
                "backdrop_path": "\/oOROXoQ402tHgK6NowmMUSLffkW.jpg",
                "original_language": "en",
                "original_title": "Serenity",
                "genre_ids": [9648, 53],
                "title": "Serenity",
                "vote_average": 5.2,
                "overview": "Baker Dill is a fishing boat captain leading tours off a tranquil, tropical enclave called Plymouth Island. His quiet life is shattered, however, when his ex-wife Karen tracks him down with a desperate plea for help.",
                "release_date": "2019-01-25"
            }, {
                "popularity": 50.454,
                "vote_count": 113,
                "video": false,
                "poster_path": "\/vOl6shtL0wknjaIs6JdKCpcHvg8.jpg",
                "id": 567609,
                "adult": false,
                "backdrop_path": "\/aNrNi5QExO6b8MnEGsfpgp21NIY.jpg",
                "original_language": "en",
                "original_title": "Ready or Not",
                "genre_ids": [27, 9648, 53],
                "title": "Ready or Not",
                "vote_average": 7.5,
                "overview": "A bride's wedding night takes a sinister turn when her eccentric new in-laws force her to take part in a terrifying game.",
                "release_date": "2019-08-21"
            }, {
                "popularity": 46.348,
                "vote_count": 2284,
                "video": false,
                "poster_path": "\/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
                "id": 447404,
                "adult": false,
                "backdrop_path": "\/nDP33LmQwNsnPv29GQazz59HjJI.jpg",
                "original_language": "en",
                "original_title": "Pokémon Detective Pikachu",
                "genre_ids": [28, 12, 14],
                "title": "Pokémon Detective Pikachu",
                "vote_average": 7,
                "overview": "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
                "release_date": "2019-05-10"
            }, {
                "popularity": 33.986,
                "vote_count": 45,
                "video": false,
                "poster_path": "\/vVYU0x9FRpiJNX7c54ciFnRBVYG.jpg",
                "id": 441282,
                "adult": false,
                "backdrop_path": "\/6rJAeP8xlq0bHUdCNg5epBvrFVa.jpg",
                "original_language": "en",
                "original_title": "Night Hunter",
                "genre_ids": [80, 9648, 53],
                "title": "Night Hunter",
                "vote_average": 6.1,
                "overview": "A police task force traps an online predator, only to discover that the depth of his crimes goes far beyond anything they had anticipated.",
                "release_date": "2019-09-06"
            }, {
                "popularity": 48.493,
                "vote_count": 1054,
                "video": false,
                "poster_path": "\/f4FF18ia7yTvHf2izNrHqBmgH8U.jpg",
                "id": 504608,
                "adult": false,
                "backdrop_path": "\/oAr5bgf49vxga9etWoQpAeRMvhp.jpg",
                "original_language": "en",
                "original_title": "Rocketman",
                "genre_ids": [18, 10402],
                "title": "Rocketman",
                "vote_average": 7.5,
                "overview": "The story of Elton John's life, from his years as a prodigy at the Royal Academy of Music through his influential and enduring musical partnership with Bernie Taupin.",
                "release_date": "2019-05-31"
            }, {
                "popularity": 46.85,
                "vote_count": 3,
                "video": false,
                "poster_path": "\/eU0orGizEpOli4wtN8HtfOOJDlA.jpg",
                "id": 516700,
                "adult": false,
                "backdrop_path": "\/nmHCKQ1GtlPLZVAtBfsYDqVPhPW.jpg",
                "original_language": "id",
                "original_title": "Gundala",
                "genre_ids": [28, 80, 18],
                "title": "Gundala",
                "vote_average": 8.2,
                "overview": "Sancaka has lived on the streets since his parents left him. Living a hard life, Sancaka survives by thinking about his own safety. When the condition of the city gets worse and injustice rages throughout the country, Sancaka must decide whether he continues to live to look after himself or rise to become their oppressed hero.",
                "release_date": "2019-08-29"
            }],
            genres :
                [
                    {
                        "id": 28,
                        "name": "Action"
                    },
                    {
                        "id": 12,
                        "name": "Adventure"
                    },
                    {
                        "id": 16,
                        "name": "Animation"
                    },
                    {
                        "id": 35,
                        "name": "Comedy"
                    },
                    {
                        "id": 80,
                        "name": "Crime"
                    },
                    {
                        "id": 99,
                        "name": "Documentary"
                    },
                    {
                        "id": 18,
                        "name": "Drama"
                    },
                    {
                        "id": 10751,
                        "name": "Family"
                    },
                    {
                        "id": 14,
                        "name": "Fantasy"
                    },
                    {
                        "id": 36,
                        "name": "History"
                    },
                    {
                        "id": 27,
                        "name": "Horror"
                    },
                    {
                        "id": 10402,
                        "name": "Music"
                    },
                    {
                        "id": 9648,
                        "name": "Mystery"
                    },
                    {
                        "id": 10749,
                        "name": "Romance"
                    },
                    {
                        "id": 878,
                        "name": "Science Fiction"
                    },
                    {
                        "id": 10770,
                        "name": "TV Movie"
                    },
                    {
                        "id": 53,
                        "name": "Thriller"
                    },
                    {
                        "id": 10752,
                        "name": "War"
                    },
                    {
                        "id": 37,
                        "name": "Western"
                    }
                ]

        }
    }

    getMovieName(genre_ids){
        let genreIds = []
        let genreNames = []
        let genres = ""
        this.state.genres.forEach((genre,index) => {
            genreIds[index] = genre.id;
            genreNames[index] = genre.name;
        });

        genre_ids.forEach((genre) => {
            let genreIndex = genreIds.indexOf(genre);
            let genreName = genreNames[genreIndex];
            genres += genreName + ' . ';
        })
        genres = genres.slice(0, -2);
        return genres
    }

    render() {

        return (
            <div>
                {this.state.movies.map(movie => {

                    return (
                        <div>
                            <h4>{movie.title}</h4>
                            <span>Genres: {this.getMovieName(movie.genre_ids)}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}

ReactDOM.render(<TodoApp />, document.querySelector("#app"))
