const getNewTags = (recipes) => {
    let newTags = {};
    recipes.forEach(recipe => {
        const { tags } = recipe.content;
        tags.forEach(tag => {
            if(!newTags[tag]) newTags = {...newTags, [tag]: 1}
            else newTags[tag] = newTags[tag] + 1;
        })
    })
    const newTagsArray = Object.entries(newTags);
    return newTagsArray
}
 
export default getNewTags;