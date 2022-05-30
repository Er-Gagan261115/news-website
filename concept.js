fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9af636630bec434ea96250f1639838f4").then(response => response.json()).then( data => data.articles.forEach(news => 
{
    // console.log(img)
    
    let newscards = document.createElement("div")
    newscards.classList.add("news_cards")
    
    let h2 = document.createElement("h2")
    h2.classList.add("news-title")
    h2.appendChild(document.createTextNode(news.title))
    let img = document.createElement("img");
    img.src = news.urlToImage;
    let newslink = document.createElement("a")
    newslink.classList.add("link")
    newslink.href = news.url;
    newslink.target = "_blank";
    newslink.append(document.createTextNode("click to see more"))
    console.log(newslink)

    newscards.appendChild(img)
    newscards.appendChild(h2)
    newscards.appendChild(newslink)
    // newscards.appendChild(newscontent)
    let wholenewsblock = document.getElementById("whole-news-block");
    wholenewsblock.appendChild(newscards)
}))
document.getElementById("home").onclick = function(){
    let parent = document.getElementById("whole-news-block");
    while(parent.childElementCount)
    {
        parent.firstChild.remove();
    }
    fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=9af636630bec434ea96250f1639838f4").then(response => response.json()).then( data => data.articles.forEach(news => 
    {
        let newscards = document.createElement("div")
        newscards.classList.add("news_cards")
        
        let h2 = document.createElement("h2")
        h2.classList.add("news-title")
        h2.appendChild(document.createTextNode(news.title))
        let img = document.createElement("img");
        img.src = news.urlToImage;
        let newslink = document.createElement("a")
        newslink.classList.add("link")
        newslink.href = news.url;
        newslink.target = "_blank";
        newslink.append(document.createTextNode("click to see more"))
        console.log(newslink)
    
        newscards.appendChild(img)
        newscards.appendChild(h2)
        newscards.appendChild(newslink)
        // newscards.appendChild(newscontent)
        let wholenewsblock = document.getElementById("whole-news-block");
        wholenewsblock.appendChild(newscards)
}))
}
document.getElementById("entertainment").onclick = function(){
    let parent = document.getElementById("whole-news-block");
    while(parent.childElementCount)
    {
        parent.firstChild.remove();
    }

    fetch("https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=9af636630bec434ea96250f1639838f4").then(response => response.json()).then( data => data.articles.forEach(news => 
    {
        let newscards = document.createElement("div")
        newscards.classList.add("news_cards")
        
        let h2 = document.createElement("h2")
        h2.classList.add("news-title")
        h2.appendChild(document.createTextNode(news.title))
        let img = document.createElement("img");
        img.src = news.urlToImage;
        let newslink = document.createElement("a")
        newslink.classList.add("link")
        newslink.href = news.url;
        newslink.target = "_blank";
        newslink.append(document.createTextNode("click to see more"))
        console.log(newslink)
    
        newscards.appendChild(img)
        newscards.appendChild(h2)
        newscards.appendChild(newslink)
        // newscards.appendChild(newscontent)
        let wholenewsblock = document.getElementById("whole-news-block");
        wholenewsblock.appendChild(newscards)
}))
}
document.getElementById("technology").onclick = function(){
    let parent = document.getElementById("whole-news-block");
    while(parent.childElementCount)
    {
        parent.firstChild.remove();
    }
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=9af636630bec434ea96250f1639838f4").then(response => response.json()).then( data => data.articles.forEach(news => 
{
    let newscards = document.createElement("div")
    newscards.classList.add("news_cards")
    
    let h2 = document.createElement("h2")
    h2.classList.add("news-title")
    h2.appendChild(document.createTextNode(news.title))
    let img = document.createElement("img");
    img.src = news.urlToImage;
    let newslink = document.createElement("a")
    newslink.classList.add("link")
    newslink.href = news.url;
    newslink.target = "_blank";
    newslink.append(document.createTextNode("click to see more"))
    console.log(newslink)

    newscards.appendChild(img)
    newscards.appendChild(h2)
    newscards.appendChild(newslink)
    // newscards.appendChild(newscontent)
    let wholenewsblock = document.getElementById("whole-news-block");
    wholenewsblock.appendChild(newscards)
}))
}
document.getElementById("science").onclick = function(){
    let parent = document.getElementById("whole-news-block");
    while(parent.childElementCount)
    {
        parent.firstChild.remove();
    }
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=9af636630bec434ea96250f1639838f4").then(response => response.json()).then( data => data.articles.forEach(news => 
{
    let newscards = document.createElement("div")
    newscards.classList.add("news_cards")
    
    let h2 = document.createElement("h2")
    h2.classList.add("news-title")
    h2.appendChild(document.createTextNode(news.title))
    let img = document.createElement("img");
    img.src = news.urlToImage;
    let newslink = document.createElement("a")
    newslink.classList.add("link")
    newslink.href = news.url;
    newslink.target = "_blank";
    newslink.append(document.createTextNode("click to see more"))
    console.log(newslink)

    newscards.appendChild(img)
    newscards.appendChild(h2)
    newscards.appendChild(newslink)
    // newscards.appendChild(newscontent)
    let wholenewsblock = document.getElementById("whole-news-block");
    wholenewsblock.appendChild(newscards)
}))
}
