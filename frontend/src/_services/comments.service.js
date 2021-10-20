import HttpClient from '@/_helpers/http-client';

// TODO: antipattern to initialize a new instance @ every service
// TODO: use singleton pattern and move it to a static variable on page load
const adapter = new HttpClient();

function getThreads(appId, currentVersionId) {
  return adapter.get(`/threads/${appId}/all?currentVersionId=${currentVersionId}`);
}

function createThread(data) {
  return adapter.post(`/threads/create`, data);
}

function updateThread(threadId, data) {
  return adapter.patch(`/threads/edit/${threadId}`, data);
}

function getComments(threadId, currentVersionId) {
  return adapter.get(`/comments/${threadId}/all?currentVersionId=${currentVersionId}`);
}

function createComment(data) {
  return adapter.post(`/comments/create`, data);
}

function updateComment(commentId, data) {
  return adapter.patch(`/comments/edit/${commentId}`, data);
}

function deleteComment(commentId) {
  return adapter.delete(`/comments/delete/${commentId}`);
}

function getNotifications(appId, isResolved, currentVersionId) {
  return adapter.get(`/comments/${appId}/notifications?isResolved=${isResolved}&currentVersionId=${currentVersionId}`);
}

export const commentsService = {
  getThreads,
  createThread,
  updateThread,
  getComments,
  createComment,
  updateComment,
  deleteComment,
  getNotifications,
};