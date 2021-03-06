import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// get posts
export const GET_POSTS_REQUEST = "GET_POSTS_REQUEST";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
export const getPostsRequest = createAction(GET_POSTS_REQUEST);

// post update
export const POST_UPLOAD_REQUEST = "POST_UPLOAD_REQUEST";
export const POST_UPLOAD_SUCCESS = "POST_UPLOAD_SUCCESS";
export const POST_UPLOAD_FAILURE = "POST_UPLOAD_FAILURE";
export const POST_UPLOAD_INITIALIZE = "POST_UPLOAD_INITIALIZE";
export const POST_PREVIEW_REQUEST = "POST_PREVIEW_REQUEST";
export const POST_PREVIEW_SUCCESS = "POST_PREVIEW_SUCCESS";
export const POST_PREVIEW_FAILURE = "POST_PREVIEW_FAILURE";
export const POST_PREVIEW_INITIALIZE = "POST_PREVIEW_INITIALIZE";
export const postUploadRequest = createAction(POST_UPLOAD_REQUEST, data => data);
export const postUploadInitializeRequest = createAction(POST_UPLOAD_INITIALIZE);
export const postPreviewRequest = createAction(POST_PREVIEW_REQUEST, data => data);
export const postPreviewInitializeRequest = createAction(POST_PREVIEW_INITIALIZE);

// post update / delete
export const POST_UPDATE_REQUEST = "POST_UPDATE_REQUEST";
export const POST_UPDATE_SUCCESS = "POST_UPDATE_SUCCESS";
export const POST_UPDATE_FAILURE = "POST_UPDATE_FAILURE";
export const POST_DELETE_REQUEST = "POST_DELETE_REQUEST";
export const POST_DELETE_SUCCESS = "POST_DELETE_SUCCESS";
export const POST_DELETE_FAILURE = "POST_DELETE_FAILURE";
export const postUpdateRequest = createAction(POST_UPDATE_REQUEST, data => data);
export const postDeleteRequest = createAction(POST_DELETE_REQUEST);

// post like
export const POST_LIKE_REQUEST = "POST_LIKE_REQUEST";
export const POST_LIKE_SUCCESS = "POST_LIKE_SUCCESS";
export const POST_LIKE_FAILURE = "POST_LIKE_FAILURE";
export const POST_LIKE_DELETE_REQUEST = "POST_LIKE_DELETE_REQUEST";
export const POST_LIKE_DELETE_SUCCESS = "POST_LIKE_DELETE_SUCCESS";
export const POST_LIKE_DELETE_FAILURE = "POST_LIKE_DELETE_FAILURE";
export const postLikeRequest = createAction(POST_LIKE_REQUEST, data => data);
export const postLikeDeleteRequest = createAction(POST_LIKE_DELETE_REQUEST, data => data);

// post retweet
export const POST_RETWEET_REQUEST = "POST_RETWEET_REQUEST";
export const POST_RETWEET_SUCCESS = "POST_RETWEET_SUCCESS";
export const POST_RETWEET_FAILURE = "POST_RETWEET_FAILURE";
export const postRetweetRequest = createAction(POST_RETWEET_REQUEST, data => data);

// post comment crud
export const POST_COMMENT_REQUEST = "POST_COMMENT_REQUEST";
export const POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS";
export const POST_COMMENT_FAILURE = "POST_COMMENT_FAILURE";
export const POST_COMMENT_UPDATE_REQUEST = "POST_COMMENT_UPDATE_REQUEST";
export const POST_COMMENT_UPDATE_SUCCESS = "POST_COMMENT_UPDATE_SUCCESS";
export const POST_COMMENT_UPDATE_FAILURE = "POST_COMMENT_UPDATE_FAILURE";
export const POST_COMMENT_DELETE_REQUEST = "POST_COMMENT_DELETE_REQUEST";
export const POST_COMMENT_DELETE_SUCCESS = "POST_COMMENT_DELETE_SUCCESS";
export const POST_COMMENT_DELETE_FAILURE = "POST_COMMENT_DELETE_FAILURE";
export const postCommentRequest = createAction(POST_COMMENT_REQUEST, data => data);
export const postCommentUpdateRequest = createAction(POST_COMMENT_UPDATE_REQUEST, data => data);
export const postCommentDeleteRequest = createAction(POST_COMMENT_DELETE_REQUEST);

// post comment like
export const COMMENT_LIKE_REQUEST = "COMMENT_LIKE_REQUEST";
export const COMMENT_LIKE_SUCCESS = "COMMENT_LIKE_SUCCESS";
export const COMMENT_LIKE_FAILURE = "COMMENT_LIKE_FAILURE";
export const COMMENT_LIKE_DELETE_REQUEST = "COMMENT_LIKE_DELETE_REQUEST";
export const COMMENT_LIKE_DELETE_SUCCESS = "COMMENT_LIKE_DELETE_SUCCESS";
export const COMMENT_LIKE_DELETE_FAILURE = "COMMENT_LIKE_DELETE_FAILURE";
export const commentLikeRequest = createAction(COMMENT_LIKE_REQUEST, data => data);
export const commentLikeDeleteRequest = createAction(COMMENT_LIKE_DELETE_REQUEST, data => data);


