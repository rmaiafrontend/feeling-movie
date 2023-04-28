import { ContainerApp, ContentApp, MoviesContent } from './styles'
import { useState } from 'react';
import logo from '../../assets/logo.png'
import { Card } from '../CardMovie/index.jsx'
import axios from 'axios';




export function Application() {
    const [resposta, setResposta] = useState('');
    const [pergunta, setPergunta] = useState('');
    const [movies, setMovies] = useState([]);
    const [isActive, setIsActive] = useState(false);
  
    async function searchMovie(string) {
      let lista = string.split(', ');
      let tempMovies = [];
      
      for (let i = 0; i < lista.length; i++) {
        const item = lista[i];
        try {
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d62fa5cc12dbfed5ebd93460414852cc&language=pt-BR&query=${item}&page=1&include_adult=false`);
          const data = await response.json();
          if (data.results[0] !== undefined) {
            tempMovies.push(data.results[0]);
          }
        } catch (error) {
          console.error(error);
        }
      }
    
      setMovies(tempMovies);
      setIsActive(true);
      console.log(tempMovies);
    }
    
    async function handleClick() {
      try {
        const cliente = axios.create({
          headers: {Authorization: 'Bearer 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'}
        });
    
        const params = {
          "model": "text-davinci-003",
          "prompt": `escreva em linha única o título de alguns filmes e séries com as seguintes características: ${pergunta}`,
          "max_tokens": 56,
          "temperature": 0.4,
        }
        
        const response = await cliente.post('https://api.openai.com/v1/completions', params );
        const resultado = response.data.choices[0].text;
    
        setResposta(resultado);
        searchMovie(resultado);
      } catch (error) {
        console.log(error);
      }
    }

   
    return (
            <>
            <ContentApp searchActive={isActive}>
                <ContainerApp>
                <div className="top-content">
                    <img src= {logo} alt="" />
                    <h1>Qual o filme certo pra você hoje?</h1>
                    <p>Nossa plataforma utiliza algoritmos inteligentes para recomendar filmes que combinam com sua idade, interesses e estágio atual da vida.</p>
                </div>
                <div className="input-content">
                    <span>Vamos Começar!</span>
                    <p>Digite caracteristas do filme que você deseja assistir...</p>
                    <div className="search">
                    <input 
                      type="text" 
                      placeholder='Ex: filme que conta a histórias de empreendedores de sucesso.'
                      value = {pergunta}
                      onChange={(event) => setPergunta(event.target.value)}
                    />
                    <button onClick={(event) => handleClick()}>Search</button>
                    </div>
                </div>
                </ContainerApp>
            </ContentApp>
            <MoviesContent searchActive={isActive}>
                <div className="box">
                    <button onClick={(event) => setIsActive(false)}>Fechar X</button>
                    <img src={logo} alt="" />
                    <h2>Entendemos o seu momento...</h2>
                    <span>Aqui estão algumas recomendações de filmes para você:</span>
                    {
                     movies && movies.map(movie => (
                      <Card
                        key={movie.id}
                        image={movie.poster_path}
                        overview={movie.overview}
                        title={movie.title}
                        date={movie.release_date}
                      />
                    ))
                    }
                                                                                                                                                                                                             
                </div>
                </MoviesContent>

            </>
     
    )
}


