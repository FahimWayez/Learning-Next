const paths = {
  home() {
    return "/";
  },

  topicShow(topicSlug: string) {
    return `/topics/${topicSlug}`;
  },

  postCreate(topicSlug: string) {
    `/topics/${topicSlug}/posts/new`;
  },

  postShow(topicSlug: string, postId: string) {
    `/topics/${topicSlug}/posts/${postId}`;
  },
};

export default paths;
