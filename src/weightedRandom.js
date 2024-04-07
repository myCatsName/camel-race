


export default function weightedRandom(items, weights=new Array(items.length).fill(1)){

        let i;    
        for (i = 1; i < weights.length; i++)
            weights[i] += weights[i - 1];
        
        const random = Math.random() * weights[weights.length - 1];
        
        for (i = 0; i < weights.length; i++)
            if (weights[i] > random)
                break;
        
        return items[i]; 
}



