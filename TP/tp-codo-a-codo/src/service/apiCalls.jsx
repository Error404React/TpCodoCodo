
const links = {
    'general': 'https://newsapi.org/v2/top-headlines?country=ar&category=general&apiKey=7412f6538eed41b9976f71c50ad81307',
    'business': 'https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=7412f6538eed41b9976f71c50ad81307',
    'entertainment': 'https://newsapi.org/v2/top-headlines?country=ar&category=entertainment&apiKey=7412f6538eed41b9976f71c50ad81307',
    'health': 'https://newsapi.org/v2/top-headlines?country=ar&category=health&apiKey=7412f6538eed41b9976f71c50ad81307',
    'sciene': 'https://newsapi.org/v2/top-headlines?country=ar&category=science&apiKey=7412f6538eed41b9976f71c50ad81307',
    'sports': 'https://newsapi.org/v2/top-headlines?country=ar&category=sports&apiKey=7412f6538eed41b9976f71c50ad81307',
    'technology': 'https://newsapi.org/v2/top-headlines?country=ar&category=technology&apiKey=7412f6538eed41b9976f71c50ad81307'
}

async function getHeadlines(category = 'general') {
    const response = await fetch(links[category]);
    const data = await response.json();
    return data.articles;
}

export {getHeadlines}