// initialState
const initialState = {
    // get posts
    isGettingPosts: false,
    isPostsGetted: false,
    postsData: [],
    postsDataError: null,

    // post upload
    isPostUploading: false,
    isPostUploaded: false,
    postUploadData: null,
    postUploadError: null,

    // post preview
    isPostPreviewing: false,
    isPostPreviewed: false,
    postPreviewData: null,
    postPreviewError: null,

    // post update 
    isUpdatingPost: false,
    isPostUpdated: false,
    updatePostData: null,
    updatePostError: null,

    // post delete
    isDeletingPost: false,
    isPostDeleted: false,
    deletePostData: null,
    deletePostError: null,

    // post retweet
    isRetweetingPost: false,
    isPostRetweeted: false,
    retweetPostData: null,
    retweetPostError: null,

    // post like
    isLiking: false,
    likeSuccess: false,
    likeData: null,
    likeError: null,

    // post like delete
    isDeletingLike: false,
    deleteLikeSuccess: false,
    likeDeleteData: null,
    likeDeleteError: null,

    // post comment upload
    isUploadingComment: false,
    isCommentUploaded: false,
    commentData: null,
    commentDataError: null,

    // post commeent update
    isUpdatingComment: false,
    isCommentUpdated: false,
    commentUpdateData: null,
    commentUpdateError: null,

    // post comment delete
    isDeletingComment: false,
    isCommentDeleted: false,
    commentDeleteData: null,
    commentDeleteError: null,

    // post comment like
    isLikingComment: false,
    isCommentLiked: false,
    commentLikeData: null,
    commentLikeError: null,

    // post comment like delete
    isDeletingCommentLike: false,
    isCommentLikeDeleted: false,
    CommentLikeDeleteData: null,
    CommentLikeDeleteError: null
}

