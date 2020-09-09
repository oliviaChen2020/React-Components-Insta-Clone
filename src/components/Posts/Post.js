import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';


const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost } = props;
  const { thumbnailUrl, username, comments, likes, id } = post

  return (
    <div className='post-border'>
      <PostHeader
        username={username}
        thumbnailUrl={thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={post.imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection likePost={() => likePost(id)} numberOfLikes= {likes} />
      {/* Comments also wants its props! */}
      <Comments comments = {comments}/>
    </div>
  );
};

export default Post;
