import { useState } from 'react';
import styles from '../styles/home.module.css';

const CreatePost = () => {
  const [post, setPost] = useState('');
  const [addingPost, setAddingPost] = useState(false);

  const handleAddPostClick = () => {};

  return (
    <div className={styles.createPost}>
      <textarea
        cols="30"
        rows="10"
        value={post}
        className={styles.addPost}
        onChange={(e) => setPost(e.target.value)}
      ></textarea>

      <div>
        <button
          className={styles.addPostBtn}
          onClick={handleAddPostClick}
          disabled={addingPost}
        >
          {addingPost ? 'Adding post...' : 'Add post'}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
