import { Box } from '../CardMovie/styles'

export function Card({image, title, date, overview}) {
    
    return (
       <Box>
            <div className="image">
                <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="" />
            </div>
            <div className="content">
                <h4>{title}</h4>
                <div className="movie-info">
                    <span>{date}</span>
                    <span>testes</span>
                    <span>testeteste</span>
                </div>
                <p>{overview}</p>
            </div>
        </Box>

      
    )
}

Card.defaultProps = {
    title: "Title Default",
    date: "Date Default",
    overview: 'overview default'
}