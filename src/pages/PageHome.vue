<template>
  <q-page>
    <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          bottom-slots
          v-model="newQweetContent"
          class="new-qweet"
          placeholder="What's happening?"
          counter
          maxlength="280"
          autogrow
        >
          <template v-slot:before>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          :disabled="!newQweetContent"
          class="q-mb-lg"
          color="primary"
          label="Qweet"
          rounded
          unelevated
          no-caps
        />
      </div>
    </div>

    <q-separator
      size="10px"
      class="divider"
      color="grey-2"
    />
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {
      newQweetContent: ''
    }
  }
}
</script>

<style lang="sass">
.new-qweet
  textarea
    font-size: 17px
    line-height: 1.4 !important

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-5
</style>
