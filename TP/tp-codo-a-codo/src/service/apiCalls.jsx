async function getHeadlines( category ) {
    const principalUrlApi = 'https://newsapi.org/v2/top-headlines?country=ar&category='
    const apiKey = '&apiKey=7412f6538eed41b9976f71c50ad81307'

    const response = await fetch(principalUrlApi + category + apiKey);
    const data = await response.json();
    return data.articles;
}

export {getHeadlines}
  