<template>
    <div class="page-footer">
        <div class="footer-container">
            <div class="text-left">
                <div class="logo">
                    <img src="../assets/img/logo.png" alt="" />
                </div>
                <div class="author-info">
                    <p>author: 打篮球好大汗</p>
                    <p>email: 809172912@qq.com </p>
                    <p>github: <a href="https://github.com/809172912">https://github.com/809172912</a></p>
                </div>
            </div>
            <a href="https://github.com/809172912/klzz-ui" class="github-logo">
                <svg aria-hidden="true" height="40" version="1.1" viewBox="0 0 16 16" width="40">
                    <path fill-rule="evenodd"
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
            </a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
  .page-footer {
    padding: 30px 0 30px;
    color: #6190E8;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.8);
    .footer-container {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .github-logo {
        height: 40px;
        svg {
          position: absolute;
        }
      }
    }
    .text-left {
      font-size: 12px;
      display: flex;
      color: #5e6d82;
      flex-direction: inherit;
      align-items: center;
      .logo {
        margin-right: 40px;
        img {
          height: 30px;
        }
      }
      .author-info {
        display: flex;
        p {
          margin-right: 40px;
        }
        a {
          color: #6190E8;
        }
      }
    }
  }
</style>
