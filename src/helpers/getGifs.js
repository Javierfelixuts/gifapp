export const getGifs = async(categorie) => {
    const url = `https://api.giphy.com/v1/stickers/search?q=${encodeURI(categorie)}&limit=10&api_key=s7seAftZAcSjNIVbJNDXQZ3veyith54H`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })
    return gifs;
    
}