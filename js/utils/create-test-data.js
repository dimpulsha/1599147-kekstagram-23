import { getRandomInt } from './utils-function.js';
import { getRandomListValue } from './utils-function.js';

import { getTestPhotoDescriptionList } from './test-data.js';
import { getTestPhotoCommentList } from './test-data.js';
import { getTestNameList } from './test-data.js';


const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_AVATAR_NUM = 1;
const MAX_AVATAR_NUM = 15;
const MAX_MESSAGE_PHRASE = 2;
const MIN_COMMENTS = 5;
const MAX_COMMENTS = 15;

function createMessage(phraseNum) {
  let message = '';
  for (let i = 0; i < phraseNum; i++) {
    message += getRandomListValue(getTestPhotoCommentList());
  }
  return message;
}

function createComment() {
  return {
    id: Math.round(Date.now()*Math.random()*Math.random()),
    avatar: `img/avatar-${getRandomInt(MIN_AVATAR_NUM, MAX_AVATAR_NUM)}.svg`,
    message: createMessage(getRandomInt(1, MAX_MESSAGE_PHRASE)),
    name: getRandomListValue(getTestNameList()),
  };
}

function createTestPicture(index) {

  const commentList = new Array(getRandomInt(MIN_COMMENTS, MAX_COMMENTS)).fill(null).map(() => createComment());

  return {
    id: index + 1,
    url: `photos/${index + 1}.jpg`,
    description: getRandomListValue(getTestPhotoDescriptionList()),
    likes: getRandomInt(MIN_LIKES, MAX_LIKES),
    comments: commentList,
  };
}

const getTestObjectList = (objectNum) => new Array(objectNum).fill(null).map((value, index) => createTestPicture(index));

export { getTestObjectList };
