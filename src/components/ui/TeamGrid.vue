<script setup>
import BaseButton from "../base/BaseButton.vue";
import TeamCard from "./cards/TeamCard.vue";

const members = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: "/team/john-smith.png",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    image: "/team/jane-doe.png",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    image: "/team/michael-brown.png",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: "/team/emily-johnson.png",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    image: "/team/brian-williams.png",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    image: "/team/sarah-kim.png",
  },
];
</script>

<template>
  <div class="team-grid">
    <div class="team-grid__list">
      <TeamCard
        v-for="member in members"
        :key="member.name"
        :name="member.name"
        :role="member.role"
        :description="member.description"
        :image="member.image"
      />
    </div>
    <div class="team-grid__footer">
      <BaseButton variant="dark" disabled>See all team</BaseButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.team-grid__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 1265px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: $bp-md) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.team-grid__footer {
  display: flex;
  justify-content: flex-end;
}
</style>
