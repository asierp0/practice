export type recommendationType = {
        id: number
        title: string,
        description: string,
        category: string,
        price: number
    }

export type recCard  = Omit<recommendationType, "id">

export function RecommendationCard( { title, description, category, price }:recCard ){


    return(
        <div>
            <h3>Recommendation</h3>
            <p>{title}</p>
            <p>{description}</p>
            <p>{category}</p>
            <p>{price}</p>
        </div>
    )
}