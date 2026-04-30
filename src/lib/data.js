export const getCategory = async()=> {
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
    return res.json();
}

export const getCategoryDetails = async (activeId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${activeId}`)
    return res.json();
}
 export const getNewsDetails = async (news_id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${news_id}`)
    return res.json();
}