// 定义关于counter的store
import { defineStore } from 'pinia';

// 返回一个函数 规范usexxx
const useCounter = defineStore('counter', {
  state: () => ({ count: 9 }),
});

export default useCounter;
