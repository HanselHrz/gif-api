export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
    )}&limit=5&api_key=t1rXiV6gVEzn65RxBI66SkUhoL79KeS3`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
    }));
    return gifs;
};