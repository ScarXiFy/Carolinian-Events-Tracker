import React from 'react';

const Categories = () => {
  const categories = ['Academic', 'Social', 'Sports', 'Cultural'];

  return (
    <section id="categories" className="bg-gray-50 p-8">
      <h2 className="text-3xl font-semibold text-center mb-6">Event Categories</h2>
      <div className="flex justify-center space-x-6">
        {categories.map(category => (
          <div key={category} className="bg-blue-500 text-white py-3 px-6 rounded-full cursor-pointer hover:bg-blue-600">
            {category}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
