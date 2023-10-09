import Navbar from "../Shared/Navbar/Navbar";


const ContactUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">CONTACT US</h1>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, suscipit.</p>
                        <form className="mx-auto space-y-7">
                            <div className="form-control">
                                <input type="text" name="name" placeholder="Your Name*" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" name="email" placeholder="Your Email*" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="text" name="phone" placeholder="Your Phone*" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <textarea type="message" name="message" placeholder="Your Message*" className="h-32 input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;