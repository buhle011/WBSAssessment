import { APIRequestContext } from '@playwright/test';

// Lightweight client wrapper around the posts API endpoints.
export class PostsClient {
    constructor(private request: APIRequestContext) {}

    // GET /posts/{id}
    async getPost(postId: number) {
        return await this.request.get(`/posts/${postId}`);
    }

    // POST /posts - create a new resource using JSON payload.
    async createPost(payload: any) {
        return await this.request.post('/posts', {
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(payload)
        });
    }

    // PATCH /posts/{id} - update an existing post using the generated payload.
    async updatePost(payload: any) {
        return await this.request.patch(`/posts/${payload.id}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(payload)
        });
    }

    // DELETE /posts/{id}
    async deletePost(postId: number) {
        return await this.request.delete(`/posts/${postId}`);
    }
}