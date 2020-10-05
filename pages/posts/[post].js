import React from "react";
import { useRouter } from "next/router";

function Post() {
  const router = useRouter();

  return (
    <div>
      <h2>Post Details</h2>
      <p>Post ID: {router.query.post} </p>
    </div>
  );
}

export default Post;
