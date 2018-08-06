<template>
  <div id="app">
    <template v-if="keyword">
      <div class="has-keyword">
        <img src="./assets/logo.png">
        <div class="search-input">
          <span class="keyword">{{ keyword }}</span>
          <div class="mouse"></div>
        </div>
      </div>
      <a @click="goToCreate">我也要生成</a>
    </template>
    <template v-else>
      <div class="create">
        <template v-if="createTime === 0">
          <div class="title">生成一次搜索动画</div>
          <div class="subtitle">请输入关键词</div>
        </template>
        <template v-else>
          <div id="js-tip">✅ 链接已复制</div>
          <div class="subtitle">{{ url }}</div>
        </template>
        <input type="input" v-model="content" placeholder="例如：什么是简书">
        <button :class="{ 'no-content': !content }" @click="create" ref="copyLink" :data-clipboard-text="url">
          <template v-if="createTime > 0">再次</template>生成
        </button>
      </div>
    </template>
  </div>
</template>

<script>
import Clipboard from 'clipboard';

export default {
  name: 'app',
  data() {
    return {
      content: '',
      createTime: 0
    }
  },
  computed: {
    keyword () {
      var query = window.location.search.substring(1);
      var vars = query.split("&");
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == 'keyword') {
          return decodeURI(pair[1])
        }
      }
      return(false);
    },
    url () {
      return window.location + '?keyword=' + this.content
    }
  },
  mounted() {
    if (this.keyword) {
      setTimeout(() => {
        window.location = `https://www.baidu.com/s?wd=${this.keyword}`
      }, 5000)
    }
    new Clipboard(this.$refs.copyLink);
  },
  methods: {
    create () {
      this.createTime += 1
      if (this.$refs.copyLink) {
        new Clipboard(this.$refs.copyLink);
      }
      const tip = document.getElementById("js-tip")
      tip.classList.add("highlight")
      setTimeout(() => {
        tip.classList.remove("highlight")
      }, 500)
    },
    goToCreate () {
      window.location = '/'
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .has-keyword {
    position: absolute;
    top: 40%;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;

    img {
      margin-bottom: 40px;
      width: 220px;
    }

    .search-input {
      position: relative;
      display: block;
      margin: 0 auto;
      border: 2px solid #3388FF;
      height: 42px;
      width: 90%;
      max-width: 560px;
      text-align: left;

      animation: search-input 5s;

      @keyframes search-input {
        0% {
          border-color: #ddd;
        }
        35% {
          border-color: #ddd;
        }
        40% {
          border-color: #3388FF;
        }
        100% {
          border-color: #3388FF;
        }
      }

      &:after {
        content: '百度一下';
        position: absolute;
        top: -2px;
        right: -2px;
        bottom: -2px;
        width: 100px;
        background-color: #3388FF;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        line-height: 46px;
        color: white;
        animation: button 5s;

        @keyframes button {
          94% {
            background-color: #3388FF;
          }
          96% {
            background-color: #18488c;
          }
          98% {
            background-color: #3388FF;
          }
        }
      }

      .keyword {
        margin-left: 10px;
        font-size: 24px;
        font-weight: bold;
        line-height: 42px;
        animation: keyword 5s;

        @keyframes keyword {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0;
          }
          70% {
            opacity: 1;
          }
          100% {
            opacity: 1;
          }
        }
      }

      .mouse {
        position: absolute;
        left: 90%;
        bottom: 30px;
        transform: rotate(-30deg);
        z-index: 1;
        animation: mouse 5s;

        @keyframes mouse {
          0% {
            left: 50%;
            bottom: -30px;
          }
          20% {
            left: 50%;
            bottom: -30px;
          }
          40% {
            left: 50%;
            bottom: 30px;
          }
          60% {
            left: 50%;
            bottom: 30px;
          }
          100% {
            left: 90%;
            bottom: 30px;
          }
        }

        &:before {
          content: '';
          position: absolute;
          left: 0;
          top: -17px;
          width: 0;
          height: 0;
          border-top: solid 32px transparent;
          border-bottom: solid 32px black;
          border-left: solid 12px transparent;
          border-right: solid 12px transparent;
        }

        &:after {
          content: '';
          position: absolute;
          left: 9px;
          top: 40px;
          width: 6px;
          height: 24px;
          background-color: black;
        }
      }
    }
  }

  a {
    position: absolute;
    left: 50%;
    bottom: 30px;
    margin-left: -40px;
    padding-bottom: 2px;
    color: #3388FF;
    text-decoration: none;
    border-bottom: 1px solid #3388FF;
    cursor: pointer;
  }

  .create {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;

    .title, #js-tip {
      font-size: 24px;
      font-weight: bold;
    }

    #js-tip.highlight {
      animation: tip .4s;

      @keyframes tip {
        0% {
          opacity: 1;
        }
        50% {
          opacity: .6;
        }
        100% {
          opacity: 1;
        }
      }
    }

    .subtitle {
      font-size: 16px;
      color: #999;
    }

    input, button {
      display: block;
      margin: 30px auto 0;
      border-radius: 6px;
      font-size: 18px;
    }

    input {
      width: 260px;
      padding: 8px 10px;
      border: 2px solid #ddd;
      -webkit-appearance: none;
      &::-webkit-input-placeholder { color: #999; }
    }

    button {
      width: 284px;
      padding: 8px 0;
      background-color: #3388FF;
      color: white;
      font-weight: bold;
      border: none;
      cursor: pointer;

      &:hover {
        background-color: #1b70e6;
      }

      &.no-content {
        opacity: .4;
        pointer-events: none;
      }
    }
  }
}
</style>
