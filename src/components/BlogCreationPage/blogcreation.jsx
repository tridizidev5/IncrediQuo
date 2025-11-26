
import "./blogcreation.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  storage,
  ref,
  push,
  set,
  storageRef,
  uploadBytes,
  getDownloadURL,
  database,
} from "../../Firebase/firebase";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const [DepartmentOfblog, setDepartmentOfblog] = useState("");
  const [blogContent, setBlogContent] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
    const rawContent = convertToRaw(newEditorState.getCurrentContent());

    const htmlContent = draftToHtml(
      rawContent,
      null,
      null,
      () => null, // strip entities
      () => null // strip inline styles
    );

    const cleanedHtml = htmlContent.replace(/style="[^"]*"/g, ""); // clean up leftover style=""
    setBlogContent(cleanedHtml);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  if (isSubmitting) return;

  setIsSubmitting(true);

  if (!image) {
    toast.error("Please upload an image");
    setIsSubmitting(false);
    return;
  }

  try {
const imageRef = ref(storage, `blogs/${Date.now()}-${image.name}`);
const uploaded = await uploadBytes(imageRef, image);
const imageUrl = await getDownloadURL(uploaded.ref);

    
    await set(newBlogRef, {
      title,
      content,
      DepartmentOfblog,
      image_url: imageUrl,
      blog_content: blogContent,
      author_name: authorName,
      created_at: new Date().toISOString(),
    });

    toast.success("Blog created successfully!");

    // Reset UI
    setTitle("");
    setContent("");
    setImage(null);
    setPreview(null);
    setAuthorName("");
    setDepartmentOfblog("");
    setEditorState(EditorState.createEmpty());

    setTimeout(() => navigate("/manageblogs"), 1000);

  } catch (err) {
    console.error("Upload error:", err);
    toast.error("Failed to upload. Check Firebase storage rules or config.");
  } finally {
    setIsSubmitting(false);
  }
};

  const navigate = useNavigate();

  return (
    <div className="blog_creation_page">
      <div className="blog_page_main_container">
        <div className="blog-container">
          <form className="blog-form" onSubmit={handleSubmit}>
            <h2>Create a New Blog</h2>

            <div className="blog-form-group">
              <div className="blog-form-group-input">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="Enter Blog Title"
                />
              </div>
              <div className="blog-form-group-input">
                <label htmlFor="authorName">Author Name</label>
                <input
                  id="authorName"
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Enter Author Name"
                />
              </div>
            </div>

            <div className="blog-form-group">
              <div className="blog-form-group-input">
                <label htmlFor="DepartName">Category Name</label>
                <input
                  id="DepartName"
                  type="text"
                  value={DepartmentOfblog}
                  onChange={(e) => setDepartmentOfblog(e.target.value)}
                  placeholder="Enter Blog Category"
                />
              </div>

              <div className="blog-form-group-input">
                <label htmlFor="content">Description</label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows="3"
                  required
                  placeholder="Enter Blog Description up to 50 words"
                />
              </div>
            </div>

            <div>
              <label htmlFor="blogContent">Blog Content</label>
              <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                wrapperClassName="wrapper-class-1"
                editorClassName="editor-clas-1"
                toolbarClassName="toolbar-class"
                placeholder="Enter Blog Content"
                toolbar={{
                  options: ["inline", "list", "link"],
                  inline: { options: ["bold", "italic", "underline"] },
                  list: { options: ["unordered", "ordered"] },
                }}
              />
            </div>

            <label htmlFor="image" className="upload_container">
              <AiOutlineCloudUpload className="Upload_img_icon" />
              Upload Image
            </label>
            <input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{
                display: "none",
              }}
            />
            <span className="red_alter">Only images upto 5MB are allowed.</span>

            {preview && (
              <img src={preview} alt="Preview" className="preview-img" />
            )}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Publishing..." : "Publish Blog"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
