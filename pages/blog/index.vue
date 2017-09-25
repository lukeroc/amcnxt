<template>

  <a-article
    title="Why your future best friend may be a charming robot"
    featuredImage="hero-background-blog.png"
    featuredImageMob="hero-background-blog-mob.png"
    publishDate="11 September 2017">

    <div slot="a-article-content" class="content-wrapper">

      <div class="content">
        <div class="contained-content">
          <p class="content-body strong">
            There’s nothing like the warm hug of a robot.
          </p>
          <p class="content-body strong">
            Ok, we are not there yet.
          </p>
          <p class="content-body strong">
            But... what if I told you robots will soon become our dear friends?
          </p>
          <p class="content-body strong">
            Some say there’s a risk of becoming alienated. Others believe they can bring tremendous improvements. What’s for sure is that the role that AI and bots play in our life is growing every day.
          </p>
        </div>
      </div>


      <div class="content content-bottom-space">
        <div class="contained-content">
          <div class="text-content">
            <h2 class="a-article-subtitle">We are done with only AI assistants. What’s next?</h2>
            <p class="content-body">
              Artificial Intelligence (AI) has been around for years. It’s been helping us search online, set up appointments, find adequate products online and much more.
            </p>
            <p class="content-body">
              Traditional AI bots were built to be assistants, programmed to remove tedious tasks from our agenda and to save us time. And hey, we do appreciate the help! But we must keep moving forward. Productivity is not our only concern.
            </p>
            <p class="content-body">
              AI assistants are still missing basic aspects of humanity. Our feelings, creativity, social life and even every day incoherences we deal with seem to be out of the picture. Most AI bots can't interpret people's sensitivity, creating a significant emotional gap between people and AI.
            </p>
          </div>
          <div class="image-content robots">
            <img alt="Evolving AI." src="~/static/images/blog-content-robots.jpg">
          </div>
        </div>
      </div>


      <div class="content content-bottom-space">
        <div class="contained-content">
          <h2 class="a-article-subtitle">We are building the emotional bridge between people and AIs</h2>
          <p class="content-body">
            Now, the advances of machine learning change the picture. AI is evolving and allowing us to develop more sophisticated bots that can develop a deep understanding of our needs. To drive that growth in the best direction possible, we need to develop their empathy, to help us not only by saving time but also by taking care of our emotional well being.
          </p>
          <p class="content-body">
            AI’s that achieve an integral understanding of people, will offer an interaction that’s much more pleasant for the user. They will recognize human motivations and so provide excellent company and advice. We are not willing to save time ‘just because’. We are driven by social and emotional needs like learning, resting, or seeing the ones we care for.
          </p>
          <p class="content-body">
            At amico.ai we are working on Amico, a very friendly AI who has your best interest at heart. He doesn't only pursue to improve your productivity, but also your well-being in various aspects of your life.
          </p>
          <p class="content-body">
            Just like any other friend, Amico needs to learn from the you and acquire experience to better understand you and keep you good company. In essence Amico will sense the user's’ current mood, adapt to his needs and remember his preferences. In this way, Amico will be able to give advice, make people laugh and even reflect on important issues.
          </p>
          <p class="content-body">
            Is that enough for calling an AI a friend?
          </p>
        </div>
      </div>

      <div class="content content-bottom-space">
        <div class="contained-content">
          <h2 class="a-article-subtitle">Aristotle says yes</h2>
            <p class="content-body">
              It's not like he time-travelled to tell us but, according to Aristotle, there are 3 types of friendship. There’s Utility friendship, Pleasure friendship and Virtue friendship. This last one is supposed to be the ideal friendship in which the value lies in the mutual sharing of beliefs and interests and the enriching effect of the interactions they share.
            </p>
            <p class="content-body">
              Now, some may claim that robots don't carry inner mental lives or authentic beliefs. But how do we know that? As chatbots evolve, they seem to have their own interests, values, and concerns, and they are getting trained for interacting with us in unlimited ways.  We don't have access to someone's inner mental life; we just build relationships on trust.
            </p>
            <p class="content-body">
              Even if robots fail to live up to the Virtue friendship, there is no reason why we cannot form utility or pleasure friendships with them. These relationships will have value and don't require mutuality.
            </p>
        </div>
      </div>

      <div class="content content-bottom-space">
        <div class="contained-content">
          <h2 class="a-article-subtitle">So is this the end of the human friendship?</h2>
          <p class="content-body">
            On the contrary! There are strong reasons to suspect that robot friendships could promote, rather than corrode, human-to-human Virtue friendships.
          </p>
          <p class="content-body">
            In particular, philosopher Peter Singer's arguments about the expanding circle of moral concern says that caring expands from our small closest groups on to larger communities. It could be that personifying robots will train-up our empathic concern for others and encourage us to have more fulfilling interactions with our fellow human beings.
          </p>
          <p class="content-body">
            In other words, interacting with friendly, emphatic AIs may make us more emotionally intelligent. And that in itself may help us in our everyday human friendships.
          </p>
          <p class="content-body">
            We are already enjoying several benefits of having AI in our life, and there's still much more to come. AI will grow to take over those tasks that we find repetitive and monotonous and give us extra time to concentrate on our real interests. With their help, we will expand our skill set and perform better.
          </p>
          <p class="content-body">
            But that's not just it. Since AIs can build such uninterested and generous relationships with us, they will drive us to positive relationships not only with machines but also between people.
          </p>
          <p class="content-body">
            Amico, for instance, will be able to understand you, entertain you, and at the same time access endless information that he can rapidly scan to give the best advice . This combination makes him an excellent advisor and trustworthy friend.
          </p>
          <p class="content-body">
            We believe that AI technology can save us so much time, we will become more free, more creative, and closer to each other. In a way, opening up to AI will make us even more human.
          </p>
        </div>
      </div>

      <div class="content content-bottom-space">
        <div class="contained-content">
          <div class="a-about-author">
            <p class="x-small">About the author</p>
            <p class="x-small"><b>Juana Isola</b> is a creative writer from Buenos Aires, Argentina.</p>
            <p class="x-small">She works as a copywriter at amico.ai and specializes in digital and interactive experiences.</p>
          </div>
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
    title: 'This is why your future best friend may be a charming robot',
    meta: [
      {
        hid: 'metaDescription',
        name: 'description',
        content: "You are in for a treat! Having loving friends can sometimes be difficult even if you know thousands of people, but what if you can be friends with an understanding, cute and funny AI? Well, you’ll be surprised with what today's AI technology has to offer."
      },
      {
        hid: 'ogTitle',
        property: 'og:title',
        content: 'This is why your future best friend may be a charming robot'
      },
      {
        hid: 'ogDescription',
        property: 'og:description',
        content: "You are in for a treat! Having loving friends can sometimes be difficult even if you know thousands of people, but what if you can be friends with an understanding, cute and funny AI? Well, you’ll be surprised with what today's AI technology has to offer."
      },
      {
        hid: 'ogUrl',
        property: 'og:url',
        content: 'https://www.amico.ai/blog'
      },
      {
        hid: 'ogImage',
        property: 'og:image',
        content: 'https://amico.ai/static/images/social-blog.png'
      },
      {
        hid: 'ogImageAlt',
        property: 'og:image:alt',
        content: 'Blog Social Image'
      }
    ],
    link: [
      { rel: 'canonical', href: 'https://www.amico.ai/blog' }
    ]
  }
}
</script>

<style lang="scss">
.image-content {
  &.robots {
    width: 100%;
    padding: 32px 0 0;
    text-align: center;

    @media (min-width: 920px) {
      float: right;
      width: 480px;
      padding: 32px 0 32px 32px;
    }

    @media (min-width: 1366px) {
      width: 555px;
    }
  }
}
</style>
