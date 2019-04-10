<script>
  export default {
    methods: {
      open() {
        this.$ViewPicture('http://d.hiphotos.baidu.com/image/pic/item/574e9258d109b3deaf33b465c2bf6c81800a4c2a.jpg')
      }
    }
  }
</script>
# ViewPicture 预览图片
----
### 基础用法
使用```this.$ViewPicture(url)```触发弹窗预览图片。

<div class="demo-block">
    <div>
        <div><kat-button text="点我触发预览图片" @click.native="open"></kat-button></div>
    </div>
</div>

::: demo
```html

<div class="demo-block">
    <div>
        <div><kat-button text="点我触发预览图片" @click.native="open"></kat-button></div>
    </div>
</div>

export default {
    methods: {
        open() {
            this.$ViewPicture('http://d.hiphotos.baidu.com/image/pic/item/574e9258d109b3deaf33b465c2bf6c81800a4c2a.jpg')
        }
    }
}

```
:::

### Attributes
| 参数      | 说明      | 类型      | 可选值    | 默认值     |
|:--------- |:--------- |:--------- |:--------- |:---------  |
| text      | 文本      | string    | --        | kat-ui按钮 |
