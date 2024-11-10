import { useEffect, useState } from 'react';
import './Comments.css';

export default function Comments({initialComments}) {

  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : initialComments;
  });

  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentData = {
        user: 'You',
        comment: newComment,
        adminReply: 'Thank you for your comment!',
      };

      setComments([...comments, newCommentData]);
      setNewComment('');
    }
  };

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <div className="comments-section">
      <h2>User Comments:</h2>
      {initialComments.map((item, index) => (
        <div key={index} className="comment-box">
          <div className="user-comment">
            <h4>{item.user}</h4>
            <p>{item.comment}</p>
          </div>
          <div className="admin-reply">
            <h4>Admin Reply:</h4>
            <p>{item.adminReply}</p>
          </div>
        </div>
      ))}

      <div className="add-comment">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write your comment here..."
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
}
