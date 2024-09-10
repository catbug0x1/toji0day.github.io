import { useState } from 'react';

const Blog = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "The Art of Social Engineering in Cybersecurity",
      date: "2023-05-15",
      excerpt: "Explore the psychological tactics used in social engineering attacks and how to defend against them.",
      content: "Social engineering remains one of the most effective methods for breaching security...",
    },
    {
      id: 2,
      title: "Securing the Internet of Things: Challenges and Solutions",
      date: "2023-06-02",
      excerpt: "As IoT devices proliferate, what are the unique security challenges they present, and how can we address them?",
      content: "The Internet of Things (IoT) has revolutionized how we interact with technology in our daily lives...",
    },
    {
      id: 3,
      title: "Blockchain Technology: A New Frontier in Cybersecurity",
      date: "2023-07-10",
      excerpt: "Examining the potential applications of blockchain in enhancing cybersecurity measures.",
      content: "Blockchain technology, best known as the backbone of cryptocurrencies, has far-reaching implications for cybersecurity...",
    },
  ]);

  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="text-green-400">
      <h1 className="text-3xl font-bold mb-8">Cybersecurity Blog</h1>
      {selectedArticle ? (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-4 text-blue-400 hover:underline"
          >
            &larr; Back to all articles
          </button>
          <h2 className="text-2xl font-semibold mb-2">{selectedArticle.title}</h2>
          <p className="text-green-300 mb-4">{selectedArticle.date}</p>
          <p className="text-green-100">{selectedArticle.content}</p>
        </div>
      ) : (
        <div className="space-y-8">
          {articles.map((article) => (
            <div key={article.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-green-300 mb-4">{article.date}</p>
              <p className="text-green-100 mb-4">{article.excerpt}</p>
              <button
                onClick={() => setSelectedArticle(article)}
                className="text-blue-400 hover:underline"
              >
                Read more
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;