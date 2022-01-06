/**
 * @description
 * Comment would have been a better name for this model. However, Comment interface already exists and we wanted to avoid confusion
 */
export interface PostComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}