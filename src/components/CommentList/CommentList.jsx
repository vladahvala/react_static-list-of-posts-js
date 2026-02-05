import { CommentInfo } from '../CommentInfo';

export const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </>
  );
};
