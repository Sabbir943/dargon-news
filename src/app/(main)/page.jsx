import { redirect } from "next/navigation";
const default_home_page="01";
export default async function Home() {
 redirect(`/category/${default_home_page}`);
}
