import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { useGlobalContext } from "./context";

const Gallery = ()=>{   
    const {value} = useGlobalContext();
    const url = `https://api.unsplash.com/search/photos?client_id=vdyosHBz_Z96qjXJH_z2xj08ZDuXIG8fImavHUaPqJ4&query=${value}`;

   const response = useQuery({
    queryKey:[value],
    queryFn: async()=>{
        const result = await axios.get(url);
        return result.data
    }
   })
    const results = response.data;

    if(response.isLoading){
        return<section className="image-container">
            <h4>Loading....</h4>
        </section>;
    }
    if(response.isError){
        return<section className="image-container">
            <h4>There was an error...</h4>
        </section>;
    }

    if(response.data.results.length<1){
    return(
        <section className="image-container">
            NO RESULTS FOUNDS...
        </section>
    )
}

    return(
        <section className="image-container">
        {results.results.map((item)=>{
            return <img src={item.urls.small} key={item.id}/>
        })}
    </section>   
            )
        }
export default Gallery