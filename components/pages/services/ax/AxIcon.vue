<template>
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <template v-if="name === 'diagnosis'">
        <circle cx="21" cy="21" r="11" />
        <path d="m29 29 9 9M21 16v10M16 21h10" />
      </template>
      <template v-else-if="name === 'build'">
        <path d="m10 17 14-8 14 8v17L24 42 10 34V17Z" />
        <path d="m10 17 14 8 14-8M24 25v17M17 13l14 8" />
      </template>
      <template v-else-if="name === 'legacy'">
        <path d="M12 15h19a9 9 0 0 1 0 18H17" />
        <path d="m17 27-6 6 6 6M31 21l6-6-6-6" />
        <path d="M37 15H17a9 9 0 0 0-8 5" />
      </template>
      <template v-else-if="name === 'internalize'">
        <circle cx="24" cy="15" r="6" />
        <circle cx="12" cy="27" r="4" />
        <circle cx="36" cy="27" r="4" />
        <path d="M15 40c1-6 4-9 9-9s8 3 9 9M4 40c.6-4.5 3.3-7 8-7 2 0 3.6.4 5 1.3M44 40c-.6-4.5-3.3-7-8-7-2 0-3.6.4-5 1.3" />
      </template>
      <template v-else-if="name === 'quality'">
        <path d="M24 6 39 12v11c0 9-5.5 15.5-15 19-9.5-3.5-15-10-15-19V12L24 6Z" />
        <path d="m17 24 5 5 10-11" />
      </template>
      <template v-else-if="name === 'approval'">
        <rect x="10" y="7" width="28" height="34" rx="4" />
        <path d="M18 7v-2h12v2M17 18h14M17 25h8M17 32l3 3 6-7" />
      </template>
      <template v-else-if="name === 'security'">
        <rect x="9" y="21" width="30" height="21" rx="4" />
        <path d="M16 21v-6a8 8 0 0 1 16 0v6M24 29v6" />
      </template>
      <template v-else-if="name === 'cost'">
        <path d="M8 38V10M8 38h33" />
        <path d="m13 31 8-8 6 5 11-14" />
        <path d="M31 14h7v7" />
      </template>
      <template v-else-if="name === 'audit'">
        <path d="M13 7h22v34H13zM18 15h12M18 22h12M18 29h7" />
        <circle cx="33" cy="34" r="7" />
        <path d="m38 39 4 4" />
      </template>
      <template v-else-if="name === 'neutral'">
        <circle cx="24" cy="24" r="17" />
        <path d="M7 24h34M24 7c5 5 7 10.7 7 17s-2 12-7 17c-5-5-7-10.7-7-17s2-12 7-17Z" />
      </template>
      <template v-else-if="name === 'person'">
        <circle cx="24" cy="16" r="7" />
        <path d="M11 41c1.5-9 5.8-14 13-14s11.5 5 13 14" />
      </template>
      <template v-else-if="name === 'arrow'">
        <path d="M8 24h30M29 14l10 10-10 10" />
      </template>
    </g>
  </svg>
</template>

<script setup lang="ts">
type AxIconName =
  | 'diagnosis'
  | 'build'
  | 'legacy'
  | 'internalize'
  | 'quality'
  | 'approval'
  | 'security'
  | 'cost'
  | 'audit'
  | 'neutral'
  | 'person'
  | 'arrow'

defineProps<{ name: AxIconName }>()
</script>
