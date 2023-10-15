import React from "react";
import blog1 from "../assets/blogs/01.png";
import blog2 from "../assets/blogs/02.png";
import blog3 from "../assets/blogs/03.png";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      image: blog1,
    },
    {
      id: 2,
      title:
        "What are your safeguarding responsibilities and how can you manage them?",
      image: blog2,
    },
    {
      id: 3,
      title: "Revamping the Membership Model with Triathlon Australia",
      image: blog3,
    },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl my-12" id="blog">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl font-semibold mb-4 text-neutralDGrey md:w-4/5 mx-auto">
          Caring is the new marketing
        </h2>
        <p className="text-neutralGrey text-sm mb-8 md:w-3/4 mx-auto">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who is joining the community, read
          about how our community are increasing their membership income and
          lots more.
        </p>
      </div>
      {/* all blodg */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt=""
              className="hover:scale-95 transition-all duration-300"
            />
            <div className="blog-card">
              <h4 className="mb-3 text-neutralGrey font-semibold">
                {blog.title}
              </h4>
              <div className="flex items-center justify-center gap-8">
                <a
                  href="/"
                  className="text-brandPrimary font-bold hover:text-neutral-700"
                >
                  Readmore{" "}
                  <svg
                    className="inline-block ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                  >
                    <path
                      d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                      stroke="#4CAF4F"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
