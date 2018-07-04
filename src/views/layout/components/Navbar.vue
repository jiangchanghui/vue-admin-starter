<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <div class="right-menu">
      <error-log class="errLog-container right-menu-item"></error-log>
      <div class="message-container right-menu-item">
        <div class="message-wrapper">
          <el-badge value="5" >
            <svg-icon icon-class="email" class="message-avatar"></svg-icon>
          </el-badge>
        </div>
      </div>

      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <svg-icon icon-class="user" class="user-avatar"></svg-icon>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="logout" style="display:block;">{{$t('navbar.logOut')}}</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="screenfullToggle" style="display:block;">全屏</span>
          </el-dropdown-item>

        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Hamburger from '@/components/Hamburger'
  import ErrorLog from '@/components/ErrorLog'
  import screenfull from 'screenfull'

  export default {
    components: {
      Hamburger,
      ErrorLog
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'name',
        'avatar'
      ])
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('toggleSideBar')
      },
      logout() {
        this.$store.dispatch('LogOut').then(() => {
          location.reload()// In order to re-instantiate the vue-router object to avoid bugs
        })
      },
      screenfullToggle() {
        if (!screenfull.enabled) {
          this.$message({
            message: 'you browser can not work',
            type: 'warning'
          })
          return false
        }
        screenfull.toggle()
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    theme: black;
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    .hamburger-container {
      line-height: 58px;
      height: 50px;
      float: left;
      padding: 0 10px;
    }
    .errLog-container {
      display: inline-block;
      vertical-align: top;
    }
    .right-menu {
      float: right;
      height: 100%;
      &:focus {
        outline: none;
      }
      .right-menu-item {
        display: inline-block;
        margin: 0 4px;
      }
      .avatar-container {
        height: 40px;
        .avatar-wrapper {
          cursor: pointer;
          margin-top: 5px;
          position: relative;
          .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            color: #36a3f7;
          }
          &:hover {
            .user-avatar {
              background: #36a3f7;
              color: #fff;
            }
          }
        }
      }
      .message-container {
        height: 40px;
        .message-wrapper {
          cursor: pointer;
          margin-top: 5px;
          position: relative;
          .message-avatar {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            padding: 6px;
            color: #34bfa3;
            transition: all 0.38s ease-out;
          }
          &:hover {
            .message-avatar {
              background: #34bfa3;
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>
