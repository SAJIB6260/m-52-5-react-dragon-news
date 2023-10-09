import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import CreateNewspaper from "../Shared/RightSideNav/CreateNewspaper";
import RightSIdeNav from "../Shared/RightSideNav/RightSIdeNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";



const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div className="font-poppins">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsCard 
                            key={aNews._id} 
                            news={aNews}
                            ></NewsCard>)
                    }
                </div>
                <div>
                    <RightSIdeNav></RightSIdeNav>
                    <CreateNewspaper></CreateNewspaper>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;