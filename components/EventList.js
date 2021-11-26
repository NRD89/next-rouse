import EventListItem from "./EventListItem";

const BlogList = ({ events }) => {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div className="lg:flex lg:justify-between">
            {/* Main content */}
            <div
              className="lg:flex-grow"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {/* Articles container */}
              <div className="">
                {/* 1st article */}
                {events.map((event) => (
                  <EventListItem event={event} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