const postReducer = handleActions(
    {
        // get posts
        [GET_POSTS_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isGettingPosts = true;
            })),
        [GET_POSTS_SUCCESS]: (state, { payload: postsData }) => (
            produce(state, draft => {
                draft.isGettingPosts = false;
                draft.isPostsGetted = true;
                draft.postsData = postsData;
                draft.postsDataError = null;
            })),
        [GET_POSTS_FAILURE]: (state, { payload: postsDataError }) => (
            produce(state, draft => {
                draft.isGettingPosts = false;
                draft.postsDataError = postsDataError;
            })),

        // post update
        [POST_UPLOAD_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isPostUploading = true;
            })),
        [POST_UPLOAD_SUCCESS]: (state, { payload: postUploadData }) => (
            produce(state, draft => {
                draft.isPostUploading = false;
                draft.isPostUploaded = true;
                draft.postUploadData = postUploadData;
                draft.postUploadError = null;
            })),
        [POST_UPLOAD_FAILURE]: (state, { payload: postUploadError }) => (
            produce(state, draft => {
                draft.isPostUploading = false;
                draft.postUploadError = postUploadError;
            })),
        [POST_UPLOAD_INITIALIZE]: (state, action) => (
            produce(state, draft => {
                draft.isPostUploaded = false;
                draft.postUploadData = null;
            })),

        // post preview
        [POST_PREVIEW_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isPostPreviewing = true;
            })),
        [POST_PREVIEW_SUCCESS]: (state, { payload: postPreviewData }) => (
            produce(state, draft => {
                draft.isPostPreviewing = false;
                draft.isPostPreviewed = true;
                draft.postPreviewData = postPreviewData;
                draft.postPreviewError = null;
            })),
        [POST_PREVIEW_FAILURE]: (state, { payload: postPreviewError }) => (
            produce(state, draft => {
                draft.isPostPreviewing = false;
                draft.postPreviewError = postPreviewError;
            })),
        [POST_PREVIEW_INITIALIZE]: (state, action) => (
            produce(state, draft => {
                draft.isPostPreviewed = false;
                draft.postPreviewData = null;
            })),

        // post update
        [POST_UPDATE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isUpdatingPost = true;
            })),
        [POST_UPDATE_SUCCESS]: (state, { payload: updatePostData }) => (
            produce(state, draft => {
                draft.isUpdatingPost = false;
                draft.isPostUpdated = true;
                draft.updatePostData = updatePostData;
                draft.updatePostError = null;
            })),
        [POST_UPDATE_FAILURE]: (state, { payload: updatePostError }) => (
            produce(state, draft => {
                draft.isUpdatingPost = false;
                draft.updatePostError = updatePostError;
            })),

        // post delete
        [POST_DELETE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isDeletingPost = false;
                draft.postUploadData = null;
            })),
        [POST_DELETE_SUCCESS]: (state, { payload: deletePostData }) => (
            produce(state, draft => {
                draft.isDeletingPost = false;
                draft.isPostDeleted = true;
                draft.deletePostData = deletePostData
                draft.deletePostError = null;
            })),
        [POST_DELETE_FAILURE]: (state, { payload: deletePostError }) => (
            produce(state, draft => {
                draft.isDeletingPost = false;
                draft.deletePostError = deletePostError;
            })),

        // postlike
        [POST_LIKE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isLiking = true;
            })),
        [POST_LIKE_SUCCESS]: (state, { payload: likeData }) => (
            produce(state, draft => {
                draft.isLiking = false;
                draft.likeSuccess = true;
                draft.likeData = likeData
                draft.likeError = null;
            })),
        [POST_LIKE_FAILURE]: (state, { payload: likeError }) => (
            produce(state, draft => {
                draft.isLiking = false;
                draft.likeError = likeError;
            })),

        // postLikeDelete
        [POST_LIKE_DELETE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isDeletingLike = true;
            })),
        [POST_LIKE_DELETE_SUCCESS]: (state, { payload: likeDeleteData }) => (
            produce(state, draft => {
                draft.isDeletingLike = false;
                draft.deleteLikeSuccess = true;
                draft.likeDeleteData = likeDeleteData;
                draft.likeDeleteError = null;
            })),
        [POST_LIKE_DELETE_FAILURE]: (state, { payload: likeDeleteError }) => (
            produce(state, draft => {
                draft.isDeletingLike = false;
                draft.likeDeleteError = likeDeleteError;
            })),

        // post retweet
        [POST_RETWEET_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isRetweetingPost = true;
            })),
        [POST_RETWEET_SUCCESS]: (state, { payload: retweetPostData }) => (
            produce(state, draft => {
                draft.isRetweetingPost = false;
                draft.isPostRetweeted = true;
                draft.retweetPostData = retweetPostData;
                draft.retweetPostError = null;
            })),
        [POST_RETWEET_FAILURE]: (state, { payload: retweetPostError }) => (
            produce(state, draft => {
                draft.isRetweetingPost = false;
                draft.retweetPostError = retweetPostError;
            })),

        // post comment upload
        [POST_COMMENT_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isUploadingComment = true;
            })),
        [POST_COMMENT_SUCCESS]: (state, { payload: commentData }) => (
            produce(state, draft => {
                draft.isUploadingComment = false;
                draft.isCommentUpdated = true;
                draft.commentData = commentData;
                draft.commentDataError = null;
            })),
        [POST_COMMENT_FAILURE]: (state, { payload: commentDataError }) => (
            produce(state, draft => {
                draft.isUploadingComment = false;
                draft.commentDataError = commentDataError;
            })),

        // post comment update
        [POST_COMMENT_UPDATE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isUpdatingComment = true;
            })),
        [POST_COMMENT_UPDATE_SUCCESS]: (state, { payload: commentUpdateData }) => (
            produce(state, draft => {
                draft.isUpdatingComment = false;
                draft.isCommentUploaded = true;
                draft.commentUpdateData = commentUpdateData;
                draft.commentUpdateError = null;
            })),
        [POST_COMMENT_UPDATE_FAILURE]: (state, { payload: commentUpdateError }) => (
            produce(state, draft => {
                draft.isUpdatingComment = false;
                draft.commentUpdateError = commentUpdateError;
            })),

        //post comment DELETE
        [POST_COMMENT_DELETE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isDeletingComment = true;
            })),
        [POST_COMMENT_DELETE_SUCCESS]: (state, { payload: commentDeleteData }) => (
            produce(state, draft => {
                draft.isDeletingComment = false;
                draft.isCommentDeleted = true;
                draft.commentDeleteData = commentDeleteData;
                draft.commentDeleteError = null;
            })),
        [POST_COMMENT_DELETE_FAILURE]: (state, { payload: commentDeleteError }) => (
            produce(state, draft => {
                draft.isDeletingComment = false;
                draft.commentDeleteError = commentDeleteError;
            })),

        // postCommentLike
        [COMMENT_LIKE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isLikingComment = true;
            })),
        [COMMENT_LIKE_SUCCESS]: (state, { payload: commentLikeData }) => (
            produce(state, draft => {
                draft.isLikingComment = false;
                draft.isCommentLiked = true;
                draft.commentLikeData = commentLikeData;
                draft.commentLikeError = null;
            })),
        [COMMENT_LIKE_FAILURE]: (state, { payload: commentLikeError }) => (
            produce(state, draft => {
                draft.isLikingComment = false;
                draft.commentLikeError = commentLikeError;
            })),

        // postCommentLikeDelete
        [COMMENT_LIKE_DELETE_REQUEST]: (state, action) => (
            produce(state, draft => {
                draft.isDeletingCommentLike = true;
            })),
        [COMMENT_LIKE_DELETE_SUCCESS]: (state, { payload: CommentLikeDeleteData }) => (
            produce(state, draft => {
                draft.isDeletingCommentLike = false;
                draft.isCommentLikeDeleted = true;
                draft.CommentLikeDeleteData = CommentLikeDeleteData;
                draft.CommentLikeDeleteError = null;
            })),
        [COMMENT_LIKE_DELETE_FAILURE]: (state, { payload: CommentLikeDeleteError }) => (
            produce(state, draft => {
                draft.isDeletingCommentLike = false;
                draft.CommentLikeDeleteError = CommentLikeDeleteError;
            }))
    },
    initialState
);

export default postReducer;