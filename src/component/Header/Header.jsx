import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
       <section className='bg-green-200 py-2 sticky top-0'>
            <div className='flex justify-between items-center my-4  container mx-auto '>
                <h1 className='text-2xl mx-2 md:text-4xl font-bold'>Knowledge Cafe</h1>
                <div className='flex items-center md:gap-16'>
                    <button className='text-base md:text-xl font-semibold hover:bg-lime-100 p-2 rounded hidden md:block'>Contact Us</button>
                    <img src={profile} alt="" />
                </div>
            </div>
       </section>
    );
};

export default Header;