import { getRandomInt } from './utils-function.js';
import { getRandomListValue } from './utils-function.js';
import { randomIdIntervalGenerator } from './utils-function.js';

import { getTestPhotoDescriptionList } from './test-data.js';
import { getTestPhotoCommentList } from './test-data.js';
import { getTestNameList } from './test-data.js';

const TEST_OBJECT_NUM = 25;
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

const createTestId = randomIdIntervalGenerator (1, TEST_OBJECT_NUM);
const createPhotoId = randomIdIntervalGenerator (1, TEST_OBJECT_NUM);

function createTestPicture() {

  const commentList = new Array(getRandomInt(MIN_COMMENTS, MAX_COMMENTS)).fill(null).map(() => createComment());

  return {
    id: createTestId(),
    url: `photos/${createPhotoId()}.jpg`,
    description: getRandomListValue(getTestPhotoDescriptionList()),
    likes: getRandomInt(MIN_LIKES, MAX_LIKES),
    comments: commentList,
  };
}

const getTestObjectList = () => new Array(TEST_OBJECT_NUM).fill(null).map(() => createTestPicture());

export { getTestObjectList };
