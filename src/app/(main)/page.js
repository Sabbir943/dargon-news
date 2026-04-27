import Image from "next/image";
const getCategory=async()=>{
 const res=await fetch('https://openapi.programming-hero.com/api/news/categories')
 return res.json();
}

 export default async function Home() {
  const data=await getCategory(); 
  const dataTitle=data.data.news_category
  return (
    <div className="grid grid-cols-12 w-10/12 mx-auto my-10 gap-7">
      <div className="col-span-3">
        <p className="text-xl font-bold">All Category</p>
        {
          dataTitle.map(t=><div key={t.id}>
           <p className="text-gray-500 text-lg my-4 font-bold bg-slate-200 p-3">{t.category_name}</p>
          </div>)
        }
        
      </div>
      <div className="bg-green-500 col-span-6">
        <p>Dragon new</p>
      </div>
      <div className="bg-amber-400 col-span-3"> <p>LogIn</p></div>
    
    </div>
  );
}
