import { createAction } from "redux-actions";
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
export const postCommentRequest = createAction(POST_COMMENT_REQUEST, data => data);
export const POST_COMMENT_UPDATE_REQUEST = "POST_COMMENT_UPDATE_REQUEST";
export const POST_COMMENT_UPDATE_SUCCESS = "POST_COMMENT_UPDATE_SUCCESS";
export const POST_COMMENT_UPDATE_FAILURE = "POST_COMMENT_UPDATE_FAILURE";
export const postCommentUpdateRequest = createAction(POST_COMMENT_UPDATE_REQUEST, data => data);
export const POST_COMMENT_DELETE_REQUEST = "POST_COMMENT_DELETE_REQUEST";
export const POST_COMMENT_DELETE_SUCCESS = "POST_COMMENT_DELETE_SUCCESS";
export const POST_COMMENT_DELETE_FAILURE = "POST_COMMENT_DELETE_FAILURE";
export const postCommentDeleteRequest = createAction(POST_COMMENT_DELETE_REQUEST, data => data);

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
    // 왕
    postsData: [],
    // get posts
    isGettingPosts: false,
    isPostsGetted: false,
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
    likeError: null,
    // post like delete
    isDeletingLike: false,
    deleteLikeSuccess: false,
    likeDeleteError: null,
    // post comment upload
    isUploadingComment: false,
    isCommentUploaded: false,
    commentDataError: null,
    // post comment delete
    isDeletingComment: false,
    isCommentDeleted: false,
    commentDeleteError: null,
    // post commeent update
    isUpdatingComment: false,
    isCommentUpdated: false,
    commentUpdateError: null,
    // post comment like
    isLikingComment: false,
    isCommentLiked: false,
    commentLikeError: null,
    // post comment like delete
    isDeletingCommentLike: false,
    isCommentLikeDeleted: false,
    CommentLikeDeleteError: null
}

const postReducer = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            // get_posts
            case GET_POSTS_REQUEST:
                draft.isGettingPosts = true;
                break;
            case GET_POSTS_SUCCESS:
                draft.isGettingPosts = false;
                draft.isPostsGetted = true;
                draft.postsData = action.payload;
                draft.postsDataError = null;
                break;
            case GET_POSTS_FAILURE:
                draft.isGettingPosts = false;
                draft.postsDataError = action.payload;
                break;
            case POST_UPLOAD_REQUEST:
                draft.isPostUploading = true;
                break;
            case POST_UPLOAD_SUCCESS:
                draft.isPostUploading = false;
                draft.isPostUploaded = true;
                draft.postUploadData = action.payload;
                draft.postUploadError = null;
                break;
            case POST_UPLOAD_FAILURE:
                draft.isPostUploading = false;
                draft.postUploadError = action.payload;
                break;
            case POST_UPLOAD_INITIALIZE:
                draft.isPostUpdated = false;
                draft.postUploadData = null;
                break;
            case POST_PREVIEW_REQUEST:
                draft.isPostPreviewing = true;
                break;
            case POST_PREVIEW_SUCCESS:
                draft.isPostPreviewing = false;
                draft.isPostPreviewed = true;
                draft.postPreviewData = action.payload;
                draft.postPreviewError = null;
                break;
            case POST_PREVIEW_FAILURE:
                draft.isPostPreviewing = false;
                draft.postPreviewError = action.payload;
                break;
            case POST_PREVIEW_INITIALIZE:
                draft.isPostPreviewed = false;
                draft.postPreviewData = null;
                break;
            case POST_RETWEET_REQUEST:
                draft.isRetweetingPost = true;
                break;
            case POST_RETWEET_SUCCESS:
                draft.isRetweetingPost = false;
                draft.isPostRetweeted = true;
                draft.retweetPostData = action.payload;
                draft.retweetPostError = null;
                break;
            case POST_RETWEET_FAILURE:
                draft.isRetweetingPost = false;
                draft.retweetPostError = action.payload;
                break;
            case POST_LIKE_REQUEST:
                draft.isLiking = true;
                break;
            case POST_LIKE_SUCCESS: {
                const post = draft.postsData.find(postData =>
                    postData.id === parseInt(action.payload.PostId)
                );
                post.PostLikers.unshift(action.payload);
                draft.isLiking = false;
                draft.likeSuccess = true;
                draft.likeError = null;
                break;
            }
            case POST_LIKE_FAILURE:
                draft.isLiking = false;
                draft.likeError = action.payload;
                break;
            case POST_LIKE_DELETE_REQUEST:
                draft.isDeletingLike = true;
                break;
            case POST_LIKE_DELETE_SUCCESS: {
                const post = draft.postsData.find(postData =>
                    postData.id === parseInt(action.payload.PostId)
                );
                post.PostLikers = post.PostLikers.filter(postLiker =>
                    postLiker.id !== action.payload.id
                );
                draft.isDeletingLike = false;
                draft.deleteLikeSuccess = true;
                draft.likeDeleteError = null;
                break;
            }
            case POST_LIKE_DELETE_FAILURE:
                draft.isDeletingLike = false;
                draft.likeDeleteError = action.payload
                break;
            case POST_COMMENT_REQUEST:
                draft.isUploadingComment = true;
                break;
            case POST_COMMENT_SUCCESS: {
                const post = draft.postsData.find(postData =>
                    postData.id === parseInt(action.payload.PostId)
                );
                post.Comments.unshift(action.payload);
                draft.isUploadingComment = false;
                draft.isCommentUploaded = false;
                draft.commentDataError = null;
                break;
            }
            case POST_COMMENT_FAILURE:
                draft.isUploadingComment = false;
                draft.commentDataError = action.payload;
                break;
            case POST_COMMENT_DELETE_REQUEST:
                draft.isDeletingComment = true;
                break;
            case POST_COMMENT_DELETE_SUCCESS: {
                const post = draft.postsData.find(postData =>
                    postData.id === parseInt(action.payload.postId)
                );
                post.Comments = post.Comments.filter(comment => {
                    return comment.id !== action.payload.commentId
                });
                draft.isDeletingComment = false;
                draft.isCommentDeleted = true;
                draft.commentDeleteData = null;
                break;
            }
            case POST_COMMENT_DELETE_FAILURE:
                draft.isDeletingComment = false;
                draft.commentDeleteData = action.payload;
                break;
            case POST_COMMENT_UPDATE_REQUEST:
                draft.isUpdatingComment = true;
                break;
            case POST_COMMENT_UPDATE_SUCCESS:
                draft.isUpdatingComment = false;
                draft.isCommentUpdated = true;
                break;
            case POST_COMMENT_UPDATE_FAILURE:
                draft.isUpdatingComment = false;
                draft.commentUpdateError = action.payload;
                break;
            case COMMENT_LIKE_REQUEST:
                draft.isLikingComment = true;
                break;
            case COMMENT_LIKE_SUCCESS:
                draft.isLikingComment = false;
                break;
            case COMMENT_LIKE_FAILURE:
                draft.isLikingComment = false;
                break;
            case COMMENT_LIKE_DELETE_REQUEST:
                draft.isDeletingCommentLike = true;
                break;
            case COMMENT_LIKE_DELETE_SUCCESS:
                draft.isDeletingCommentLike = false;
                break;
            case COMMENT_LIKE_DELETE_FAILURE:
                draft.isDeletingCommentLike = false;
                break;
            default:
                break;
        }
    })
};

export default postReducer;