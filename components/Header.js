
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="py-5 font-bold text-4xl">
            <span className="text-orange-500">ParsClick</span>{' '}<span className="text-green-600">News</span>
        </div>
        <div className="pb-4 text-2xl font-bold">
            <p>
                keep up with th latest news and event from the world of web technology
            </p>
        </div>
    </div>
  );
}

export default Header;