async function getHeadlines() {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=ar&apiKey=7412f6538eed41b9976f71c50ad81307');
    const data = await response.json();
    return data.articles;
}

export {getHeadlines}
  