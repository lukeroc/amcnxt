<template>
  <a-article
    title="Maltese startup to showcase Amico, a friendly AI character, at ZEST 2017"
    featuredImage="hero-background-press.png"
    featuredImageMob="hero-background-press-mob.png"
    publishDate="06 September 2017">

    <div slot="a-article-content" class="content-wrapper">

      <div class="content">
        <div class="contained-content">
          <p class="content-body">
            Fast growing Maltese startup, amico.ai, is
            soon launching an artificially intelligent (AI) friend that people will be
            able to chat with via a mobile app. Similar to the company itself, the AI
            character will be called Amico and will be showcased for the first time at
            the ZEST 2017 conference, being held at the Golden Sands Resort in Malta this
            September 19th and 20th.
          </p>

          <p class="content-body">
            As platinum partners of ZEST 2017, amico.ai shall be offering delegates the
            opportunity to  make use of Amico as a friendly AI that can assist them with
            their questions about the conference. Through a chat interface, Amico will be
            answering questions related to the event schedule, speakers and it will also
            help delegates network by introducing them to each other.
          </p>

          <p class="content-body">
            Beyond aiding at the event, there is another more fun side to Amico. As an AI,
            Amico is different because he introduces his own unique and amusing personality
            that makes interacting with him engaging and enjoyable.
          </p>

          <p class="content-body">
            Dr. Abdalla Kablan, CEO of amico.ai, added “We are working on developing an
            intelligent character that can improve people’s lives, but not in the same way
            as other AI assistants. Other AIs are perceived as somewhat cold. Instead, we
            prefer to focus on designing a warmer user experience that is similar to how one
            interacts with a friend, not with a robot”.
          </p>

          <p class="content-body">
            In order to chat with Amico, delegates must download the Amico Connect mobile
            app from either the Apple App Store or the Google Play Store. The app, which
            was developed internally, will be released a few days before the conference.
          </p>

          <p class="content-body">
            The startup itself, amico.ai, was founded this year and is made up of a
            combination of local and remote team members. The company is made up of
            27 employees and is continually growing in order to fulfill its long-term
            vision of creating an AI that people would consider as a real friend.
          </p>
        </div>
      </div>
    </div>
  </a-article>
</template>

<script>
import { aArticle } from '~/components/amico/aArticle'

export default {
  components: {
    aArticle
  },
  head: {
    title: 'Maltese startup to showcase Amico, a friendly AI character, at ZEST 2017',
    meta: [
      {
        hid: 'metaDescription',
        name: 'description',
        content: 'Meet Amico, an artificially intelligent friend that will not only be aiding ZEST delegates to answer any questions they might have, but he will also showcase his amusing and funny personality. Get to know more about Amico by reading this article.'
      },
      {
        hid: 'ogTitle',
        property: 'og:title',
        content: 'Maltese startup to showcase Amico, a friendly AI character, at ZEST 2017'
      },
      {
        hid: 'ogDescription',
        property: 'og:description',
        content: 'Meet Amico, an artificially intelligent friend that will not only be aiding ZEST delegates to answer any questions they might have, but he will also showcase his amusing and funny personality. Get to know more about Amico by reading this article.'
      },
      {
        hid: 'ogUrl',
        property: 'og:url',
        content: 'https://www.amico.ai/press'
      },
      {
        hid: 'ogImage',
        property: 'og:image',
        content: 'https://amico.ai/static/images/social-press.jpg'
      },
      {
        hid: 'ogImageAlt',
        property: 'og:image:alt',
        content: 'Press Social Image'
      }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.amico.ai/press' }
    ]
  }
}
</script>
