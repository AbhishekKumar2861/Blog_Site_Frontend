import React from "react";

const BlogForm = ({
  onDelete,
  index,
  title,
  description,
  image,
  onEditBlog,
}) => {
  const containerStyle = {
    border: "2px solid black",
    padding: "16px",
  };
  const handleEdit = () => {
    onEditBlog(index, title, description, image);
  };
  const handleDelete = () => {
    onDelete(index);
  };

  console.log(title, description, image);
  return (
    <div className="border-2 p-4 mb-4">
      <div className="float-left w-1/4 border-r-2 p-2">
        {/* Left side (1/4) with an image */}
        <img
          src={image} // Replace with your image URL
          alt="blog-image"
          style={{
            backgroundColor: "yellow",
            maxWidth: "100%",
            height: "200px",
          }}
        />
      </div>
      <div className="float-left w-3/4 p-2">
        {/* Right side (3/4) */}
        <div style={{ backgroundColor: "lightgreen", height: "200px" }}>
          <div className="font-bold">
            <p>{title}</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
      <button
        onClick={handleEdit}
        className="bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none focus:ring-blue-800"
      >
        Edit
      </button>
      <button
        className="bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:ring-red-900"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default BlogForm;
