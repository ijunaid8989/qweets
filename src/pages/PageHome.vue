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

    <q-list separator>
      <q-item
        v-for="qweet in qweets"
        :key="qweet.date"
        class="q-py-md">
        <q-item-section avatar top>
          <q-avatar size="xl">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1">
            <strong>Junaid Farooq</strong>
            <span class="text-grey-7">
              @junaid_farooq
            </span>
          </q-item-label>
          <q-item-label class="qweet-content text-body1">{{ qweet.content }}</q-item-label>
          <div class="qweet-icons row justify-between q-mt-sm">
            <q-btn
              color="grey"
              icon="far fa-comment"
              size="sm"
              flat
              round
            />
            <q-btn
              color="grey"
              icon="fas fa-retweet"
              size="sm"
              flat
              round
            />
            <q-btn
              color="grey"
              icon="far fa-heart"
              size="sm"
              flat
              round
            />
            <q-btn
              color="grey"
              icon="fas fa-trash"
              size="sm"
              flat
              round
            />
          </div>
        </q-item-section>

        <q-item-section side top>
          {{ qweet.date | relativeDate }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { formatDistance } from "date-fns"

export default {
  name: 'PageHome',
  data() {
    return {
      newQweetContent: '',
      qweets: [
        {
          content: "Aliquam voluptatem voluptatibus sit sunt, iusto repellendus voluptate amet eos numquam nam excepturi ab fuga delectus minima molestias. Ex nobis corporis suscipit!",
          date: 1622920196275
        },
        {
          content: "Aliquam voluptatem voluptatibus sit sunt, iusto repellendus voluptate amet eos numquam nam excepturi ab fuga delectus minima molestias. Ex nobis corporis suscipit!",
          date: 1622920210394
        }
      ]
    }
  },
  filters: {
    relativeDate(value) {
      return formatDistance(value, new Date())
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

.qweet-content
  white-space: pre-line

.qweet-icons
  margin-left: -5px
</style>
