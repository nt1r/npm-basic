import {inputAnythingReturnX} from "../src/romanizer"

describe('romanizer', () => {
  it('should return X when input 10', () => {
    const returnValue = inputAnythingReturnX(10);

    expect(returnValue).toEqual('X');
  });
});