"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import BlogCard from "@/components/blog/cards";
import Link from "next/link";

export default function Blogs() {
  const blogPosts = [
    {
      slug: "blog1",
      title: `I'm Confused About My Career" – How to Choose the Right Path After College?`,
      description:
        "Graduation day is usually the happiest day of a student's life. But the very next morning, a wave of panic hits—'What do I do now?'",
      date: "December 31, 2025",
    },
    {
      slug: "blog2",
      title: "From Village to MNC: Why Your Location Does Not Decide Your Future",
      description:
        "There is a common myth among students from Thuraiyur, Trichy, and other Tier-2 towns: 'Only students from Chennai or Bangalore get high-salary MNC jobs.' Is this true? Absolutely NOT.",
      date: "December 30, 2025",
    },
    {
      slug: "blog3",
      title: "Marks Are Not Enough: The Real Skills You Need to Crack Placements",
      description:
        "Picture this: You have a 9.0 CGPA. You were the topper in your class. But in the campus interview, the back-bencher with a 7.0 CGPA gets the job offer, and you get rejected.",
      date: "December 29, 2025",
    },
    {
      slug: "blog4",
      title: "Too Many Courses, Too Many Institutes – How to Avoid Choosing the Wrong One",
      description:
        "In 2025, students are not confused because they have fewer options. They are confused because they have too many options.",
      date: "December 28, 2025",
    },
    {
      slug: "blog5",
      title: "Classroom to Cloud: How Online Learning and AI are Reshaping Career Prep",
      description:
        "Education is changing faster than ever before. Ten years ago, if you wanted to learn a new skill, you had to travel to a city and sit in a classroom. Today, the classroom travels with you in your pocket.",
      date: "December 27, 2025",
    },
  ];

  return (
    <div>
      <Header />

      <section className="w-full bg-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#2B2E63] mb-12">
            Our Blog
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                className="block h-full cursor-pointer"
              >
                <BlogCard
                  title={post.title}
                  description={post.description}
                  date={post.date}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
