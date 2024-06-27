<script setup lang="ts">
  import { ref } from "vue";
  import type { FormInstance } from "element-plus";
  import { useProfile } from './hooks/user/index';

  const { formData, rules, saveProfile, getProfile } = useProfile();

  const form = ref<FormInstance>(), isEdit = ref(false), loading = ref(false)

  const handleProfileState = () => {
    // 编辑
    if (!isEdit.value) {
      isEdit.value = !isEdit.value;
      return
    }
    //保存
    console.log('edit');
    form.value?.validate((valid) => {
      if (!valid) return;
      console.log('gogo');
      handleSaveProfile();
    })
  }

  const handleSaveProfile = async () => {
    loading.value = true;
    try {
      await saveProfile();
      isEdit.value = false;
    } catch (error) {

    }
    finally {
      loading.value = false;
    }
  }

  const closeEditProfile = () => {
    if (!isEdit.value) return;
    //edit state
    isEdit.value = false;
    loading.value = false;
    //edit validate state
    form.value?.clearValidate();
    getProfile();

  }

</script>


<template>
    <el-form
     ref="form" label-position="top" label-width="80px" :model="formData" :rules="rules"
     class="formStyle"
    >
      <el-card  shadow="always" class="cardStyle">
          <el-row :span="24">
            <el-form-item label="用户名" prop="name" >
              <el-input v-model="formData.name" class="inputStyle" :disabled="!isEdit"/>
            </el-form-item>
          </el-row>
          <el-row :span="24">
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="formData.email" class="inputStyle" :disabled="!isEdit"/>
            </el-form-item>
          </el-row>
          <el-row  :span="24">
            <el-form-item label="电话" prop="phone">
              <el-input v-model="formData.phone" class="inputStyle" :disabled="!isEdit"/>
            </el-form-item>
          </el-row>

          <el-row>
            <el-button type="primary"  @click="handleProfileState" :loading="loading"> {{ isEdit ? '保存' : '编辑' }} </el-button>
            <el-button type="danger" @click="closeEditProfile" :loading="loading" v-show="isEdit"> 关闭 </el-button>
          </el-row>
      </el-card>
    </el-form>

</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.cardStyle {
  width: 50vw;
}

.el-form-item  {
  width: 100%
}

.formStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

@media only screen and (max-width: 1024px) {
  .cardStyle {
    width: 100%;
  }
  .formStyle {
    align-items: flex-start;
  }
}
</style>
