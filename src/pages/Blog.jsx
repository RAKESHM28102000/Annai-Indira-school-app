import React from "react";

const blogs = [
  {
    title:
      "Raising Grounded Children: Why Family Transparency and Real Conversations Matter",
    image:
      "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1600",
    content: [
      "Parenting today often comes from a place of love and protection. Many families try to shield children from stress, conflict or the everyday pressures that adults face.",
      "A healthier approach is to slowly introduce children to the daily rhythms of the household. Involving them in simple conversations helps them understand effort, responsibility, and gratitude.",
      "Family discussions help children learn listening, sharing thoughts, and respecting opinions. Storytelling builds empathy and emotional awareness.",
      "Balanced parenting combines warmth with boundaries. Children need guidance, patience, and responsibility to grow emotionally strong.",
      "Encouraging openness and participation helps children become empathetic, respectful, and responsible individuals."
    ],
  },
  {
    title: "Raising Screen-Smart Kids",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600",
    content: [
      "Children today grow up surrounded by digital entertainment. The content they consume can subtly shape their behavior and thinking.",
      "Some research suggests that repeated exposure to violent games may influence aggression and emotional responses, but behavior is also shaped by family environment and guidance.",
      "Not all games are harmful. Many promote teamwork, planning, and problem-solving skills.",
      "Parental co-engagement is important. Watching or playing together helps children understand content critically.",
      "Screen time should be balanced with offline activities like outdoor play, storytelling, and creative tasks.",
      "Unstructured time helps children build imagination and creativity.",
      "A balanced digital lifestyle helps children become emotionally grounded and digitally aware."
    ],
  },
  {
    title:
      "More Than a Meal: How Screen-Free Dining Builds Respect and Connection",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600",
    content: [
      "Technology is now a constant part of daily life, influencing children’s habits and routines.",
      "One overlooked habit is distracted dining, where children use screens during meals.",
      "Mealtime is a key opportunity for family bonding, communication, and learning social behavior.",
      "Screen use during meals can reduce awareness of hunger and affect healthy eating habits.",
      "Screen-free dining encourages conversation, curiosity, gratitude, and appreciation.",
      "Children learn to value food, respect effort, and develop mindful eating habits.",
      "Family meals become moments of connection, respect, and emotional bonding."
    ],
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white px-4 py-16">

      {/* HERO */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Our Blog
        </h1>
        <p className="mt-4 text-gray-300 text-sm md:text-lg">
          Insights on parenting, education, and modern childhood development
        </p>
      </div>

      {/* BLOG LIST */}
      <div className="max-w-6xl mx-auto space-y-16">

        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
          >
            {/* IMAGE */}
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              <h2 className="absolute bottom-5 left-5 text-xl md:text-3xl font-bold text-white">
                {blog.title}
              </h2>
            </div>

            {/* CONTENT */}
            <div className="p-6 md:p-10 space-y-4">
              {blog.content.map((para, i) => (
                <p key={i} className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}