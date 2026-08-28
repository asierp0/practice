import { useEffect, useState } from "react";
import { RecommendationCard } from "./RecommendationCards";
import type { recommendationType } from "./RecommendationCards";


export function Recommendation(){

    const [recommendations, setRecommendations] = useState<recommendationType[]>([]);
    const [loadingStatus, setLoadingStatus] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("smartphones");

    

    const URL:string  = `https://dummyjson.com/products/category/${selectedCategory}`

    useEffect(() =>  {
        setLoadingStatus(true);
        setErrorMessage("");
        
            const fetchData = async () => {
                try{
                    const response = await fetch(URL);
                    if(!response.ok){
                        setErrorMessage(`Data not accessible: ${response.status}`);
                    }
                    else{
                        const jsonData =  await response.json();
                        const data = dataParse(jsonData);
                        setRecommendations(data);

                    }
                }catch(error){
                    setErrorMessage("Failed to fetch");
                }finally{
                    setLoadingStatus(false)
                    
                }
            } 
            fetchData();
    }, [selectedCategory])


    function dataParse(data: {products: recommendationType[]} ){

        const productsArray = data.products;

        return productsArray;
        
    }


    return(
        <>
            {loadingStatus && <p>Loading...</p>}
            {!loadingStatus && !errorMessage && recommendations.length > 0 && <p>Success!</p>}
            {errorMessage && <p>{errorMessage}</p>}
            {!loadingStatus && !errorMessage && recommendations.length === 0 && <p>The results were empty</p>}
            {recommendations.map((rec) => {
                        return(
                            <div className="rec-card-container" key={rec.id}>
                                <RecommendationCard 
                                    title = {rec.title}
                                    description = {rec.description}
                                    category = {rec.category}
                                    price = {rec.price}
                                />
                            </div>
                        )})}
        </>
    )
}