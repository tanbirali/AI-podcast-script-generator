import { motion } from "motion/react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Host of 'Tech & Coffee'",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    text: "This tool cut my script writing time from 3 hours to 15 minutes! As a solo podcaster juggling a full-time job, this AI has been a game-changer. The scripts feel natural and conversational.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Creator of 'Startup Stories Podcast'",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    text: "I was skeptical about AI-generated content, but this blew me away. It captured my voice perfectly and helped me structure my interviews in a way that keeps listeners engaged from start to finish.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jennifer Lopez",
    role: "Producer at 'Daily Insights Network'",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    text: "Our production team now creates 4 episodes a week instead of 2. The AI handles the heavy lifting while we focus on adding our unique flair. It's like having an extra writer on the team!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Park",
    role: "Host of 'Wellness Unplugged'",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    text: "I launched my first podcast in just 2 weeks thanks to this platform. The script suggestions were so good, I barely had to edit anything. Highly recommend for beginners!",
    rating: 5,
  },
  {
    id: 5,
    name: "Amanda Rodriguez",
    role: "Creative Director at 'Culture Talks'",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    text: "The brainstorming feature alone is worth it. I never run out of episode ideas anymore, and the scripts maintain consistency across all our episodes. Professional quality, every time.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Thompson",
    role: "Host of 'History Reimagined'",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    text: "From outline to final script in minutes. This tool understands podcast structure better than some human writers I've worked with. It's become an essential part of my workflow.",
    rating: 5,
  },
];

const TestimonialCards = () => {
  return (
    <div className="min-h-screen bg-linear-90 from-amber-200  to-amber-400 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            🎉 What Our Creators Say
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Join thousands of podcasters who've transformed their workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center gap-4">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-amber-400"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    viewBox="0 0.5 33 33"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>star</title> <desc>Created with Sketch.</desc>{" "}
                      <defs> </defs>{" "}
                      <g
                        id="Vivid.JS"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Vivid-Icons"
                          transform="translate(-903.000000, -411.000000)"
                          fill="#FF6E6E"
                        >
                          {" "}
                          <g
                            id="Icons"
                            transform="translate(37.000000, 169.000000)"
                          >
                            {" "}
                            <g
                              id="star"
                              transform="translate(858.000000, 234.000000)"
                            >
                              {" "}
                              <g
                                transform="translate(7.000000, 8.000000)"
                                id="Shape"
                              >
                                {" "}
                                <polygon points="27.865 31.83 17.615 26.209 7.462 32.009 9.553 20.362 0.99 12.335 12.532 10.758 17.394 0 22.436 10.672 34 12.047 25.574 20.22">
                                  {" "}
                                </polygon>{" "}
                              </g>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
