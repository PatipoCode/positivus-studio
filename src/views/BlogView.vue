<script setup>
import { ref } from "vue";
import AppContainer from "../components/layout/AppContainer.vue";
import UnderConstruction from "../components/ui/UnderConstruction.vue";
import BlogSearch from "../components/ui/BlogSearch.vue";
import BlogCard from "../components/ui/cards/BlogCard.vue";

const query = ref("");

const posts = [
  {
    id: 1,
    category: "Tutorial",
    date: "January 20, 2024",
    title: "How to quickly deploy a static website",
    description:
      "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
    author: { name: "Jese Leos", avatar: "/blog/authors/jese-leos.png" },
    href: "#",
  },
  {
    id: 2,
    category: "SEO",
    date: "February 5, 2024",
    title: "Top 10 SEO strategies that actually work in 2024",
    description:
      "Search engine optimization keeps evolving. In this post we break down the most effective tactics to boost your organic traffic and stay ahead of algorithm updates.",
    author: { name: "John Smith", avatar: "/team/john-smith.png" },
    href: "#",
  },
  {
    id: 3,
    category: "Social Media",
    date: "February 18, 2024",
    title: "How to grow your audience on Instagram organically",
    description:
      "Paid ads are not the only way to grow. Discover proven organic strategies to build a loyal following, increase engagement, and turn followers into customers.",
    author: { name: "Jane Doe", avatar: "/team/jane-doe.png" },
    href: "#",
  },
  {
    id: 4,
    category: "PPC",
    date: "March 2, 2024",
    title: "Beginner's guide to Google Ads campaigns",
    description:
      "Running Google Ads for the first time can feel overwhelming. This guide walks you through campaign setup, keyword research, bidding strategies, and performance tracking.",
    author: { name: "Emily Johnson", avatar: "/team/emily-johnson.png" },
    href: "#",
  },
  {
    id: 5,
    category: "Content",
    date: "March 15, 2024",
    title: "Why storytelling is the future of content marketing",
    description:
      "Brands that tell compelling stories outperform those that just list features. Learn how to craft narratives that resonate with your target audience and drive conversions.",
    author: { name: "Sarah Kim", avatar: "/team/sarah-kim.png" },
    href: "#",
  },
  {
    id: 6,
    category: "Analytics",
    date: "March 28, 2024",
    title: "Understanding your data: a marketer's guide to Google Analytics 4",
    description:
      "GA4 introduced a completely new data model. We explain the key concepts, how to set up events, and which reports matter most for digital marketing decisions.",
    author: { name: "Brian Williams", avatar: "/team/brian-williams.png" },
    href: "#",
  },
];
</script>

<template>
  <main>
    <AppContainer v-if="false">
      <div class="blog-header">
        <h1 class="blog-header__title">Our Blog</h1>
        <p class="blog-header__description">
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </p>
        <BlogSearch v-model="query" />
      </div>

      <div class="blog-grid">
        <BlogCard
          v-for="post in posts"
          :key="post.id"
          :category="post.category"
          :date="post.date"
          :title="post.title"
          :description="post.description"
          :author="post.author"
          :href="post.href"
        />
      </div>
    </AppContainer>
    <AppContainer>
      <UnderConstruction />
    </AppContainer>
  </main>
</template>

<style lang="scss" scoped>
.blog-header {
  padding: clamp(40px, 5vw, 70px) 0 50px;
  max-width: 760px;
  margin: 0 auto;
  text-align: center;

  &__title {
    font-size: $text-3xl;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__description {
    font-size: $text-xl;
    line-height: 1.5;
    margin-bottom: 40px;
  }
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding-bottom: clamp(40px, 5vw, 70px);
}
</style>
