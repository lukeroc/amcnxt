<template>
  <div id="downloadApp" class="content alternate-content">
    <div class="contained-content a-app-download">
      <div :class="{'fadeInUp': isAnimating}" class="a-download-icon animated">
        <img alt="Download Amico Connect illustration" src="~/static/images/download-icon.svg">
      </div>
      <div :class="{'fadeInUp': isAnimating}" class="a-download-text animated">
        <!-- UNCOMMENT WHEN DOWNLOAD APP BECOMES AVAILABLE -->

        <!-- <h2 class="a-download-title">Download the <span>app</span></h2> -->
        <!-- <p>Your friend is one-click away</p> -->

        <!-- REMOVE OR COMMENT WHEN DOWNLOAD APP BECOMES AVAILABLE -->
        <h2 class="a-download-title">Stay informed</h2>
        <p>Join our community and stay informed with Amico's latest news.</p>
      </div>
      <div :class="{'fadeInUp': isAnimating}" class="a-download-stickers animated">
        <!-- UNCOMMENT WHEN DOWNLOAD APP BECOMES AVAILABLE -->

        <!-- <div class="a-download-sticker">
          <a href="https://play.google.com/store/apps/details?id=com.amico.connect" target="_blank" rel="noopener">
            <img alt="Google Play" src="~/static/images/download-google-play.svg">
          </a>
        </div>
        <div class="a-download-sticker">
          <a href="https://itunes.apple.com/us/app/amico-connect/id1279279389?ls=1&mt=8" target="_blank" rel="noopener">
            <img alt="App Store" src="~/static/images/download-app-store.svg">
          </a>
        </div> -->

        <!-- REMOVE OR COMMENT WHEN DOWNLOAD APP BECOMES AVAILABLE -->
        <div class="field-group">
          <div id="mc_embed_signup">
            <form action="//amico.us16.list-manage.com/subscribe/post?u=7d62195e2f444927bcb7f82f6&amp;id=25d3c27d36" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" rel="noopener" novalidate>
              <div id="mc_embed_signup_scroll">

                <div class="mc-field-group">
                  <label for="mce-EMAIL" style="position: absolute; opacity: 0">SEND</label>
                  <input
                    @focus="isInputFocused = true"
                    @blur="isInputFocused = false"
                    type="email"
                    name="EMAIL"
                    class="required email"
                    id="mce-EMAIL"
                    placeholder="Your email address">
                </div>

                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style="display:none"></div>
                  <div class="response" id="mce-success-response" style="display:none"></div>
                </div>

                <div style="position: absolute; left: -5000px;" aria-hidden="true">
                  <input type="email" name="b_7d62195e2f444927bcb7f82f6_25d3c27d36" tabindex="-1" value="">
                </div>

                <div class="mc-submit-container clear">
                  <input type="submit" value="Send" name="subscribe" id="mc-embedded-subscribe" class="button">
                </div>
                <a aria-label="Submit News Letter Registration" class="send-plane" href="javascript:void(0);">
                  <svg viewBox="0 0 19 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g :class="{'is-focused': isInputFocused}" class="plane-path" id="Footer---D" transform="translate(-1255.000000, -156.000000)" fill="#4A4A4A"> <g id="Col-4-X4"> <g transform="translate(930.000000, 51.000000)"> <g id="Input-Field" transform="translate(0.000000, 94.000000)"> <path d="M325,20.375 L330.417143,22.25 L331.094285,28.5 L334.48,24.125 L339.219999,28.5 L343.959999,11 L325,20.375 L325,20.375 Z M338.487839,26.0546871 L334.48,22.25 L339.897142,15.375 L331.771428,21.3828125 L328.275678,20.171875 L341.903178,13.4335938 L338.487839,26.0546871 L338.487839,26.0546871 Z" id="Submit-email"></path> </g> </g> </g> </g> </g></svg>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isAnimating'],
  data () {
    return {
      isInputFocused: false
    }
  }
}
</script>

<style lang="scss">
#downloadApp {
  background: url('~/static/images/download-pattern.png') #f7f8fa no-repeat;
  background-position: center;
  background-size: contained;

  @media (min-width: 920px) {
    display: flex;
    height: 600px;
  }
}

.a-app-download {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 28px;
  padding-bottom: 32px;

  .a-download-icon {
    margin-bottom: 32px;
    width: 180px;
  }

  .a-download-text {
    margin-bottom: 40px;
    text-align: center;

    .a-download-title {
      margin-bottom: 12px;

      span {
        color: #ffcc00;
      }
    }
  }

  .a-download-stickers {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    @media (min-width: 920px) {
      flex-direction: row;
    }

    .field-group {
      position: relative;

      input[type=email] {
        width: 100%;
        max-width: 480px;
        height: 64px;
        padding: 0 64px 0 24px;
        font-size: 18px;
        border: 1px solid transparent;
        border-radius: 2px;
        transition: border-color 200ms;
        color: #999;

        &:focus {
          border-color: #a2a2a2;
          color: #505050;
        }

        @media (min-width: 540px) {
          width: 480px;
        }
      }

      .send-plane {
        position: absolute;
        top: 50%;
        right: 24px;
        width: 19px;
        height: 18px;
        transform: translateY(-50%);

        .plane-path {
          fill: #999;
          transition: fill 200ms;

          &.is-focused {
            fill: #505050 !important;
          }
        }
      }

      .mc-submit-container {
        position: absolute;
        top: 50%;
        right: 0;
        opacity: 0;
        cursor: pointer !important;
        transform: translateY(-50%);
        z-index: 1;
      }
    }

    .a-download-sticker {
      width: 196px;
      height: 58px;

      @media (min-width: 920px) {
        margin-bottom: 0;

        &:first-child {
          margin-right: 56px;
        }
      }

      @media (max-width: 919px) {
        &:first-child {
          margin-bottom: 20px;
        }
      }

      svg {
        width: 100%;
      }
    }
  }
}


.a-download-icon,
.a-download-text,
.a-download-stickers {
  opacity: 0;
}

.a-download-text {
  animation-delay: 120ms;
}

.a-download-stickers {
  animation-delay: 240ms;
}
</style>
