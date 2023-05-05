
export const Fetch = async()=>{
const data = await fetch('https://api.tvmaze.com/search/shows?q=all');
const parseData = data.json();
return parseData;
}