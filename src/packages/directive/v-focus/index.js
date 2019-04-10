/*
* 指令作用
* 刷新页面时默认自动focus
* */
export default {
    focus: {
        inserted(el) {
            el.focus();
        }
    }
}
