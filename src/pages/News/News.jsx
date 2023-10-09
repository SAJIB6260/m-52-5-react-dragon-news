import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSIdeNav from "../Shared/RightSideNav/RightSIdeNav";
import PropTypes from 'prop-types';


const News = () => {

    // const { id } = useParams()

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 mt-16">
                <div className="md:col-span-3">
                    <h2 className="text-3xl">Dragon News</h2>
                    {/* <div className="card card-compact bg-base-100 shadow-xl mb-16 border-b-2 ">
                        <figure><img className="h-72 w-full" src={thumbnail_url} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p>{details}</p>
                        </div>
                    </div> */}
                </div>
                <div className="">
                    <RightSIdeNav></RightSIdeNav>
                </div>
            </div>
        </div>
    );
};

export default News;


News.propTypes = {

    news: PropTypes.object

}