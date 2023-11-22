import React, { useState } from "react";
import { Input, Layout, Menu, Modal } from "antd";
import { HomeOutlined, PlusCircleOutlined } from "@ant-design/icons";
import BlogForm from "./BlogForm";

const { Header } = Layout;

function MyNavbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editModal, setEditModal] = useState(false);

  const handleOk = () => {
    const newBlog = { title, description, image };
    setBlogs([...blogs, newBlog]);
    setTitle("");
    setDescription("");
    setImage("");
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onEditBlog = (edit_index, edit_title, edit_description, edit_image) => {
    setEditModal(true);
    setImage(edit_image);
    setTitle(edit_title);
    setDescription(edit_description);
    setEditIndex(edit_index);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setImage("");
    setTitle("");
    setDescription("");
    setEditIndex(null);
  };

  const handleDelete = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    setBlogs(updatedBlogs);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onImageChange = (e) => {
    setImage(e.target.value);
  };
  const handleEditConfirm = () => {
    const updatedBlogs = [...blogs];
    updatedBlogs[editIndex] = {
      title: title,
      description: description,
      image: image,
    };
    setBlogs(updatedBlogs);
    setEditIndex(null);
    handleCancel();
    setEditModal(false);
  };

  return (
    <>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item
            key="add-blog"
            icon={<PlusCircleOutlined />}
            onClick={showModal}
          >
            Add New Blog
          </Menu.Item>
        </Menu>
      </Header>
      {blogs.map((blog, index) => (
        <BlogForm
          key={index}
          index={index}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          onDelete={handleDelete}
          onEditBlog={onEditBlog}
        />
      ))}
      <Modal
        title={editModal ? "Edit Blog" : "Add New Blog"}
        open={isModalOpen || editModal}
        onOk={editModal ? handleEditConfirm : handleOk}
        onCancel={handleCancel}
      >
        <div className="my-2">
          <p>Title:</p>
          <Input
            placeholder="Enter Title"
            value={title}
            onChange={onTitleChange}
          />
        </div>

        <div className="mt-2 mb-4">
          <p>Description:</p>
          <Input.TextArea
            placeholder="Enter Description"
            value={description}
            onChange={onDescriptionChange}
          />
        </div>
        <div className="my-2">
          <p>Image Link:</p>
          <Input
            placeholder="Enter Image Link"
            value={image}
            onChange={onImageChange}
          />
        </div>
      </Modal>
    </>
  );
}

export default MyNavbar;
