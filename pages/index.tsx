import Seo from '@/components/Seo';
import { useEffect, useState } from 'react';

const API_KEY = "0ab38429f0e1a6919828c21e75f7408d";

export default function Home(){
    const [movies, setMovies]:any = useState();
    useEffect(()=>{
        (async () =>{
            const {results} = await (
                await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)).json();

            setMovies(results);
        })();
    }, [])
    return (
        <div>
            <Seo title="Home" />
            {!movies && <h4>Loading...</h4>}
            {movies?.map((movie:any) => (
            <div key={movie.id}>
                <h4>{movie.original_title}</h4>
            </div>))}
        </div>
    );
}