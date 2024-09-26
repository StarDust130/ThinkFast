import Header from "@/components/elements/Header";

export default function AboutUs() {
  return (
    <>
    <Header />
      <section className="py-16 px-8 mt-10">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold mb-4">About ThinkFast</h1>
          <p className="text-lg leading-relaxed max-w-3xl mb-8">
            At <strong>ThinkFast</strong>, we believe in the power of fun and
            competitive learning! Our mission is to make education engaging by
            allowing users to challenge their friends and test their knowledge
            in real-time quizzes. Whether you&apos;re looking to improve your
            knowledge or just have fun with friends, ThinkFast helps you think
            on your feet—faster than ever! 🚀
          </p>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-8">
            {/* Problem We Solve Section */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-sm hover:scale-105 transition-transform">
              <h2 className="text-2xl font-semibold mb-4">
                🚀 Why We Created This
              </h2>
              <p className="text-base">
                We noticed that traditional learning methods were either too
                boring or too slow. Students and learners need a platform where
                they can have fun and learn at the same time. ThinkFast was
                created to bring excitement and speed into learning.
              </p>
            </div>

            {/* Problem Solved Section */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-sm hover:scale-105 transition-transform">
              <h2 className="text-2xl font-semibold mb-4">
                🧠 The Problem We Solve
              </h2>
              <p className="text-base">
                In today’s fast-paced world, we often don’t have time for slow
                learning. ThinkFast solves the problem of passive learning by
                making it more interactive and competitive. It’s not just about
                knowing the right answer—it&apos;s about being the fastest to
                answer!
              </p>
            </div>

            {/* Vision Section */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-sm hover:scale-105 transition-transform">
              <h2 className="text-2xl font-semibold mb-4">✨ Our Vision</h2>
              <p className="text-base">
                Our vision is to create a global platform where learning is
                competitive, social, and fun. By combining speed, knowledge, and
                social interaction, ThinkFast aims to revolutionize how the
                world learns!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
