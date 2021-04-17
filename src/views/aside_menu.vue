
<template>
<aside>
  <ul>
    <li><i class="fa fa-play" aria-hidden="true"></i> Start</li>
    <li><i class="fa fa-sitemap" aria-hidden="true"></i> {{$t('tree')}}</li>
    <li><i class="fa fa-folder" aria-hidden="true"></i>{{$t('view')}} </li>
    <!--<li>Logs</li>-->
    <li><i class="fa fa-bug" aria-hidden="true"></i>{{$t('errors')}} </li>
    <li><i class="fa fa-users" aria-hidden="true"></i> {{$t('characters')}}</li>
    <li><i class="fa fa-picture-o" aria-hidden="true"></i> {{$t('assets')}}</li>
    <li><i class="fa fa-university" aria-hidden="true"></i> {{$t('libraries')}}</li>
    <li><i class="fa fa-plug" aria-hidden="true"></i> {{$t('plugins')}}</li>
    <li><i class="fa fa-sliders" aria-hidden="true"></i> {{$t('options')}}</li>
    <li><i class="fa fa-archive" aria-hidden="true"></i> {{$t('build')}}</li>
    <li><i class="fa fa-cloud-upload" aria-hidden="true"></i> {{$t('publish')}}</li>
  </ul>
</aside>
</template>


<script>

export default {

  name: 'aside_menu',
  data (){
    return {
    }
  },
  created() {

  },
  mounted (){
  },
  methods: {

  }
}


</script>
