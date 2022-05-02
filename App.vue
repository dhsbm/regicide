<script>
	export default {
		onLaunch: function() {
      try{
        plus.screen.lockOrientation('landscape-primary')
      }catch(e){
        //TODO handle the exception
      }
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style>
	/*每个页面公共css */
  page {
    height: 100%;
  }
</style>
