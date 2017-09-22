<template>
  <section class="a-logout">
    <a-dialog ref="logout" clickOverlayClose="true">

      <div slot="a-dialog-header">
        <h3 class="a-dialog-title">Log out Tagg 2.0</h3>
      </div>

      <div slot="a-dialog-body">
        <p>Are you sure you want to log out from your account?</p>
      </div>

      <div slot="a-dialog-footer">
        <div class="a-dialog-actions">
          <a-button @click.native="submitLogout" :isLoading="isFormLoading" label="Logout" type="primary"></a-button>
          <a-button @click.native="closeLogoutDialog" :isDisabled="isFormLoading" label="Cancel" type="secondary"></a-button>
        </div>
      </div>
    </a-dialog>
  </section>
</template>

<script>
import { AUTHENTICATION_ACTIONS } from 'modules/amico/authentication'

import { aButton } from 'components/amico-ui/aButton'
import { aDialog } from 'components/amico-ui/aDialog'

export default {
  components: {
    aButton,
    aDialog
  },
  data () {
    return {
      isFormLoading: false
    }
  },
  methods: {
    openLogoutDialog () {
      this.$refs.logout.open()
    },
    closeLogoutDialog () {
      this.$refs.logout.close()
    },
    submitLogout () {
      this.isFormLoading = true
      this.$store.dispatch(AUTHENTICATION_ACTIONS.revoke)
        .then(() => {
          this.isFormLoading = false
        }).catch(() => {
          this.isFormLoading = false
        })

      this.$router.push({ name: 'landing-page' })
    }
  }
}
</script>
