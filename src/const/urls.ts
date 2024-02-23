const baseURL = 'https://jsonplaceholder.typicode.com'

const albums = '/albums'
const comments = '/comments'
const todos = 'todos'
const posts = '/posts'

const urls = {
    albums,
    comments,
    todos,
    posts: {
        byPostId: (postId: number) => `${posts}/${postId}`
    }
}

export {
    baseURL,
    urls
}