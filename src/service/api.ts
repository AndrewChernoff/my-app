import axios from "axios";


export type Post = {
    userId: number,
    id: number,
    title: string
    body: string
  }

export const api = {
    async getAllPosts() {
        
        const res = await axios.get<any>('/api/posts');
        return  res.data.pizzasItems
    },

    async getPost(id: string) {
        const res = await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return  res.data

    },

    async getPostByTitle(title: string) {
        const res = await axios.get<any>(`/api/posts?q=${title}`);
        return  res.data.pizzasItems

    },

}