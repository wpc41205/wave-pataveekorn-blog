import MyImage from '../assets/my.jpg';

export function BlogCard(props) {
  const { image, category, title, description, author, date } = props;
    return (
      <div className="flex flex-col w-full h-auto min-h-[414px] sm:min-h-[582px] gap-4 sm:gap-6 rounded-2xl opacity-100">
        <a href="#" className="relative h-[200px] sm:h-[280px] md:h-[320px] lg:h-[360px]">
          <img className="w-full h-full object-cover rounded-md hover:scale-105 transition-transform duration-300" src={image} alt={title}/>
        </a>
        <div className="flex flex-col flex-1">
          <div className="flex">
            <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">{category}
            </span>
          </div>
          <a href="#" >
            <h2 className="text-start font-bold text-lg sm:text-xl mb-2 line-clamp-2 hover:underline">
            {title}
            </h2>
          </a>
          <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {description}</p>
          <div className="flex items-center text-sm">
            <img className="w-8 h-8 rounded-full mr-2" src={MyImage} alt={author} />
            <span>{author}</span>
            <span className="mx-2 text-gray-300">|</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    );
  }
  